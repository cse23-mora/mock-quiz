import katex from "katex";

export function processLatexInText(text) {
    let result = text;

    // First process display math ($$...$$) to avoid conflicts with inline math
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
        try {
            const trimmedLatex = latex.trim();
            if (!trimmedLatex) return match;

            return katex.renderToString(trimmedLatex, {
                throwOnError: false,
                displayMode: true,
            });
        } catch (e) {
            console.warn("Display math rendering failed:", e);
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
            });
        } catch (e) {
            console.warn("Inline math rendering failed:", e);
            return match;
        }
    });
    return result;
}