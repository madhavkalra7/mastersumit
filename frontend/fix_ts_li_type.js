const fs = require('fs');

let code = fs.readFileSync('src/components/sections/SummitAgenda.tsx', 'utf8');

code = code.replace(/<li([^>]*?)type="button"([^>]*?)>/gi, '<li$1$2>');

fs.writeFileSync('src/components/sections/SummitAgenda.tsx', code);
