/**
 * Unfurl theNextTech.css nested CSS → flat CSS
 * Handles: .parent { .child {} } → .parent .child {}
 * Ignores: @keyframes, @media (they are handled separately)
 */
const fs = require('fs');

const inputPath = 'src/styles/theNextTech.css';
const outputPath = 'src/styles/theNextTech.css';

let css = fs.readFileSync(inputPath, 'utf8');

/**
 * Simple nested CSS unfurler.
 * Does NOT handle @media nesting within parent selectors (keeps them as-is).
 */
function unfurlCSS(input) {
    const output = [];
    let i = 0;
    const len = input.length;
    
    // Stack to track parent selectors
    const selectorStack = [];
    // Stack to track if current block is a @rule (don't prefix)
    const isAtRuleStack = [];
    
    let currentSelector = '';
    let currentDecls = '';
    let inComment = false;
    let inString = false;
    let stringChar = '';
    
    function getCurrentParentSelector() {
        const nonAtParents = selectorStack.filter((s, idx) => !isAtRuleStack[idx]);
        return nonAtParents.join(' ');
    }
    
    function flushDecls(selector, decls) {
        if (decls.trim()) {
            output.push(`${selector} {\n${decls}}\n\n`);
        }
    }
    
    // Tokenize
    let pos = 0;
    const tokens = [];
    
    while (pos < len) {
        // Handle comments
        if (!inString && input[pos] === '/' && input[pos+1] === '*') {
            let end = input.indexOf('*/', pos + 2);
            if (end === -1) end = len - 2;
            tokens.push({ type: 'comment', value: input.slice(pos, end + 2) });
            pos = end + 2;
            continue;
        }
        
        // Handle strings
        if (!inString && (input[pos] === '"' || input[pos] === "'")) {
            inString = true;
            stringChar = input[pos];
            let end = pos + 1;
            while (end < len && !(input[end] === stringChar && input[end-1] !== '\\')) end++;
            tokens.push({ type: 'string', value: input.slice(pos, end + 1) });
            pos = end + 1;
            continue;
        }
        
        if (input[pos] === '{') {
            tokens.push({ type: 'open', pos });
            pos++;
        } else if (input[pos] === '}') {
            tokens.push({ type: 'close', pos });
            pos++;
        } else {
            // Accumulate text until next { or }
            let end = pos;
            while (end < len && input[end] !== '{' && input[end] !== '}') {
                if (input[end] === '/' && input[end+1] === '*') break;
                if (input[end] === '"' || input[end] === "'") break;
                end++;
            }
            if (end > pos) {
                tokens.push({ type: 'text', value: input.slice(pos, end) });
                pos = end;
            } else {
                pos++;
            }
        }
    }
    
    // Now process tokens with a state machine
    const parentSelectors = []; // stack of { selector, isAtRule }
    let textBuffer = '';
    let declBuffer = '';
    
    function getCurrentSelector() {
        const parts = parentSelectors.filter(p => !p.isAtRule).map(p => p.selector.trim());
        return parts.join(' ');
    }
    
    function getAtRuleWrap() {
        return parentSelectors.filter(p => p.isAtRule);
    }
    
    function emitDecls(decls) {
        if (!decls.trim()) return;
        const sel = getCurrentSelector();
        if (!sel) return; // top-level decls without selector
        
        const atRules = getAtRuleWrap();
        let result = `${sel} {\n${decls}}\n\n`;
        
        // Wrap in @rules if any
        for (let i = atRules.length - 1; i >= 0; i--) {
            result = `${atRules[i].selector} {\n${result}}\n\n`;
        }
        output.push(result);
    }
    
    for (let t = 0; t < tokens.length; t++) {
        const tok = tokens[t];
        
        if (tok.type === 'comment') {
            // emit comments as-is at top level
            if (parentSelectors.length === 0) {
                output.push(tok.value + '\n');
            }
            // else skip nested comments
            continue;
        }
        
        if (tok.type === 'string') {
            textBuffer += tok.value;
            continue;
        }
        
        if (tok.type === 'text') {
            textBuffer += tok.value;
            continue;
        }
        
        if (tok.type === 'open') {
            // textBuffer contains the selector/at-rule
            const raw = textBuffer.trim();
            textBuffer = '';
            
            if (!raw) {
                // empty - just open
                parentSelectors.push({ selector: '', isAtRule: false });
                continue;
            }
            
            const isAtRule = raw.startsWith('@');
            
            if (isAtRule) {
                // @keyframes, @media, @supports etc
                if (raw.match(/@keyframes/)) {
                    // Collect entire @keyframes block as raw
                    // Find matching close
                    let depth = 1;
                    let raw2 = raw + ' {';
                    t++;
                    while (t < tokens.length && depth > 0) {
                        if (tokens[t].type === 'open') {
                            depth++;
                            raw2 += tokens[t-1]?.value || '';
                            raw2 += '{';
                        } else if (tokens[t].type === 'close') {
                            depth--;
                            if (depth === 0) raw2 += '}';
                            else raw2 += '}';
                        } else {
                            raw2 += tokens[t].value || '';
                        }
                        if (depth > 0) t++;
                        else break;
                    }
                    output.push(raw2 + '\n\n');
                    continue;
                }
                
                // For @media, @supports: push as wrapper
                // First emit any pending decls under current selector
                emitDecls(declBuffer);
                declBuffer = '';
                parentSelectors.push({ selector: raw, isAtRule: true });
            } else {
                // Regular selector
                // First emit pending decls under current selector
                if (parentSelectors.length > 0) {
                    emitDecls(declBuffer);
                    declBuffer = '';
                }
                
                // Build combined selector
                let combined = raw;
                const parentSel = getCurrentSelector();
                if (parentSel && !raw.startsWith('@')) {
                    // Handle & combinator
                    if (raw.includes('&')) {
                        combined = raw.replace(/&/g, parentSel);
                    } else {
                        combined = parentSel ? `${parentSel} ${raw}` : raw;
                    }
                }
                
                parentSelectors.push({ selector: combined, isAtRule: false });
            }
            continue;
        }
        
        if (tok.type === 'close') {
            // Emit pending decls
            emitDecls(declBuffer);
            declBuffer = '';
            
            if (parentSelectors.length > 0) {
                const top = parentSelectors[parentSelectors.length - 1];
                parentSelectors.pop();
                
                if (top.isAtRule && parentSelectors.length === 0) {
                    // closing top-level @media etc - already emitted inside
                }
            }
            textBuffer = '';
            continue;
        }
    }
    
    return output.join('');
}

