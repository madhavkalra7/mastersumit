const fs = require('fs');

const filePath = 'src/components/sections/SummitAgenda.tsx';
let code = fs.readFileSync(filePath, 'utf8');

// Add useEffect import
code = code.replace(
  `"use client";\nimport React from 'react';`,
  `'use client';\nimport React, { useEffect } from 'react';`
);

// Replace function opening to inject the agenda tab logic
code = code.replace(
  `export default function SummitAgenda() {\n    return (`,
  `export default function SummitAgenda() {\n    useEffect(() => {\n        const tabs = Array.from(document.querySelectorAll('.summitAgendaTab')) as HTMLElement[];\n        const panels = Array.from(document.querySelectorAll('.summitAgendaPanel')) as HTMLElement[];\n        const tabsContainer = document.querySelector('.summitAgendaTabs') as HTMLElement | null;\n\n        function centerTab(tab: HTMLElement) {\n            if (!tabsContainer || window.innerWidth > 767) return;\n            const containerRect = tabsContainer.getBoundingClientRect();\n            const tabRect = tab.getBoundingClientRect();\n            const scrollLeft = tabsContainer.scrollLeft\n                + (tabRect.left - containerRect.left)\n                - (containerRect.width / 2)\n                + (tabRect.width / 2);\n            tabsContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });\n        }\n\n        function activate(tabId: string | null, clickedTab?: HTMLElement) {\n            tabs.forEach(t => {\n                const isActive = t.getAttribute('data-agenda-tab') === tabId;\n                t.classList.toggle('active', isActive);\n                t.setAttribute('aria-selected', isActive ? 'true' : 'false');\n            });\n            panels.forEach(p => {\n                const isActive = p.getAttribute('data-agenda-panel') === tabId;\n                p.classList.toggle('active', isActive);\n                if (isActive) p.removeAttribute('hidden');\n                else p.setAttribute('hidden', '');\n            });\n            if (clickedTab) centerTab(clickedTab);\n        }\n\n        const handlers: [HTMLElement, EventListener][] = [];\n        tabs.forEach(t => {\n            const handler = () => activate(t.getAttribute('data-agenda-tab'), t);\n            t.addEventListener('click', handler);\n            handlers.push([t, handler]);\n        });\n\n        const activeTab = tabsContainer?.querySelector('.summitAgendaTab.active') as HTMLElement | null;\n        if (activeTab) setTimeout(() => centerTab(activeTab), 100);\n\n        return () => {\n            handlers.forEach(([el, h]) => el.removeEventListener('click', h));\n        };\n    }, []);\n\n    return (`
);

// Remove the inline <script> block
code = code.replace(
  /<script dangerouslySetInnerHTML=\{\{ __html: `[\s\S]*?` \}\} \/>/,
  ''
);

fs.writeFileSync(filePath, code);
console.log('SummitAgenda cleaned');
