const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    // Remove empty script tags
    code = code.replace(/<script dangerouslySetInnerHTML=\{\{ __html: `` \}\} \/>/g, '');

    // Fix HeroPopup iframe attributes
    code = code.replace(/frameBorder="0"/gi, 'frameBorder={0}');
    code = code.replace(/allowFullScreen=""/gi, 'allowFullScreen');
    
    // Remove hidden="" attribute (use hidden boolean instead)
    code = code.replace(/\bhidden=""\b/g, 'hidden');
    
    // Fix style display none in strings - common scraped pattern
    code = code.replace(/style=\{\{"display":"none"\}\}/g, 'style={{ display: "none" }}');

    fs.writeFileSync(filePath, code);
});

console.log('Global cleanup done');
