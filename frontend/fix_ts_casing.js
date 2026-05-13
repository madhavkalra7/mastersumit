const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    // Fix casing for React boolean attributes
    code = code.replace(/\bautoplay\b/gi, 'autoPlay');
    code = code.replace(/\bplaysinline\b/gi, 'playsInline');
    
    // Some tags might have aria-expanded="" - wait, Next.js likes it boolean or string. Let's fix missing quotes if any.
    // Earlier I did replace(/\b(autoplay|muted|loop|playsinline)=""/gi, '$1'). So they are now just autoPlay muted loop playsInline. Which is correct in JSX.
    // Let's also fix aria attributes if needed, but they passed type checking earlier until I hit autoPlay.

    fs.writeFileSync(filePath, code);
});
