import katex from 'katex';
import 'katex/dist/katex.min.css';

// Cache the auto-render function once loaded
let renderMathInElement: any = null;
let autoRenderLoaded = false;

async function loadAutoRender() {
  if (autoRenderLoaded) return renderMathInElement;
  
  try {
    const autoRenderModule = await import('katex/dist/contrib/auto-render.js');
    renderMathInElement = autoRenderModule.default || autoRenderModule;
    autoRenderLoaded = true;
    return renderMathInElement;
  } catch (e) {
    console.warn("KaTeX auto-render extension not found:", e);
    autoRenderLoaded = true; // Prevent repeated attempts
    return null;
  }
}

export function latexRender(node: HTMLElement) {
  let isDestroyed = false;

  const renderMath = async () => {
    if (isDestroyed) return;
    
    const autoRender = await loadAutoRender();
    
    if (autoRender && !isDestroyed) {
      try {
        autoRender(node, {
          delimiters: [
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false },
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false,
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
          ignoredClasses: ["no-katex"]
        });
      } catch (e) {
        console.error('KaTeX rendering error:', e);
      }
    } else if (!isDestroyed) {
      // Fallback: try to render simple math expressions
      const textContent = node.textContent?.trim();
      if (textContent) {
        try {
          // Check if it looks like a math expression
          if (textContent.includes('\\') || textContent.match(/\$.*\$/)) {
            const cleanText = textContent.replace(/^\$+|\$+$/g, '');
            katex.render(cleanText, node, { 
              throwOnError: false, 
              displayMode: textContent.includes('$$') || textContent.includes('\\[')
            });
          }
        } catch (e) {
          console.error('Fallback KaTeX rendering error:', e);
          node.innerHTML = `<span style="color: red;">Math rendering failed</span>`;
        }
      }
    }
  };

  // Initial render
  renderMath();

  return {
    update() {
      if (!isDestroyed) {
        renderMath();
      }
    },
    destroy() {
      isDestroyed = true;
    }
  };
}