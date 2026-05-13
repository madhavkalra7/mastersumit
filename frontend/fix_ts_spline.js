const fs = require('fs');

let code = fs.readFileSync('src/components/sections/Robo.tsx', 'utf8');

code = code.replace(/<spline-viewer/gi, '{/* @ts-ignore */}\n<spline-viewer');

fs.writeFileSync('src/components/sections/Robo.tsx', code);
