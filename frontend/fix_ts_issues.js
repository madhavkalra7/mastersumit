const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const filePath = path.join(dir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    // Fix boolean attributes
    code = code.replace(/\b(autoplay|muted|loop|playsinline)=""/gi, '$1');
    
    // Fix colspan
    code = code.replace(/colspan="(\d+)"/gi, 'colSpan={$1}');
    
    // Fix aria-expanded/aria-selected/aria-hidden (just in case)
    // Wait, earlier I did aria-expanded={false } but if it had spaces it might have failed.
    // Let's just catch all boolean aria attributes that are strings and make them booleans
    // Wait, the error is likely `aria-expanded="false"` or `aria-expanded="true"`.
    // Next.js expects these to be booleanish (true or false or "true" or "false" string... wait, Next.js typing allows string "true" and "false" for aria attributes usually. Let's see what exactly was in SummitAgenda.tsx)
    // "Type 'string' is not assignable to type 'boolean | undefined'."
    // This could also be a `checked=""` or `disabled=""` attribute. Let's fix those too.
    code = code.replace(/\b(checked|disabled|required|readonly|hidden)=""/gi, '$1');

    fs.writeFileSync(filePath, code);
});
