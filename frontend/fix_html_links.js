const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    code = code.replace(/href="index\.html"/g, 'href="/"');
    code = code.replace(/href="ai-summit\.html(#[^"]*)"/g, 'href="/$1"');
    code = code.replace(/href="ai-summit-form\.html"/g, 'href="/ai-summit-form"');
    code = code.replace(/href="ai-summit-award-form\.html"/g, 'href="/ai-summit-award-form"');
    code = code.replace(/href="gen-ai\.html"/g, 'href="/gen-ai"');
    code = code.replace(/href="ai-summit-form%3Ftab=free2\.html"/g, 'href="/ai-summit-form?tab=free2"');
    code = code.replace(/poster="ai-summit\.html"/g, 'poster=""');
    
    // Fallback for any other .html hrefs
    code = code.replace(/href="([^"]+)\.html([^"]*)"/g, 'href="/$1$2"');

    fs.writeFileSync(filePath, code);
});
