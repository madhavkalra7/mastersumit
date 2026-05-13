const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    // Fix onclick to onClick
    code = code.replace(/onclick="([^"]*)"/gi, (match, jsContent) => {
        return `onClick={() => { ${jsContent} }}`;
    });

    fs.writeFileSync(filePath, code);
});
