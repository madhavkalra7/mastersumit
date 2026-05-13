const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    code = code.replace(/window\.ChatbotBuilder/gi, '(window as any).ChatbotBuilder');

    fs.writeFileSync(filePath, code);
});
