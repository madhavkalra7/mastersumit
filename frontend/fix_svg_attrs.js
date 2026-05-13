const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

let fixedCount = 0;

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    const original = code;

    // SVG camelCase fixes
    code = code.replace(/\bstroke-width="([^"]*)"/g, 'strokeWidth="$1"');
    code = code.replace(/\bstroke-linecap="([^"]*)"/g, 'strokeLinecap="$1"');
    code = code.replace(/\bstroke-linejoin="([^"]*)"/g, 'strokeLinejoin="$1"');
    code = code.replace(/\bstroke-dasharray="([^"]*)"/g, 'strokeDasharray="$1"');
    code = code.replace(/\bstroke-dashoffset="([^"]*)"/g, 'strokeDashoffset="$1"');
    code = code.replace(/\bfill-rule="([^"]*)"/g, 'fillRule="$1"');
    code = code.replace(/\bclip-rule="([^"]*)"/g, 'clipRule="$1"');
    code = code.replace(/\bclip-path="([^"]*)"/g, 'clipPath="$1"');
    code = code.replace(/\bstop-color="([^"]*)"/g, 'stopColor="$1"');
    code = code.replace(/\bstop-opacity="([^"]*)"/g, 'stopOpacity="$1"');
    code = code.replace(/\bfont-family="([^"]*)"/g, 'fontFamily="$1"');
    code = code.replace(/\bfont-size="([^"]*)"/g, 'fontSize="$1"');
    code = code.replace(/\bfont-weight="([^"]*)"/g, 'fontWeight="$1"');
    code = code.replace(/\btext-anchor="([^"]*)"/g, 'textAnchor="$1"');
    code = code.replace(/\bxlink:href="([^"]*)"/g, 'xlinkHref="$1"');
    code = code.replace(/\bxmlns:xlink="([^"]*)"/g, 'xmlnsXlink="$1"');
    code = code.replace(/\bmarker-end="([^"]*)"/g, 'markerEnd="$1"');
    code = code.replace(/\bmarker-start="([^"]*)"/g, 'markerStart="$1"');
    code = code.replace(/\bmarker-mid="([^"]*)"/g, 'markerMid="$1"');
    
    // fix clip-path as attribute value (not prop)
    code = code.replace(/ clip-path="([^"]*)"/g, ' clipPath="$1"');

    if (code !== original) {
        fixedCount++;
        fs.writeFileSync(filePath, code);
        console.log(`  Fixed SVG attrs: ${file}`);
    }
});

console.log(`\nDone. Fixed ${fixedCount} files.`);
