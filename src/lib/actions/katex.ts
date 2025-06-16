import katex from 'katex';
import 'katex/dist/katex.min.css';

// Enhanced LaTeX render action
// File: $lib/actions/katex.js
export function latexRender(node, params = {}) {
    let observer;
    const processedNodes = new WeakSet(); // Track processed nodes to avoid re-processing

    function renderLatex() {
        // Check if katex is available
        if (typeof katex === 'undefined') {
            console.warn('KaTeX is not available');
            return;
        }

        try {
            // Find all text nodes that might contain LaTeX
            const textNodes = getTextNodes(node);
            
            textNodes.forEach(textNode => {
                // Skip if already processed
                if (processedNodes.has(textNode)) return;
                
                const text = textNode.textContent;
                if (!text || (!text.includes('$') && !text.includes('\\'))) return;

                // Parse and render LaTeX expressions
                const renderedHTML = processLatexInText(text);
                
                if (renderedHTML !== text) {
                    // Create a wrapper span and replace the text node
                    const wrapper = document.createElement('span');
                    wrapper.innerHTML = renderedHTML;
                    
                    // Mark all new nodes as processed
                    markNodesAsProcessed(wrapper);
                    
                    textNode.parentNode.replaceChild(wrapper, textNode);
                }
            });
        } catch (error) {
            console.warn('LaTeX rendering failed:', error);
        }
    }

    function processLatexInText(text) {
        let result = text;
        
        // First process display math ($$...$$) to avoid conflicts with inline math
        result = result.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
            try {
                const trimmedLatex = latex.trim();
                if (!trimmedLatex) return match;
                
                return katex.renderToString(trimmedLatex, { 
                    throwOnError: false, 
                    displayMode: true,
                    ...params
                });
            } catch (e) {
                console.warn('Display math rendering failed:', e);
                return match;
            }
        });
        
        // Then process inline math ($...$)
        result = result.replace(/\$([^$\n]+?)\$/g, (match, latex) => {
            try {
                const trimmedLatex = latex.trim();
                if (!trimmedLatex) return match;
                
                return katex.renderToString(trimmedLatex, { 
                    throwOnError: false, 
                    displayMode: false,
                    ...params
                });
            } catch (e) {
                console.warn('Inline math rendering failed:', e);
                return match;
            }
        });
        
        return result;
    }

    function getTextNodes(node) {
        const textNodes = [];
        const walker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    // Skip nodes that are already inside KaTeX rendered elements
                    if (node.parentElement && 
                        (node.parentElement.classList.contains('katex') || 
                         node.parentElement.closest('.katex'))) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    // Only accept text nodes with actual content
                    return node.textContent.trim() ? 
                        NodeFilter.FILTER_ACCEPT : 
                        NodeFilter.FILTER_REJECT;
                }
            },
            false
        );
        
        let currentNode;
        while (currentNode = walker.nextNode()) {
            textNodes.push(currentNode);
        }
        return textNodes;
    }

    function markNodesAsProcessed(node) {
        const walker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let currentNode;
        while (currentNode = walker.nextNode()) {
            processedNodes.add(currentNode);
        }
    }

    // Debounced render function
    let renderTimeout;
    function debouncedRender() {
        if (renderTimeout) {
            clearTimeout(renderTimeout);
        }
        renderTimeout = setTimeout(renderLatex, 50);
    }

    // Initial render
    renderLatex();

    // Set up mutation observer to watch for content changes
    if (typeof MutationObserver !== 'undefined') {
        observer = new MutationObserver((mutations) => {
            let shouldRender = false;
            
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    // Check if new text nodes were added
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE || 
                            (node.nodeType === Node.ELEMENT_NODE && node.textContent)) {
                            shouldRender = true;
                        }
                    });
                } else if (mutation.type === 'characterData') {
                    // Text content changed
                    shouldRender = true;
                }
            });
            
            if (shouldRender) {
                debouncedRender();
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
            if (renderTimeout) {
                clearTimeout(renderTimeout);
            }
        }
    };
}