const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    // Fix function calls inside onClick
    code = code.replace(/onClick=\{\(\) => \{ ([a-zA-Z0-9_]+)\(/gi, (match, funcName) => {
        if (!funcName.startsWith('window') && !funcName.startsWith('console')) {
            return `onClick={() => { (window as any).${funcName}(`;
        }
        return match;
    });

    // Fix other React attributes
    code = code.replace(/\bframeborder\b/gi, 'frameBorder');
    code = code.replace(/\ballowfullscreen(\s*=\s*"[^"]*")?/gi, 'allowFullScreen');

    fs.writeFileSync(filePath, code);
});
