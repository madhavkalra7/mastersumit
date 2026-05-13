const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    // Fix tabIndex to be a number
    code = code.replace(/tabIndex="(-?\d+)"/gi, 'tabIndex={$1}');

    fs.writeFileSync(filePath, code);
});
