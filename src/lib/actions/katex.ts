import katex from 'katex';
import 'katex/dist/katex.min.css';

// Enhanced LaTeX render action
// File: $lib/actions/katex.js

export function latexRender(node, params = {}) {
    let observer;
    
    function renderLatex() {
        if (typeof window === 'undefined' || !window.katex) return;
        
        try {
            // Find all text nodes that might contain LaTeX
            const textNodes = getTextNodes(node);
            
            textNodes.forEach(textNode => {
                const text = textNode.textContent;
                if (text.includes('$') || text.includes('\\')) {
                    // Create a temporary element to render LaTeX
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = text;
                    
                    // Render inline math ($...$)
                    tempDiv.innerHTML = tempDiv.innerHTML.replace(/\$([^$]+)\$/g, (match, latex) => {
                        try {
                            return katex.renderToString(latex, { throwOnError: false });
                        } catch (e) {
                            return match;
                        }
                    });
                    
                    // Render display math ($$...$$)
                    tempDiv.innerHTML = tempDiv.innerHTML.replace(/\$\$([^$]+)\$\$/g, (match, latex) => {
                        try {
                            return katex.renderToString(latex, { throwOnError: false, displayMode: true });
                        } catch (e) {
                            return match;
                        }
                    });
                    
                    // Replace the original text node with rendered content
                    const newNode = document.createElement('span');
                    newNode.innerHTML = tempDiv.innerHTML;
                    textNode.parentNode.replaceChild(newNode, textNode);
                }
            });
        } catch (error) {
            console.warn('LaTeX rendering failed:', error);
        }
    }
    
    function getTextNodes(node) {
        const textNodes = [];
        const walker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let currentNode;
        while (currentNode = walker.nextNode()) {
            textNodes.push(currentNode);
        }
        
        return textNodes;
    }
    
    // Initial render
    renderLatex();
    
    // Set up mutation observer to watch for content changes
    if (typeof MutationObserver !== 'undefined') {
        observer = new MutationObserver((mutations) => {
            let shouldRender = false;
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    shouldRender = true;
                }
            });
            
            if (shouldRender) {
                // Debounce rendering to avoid excessive calls
                setTimeout(renderLatex, 10);
            }
        });
        
        observer.observe(node, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }
    
    return {
        update(newParams) {
            params = { ...params, ...newParams };
            renderLatex();
        },
        destroy() {
            if (observer) {
                observer.disconnect();
            }
        }
    };
}