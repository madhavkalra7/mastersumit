const fs = require('fs');

const filePath = 'src/components/sections/SummitAppearances.tsx';
let code = fs.readFileSync(filePath, 'utf8');

// Remove the first inline script block (slider - auto scroll LTR)
code = code.replace(
  /\s*\{\/\* Marquee scroll logic handled by useMarqueeScroll hook above \*\/\}\s*\{\/\* placeholder to preserve structure start \*\/\}\s*\{\/\* placeholder:slider[\s\S]*?` \}\} \/>/,
  ''
);

// Remove the second inline script block (sliderReverse - auto scroll RTL)
code = code.replace(
  /<script dangerouslySetInnerHTML=\{\{ __html: `[\s\S]*?document\.addEventListener\("DOMContentLoaded", \(\) => \{[\s\S]*?sliderReverse[\s\S]*?` \}\} \/>/,
  ''
);

// Remove the inline <style> block
code = code.replace(
  /<style dangerouslySetInnerHTML=\{\{ __html: `[\s\S]*?` \}\} \/>/,
  ''
);

// Remove any leftover empty <script ...> tags
code = code.replace(/<script dangerouslySetInnerHTML=\{\{ __html: `` \}\} \/>/g, '');

fs.writeFileSync(filePath, code);
console.log('SummitAppearances cleaned');