// Actually - use a simpler regex-based approach for the specific pattern:
// .theNextTech { ...nested rules... }
// Extract the content of .theNextTech { } and prefix each rule with .theNextTech

function simpleUnfurl(cssText) {
    const lines = cssText.split('\n');
    const result = [];
    let depth = 0;
    let inTheNextTech = false;
    let theNextTechDepth = -1;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const openCount = (line.match(/\{/g) || []).length;
        const closeCount = (line.match(/\}/g) || []).length;
        
        // Check if entering .theNextTech block
        if (!inTheNextTech && line.trim() === '.theNextTech {') {
            inTheNextTech = true;
            theNextTechDepth = depth;
            depth += openCount - closeCount;
            // Don't emit this line - we'll prefix children
            continue;
        }
        
        if (inTheNextTech) {
            // Check if we're closing the .theNextTech block
            const newDepth = depth + openCount - closeCount;
            if (newDepth <= theNextTechDepth) {
                // Closing .theNextTech
                inTheNextTech = false;
                depth = newDepth;
                // skip the closing brace line
                continue;
            }
            depth = newDepth;
            // emit line as-is (nested CSS is handled by postcss-nesting)
            result.push(line);
        } else {
            depth += openCount - closeCount;
            result.push(line);
        }
    }
    
    return result.join('\n');
}

// Don't modify - postcss-nesting handles it
// Just verify the file structure and add .theNextTech body class to body
console.log('CSS structure analysis:');
const lines = css.split('\n');
let depth = 0;
let theNextTechLine = -1;
for (let i = 0; i < Math.min(lines.length, 200); i++) {
    const opens = (lines[i].match(/\{/g) || []).length;
    const closes = (lines[i].match(/\}/g) || []).length;
    if (lines[i].trim().startsWith('.theNextTech')) {
        theNextTechLine = i;
        console.log(`  Found .theNextTech at line ${i+1}: "${lines[i].trim()}"`);
    }
    depth += opens - closes;
}
console.log('Done. No modifications made to CSS - postcss-nesting will handle it.');
