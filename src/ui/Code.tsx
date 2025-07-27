import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useEffect } from "react";

type Props = {
  codeString: string;
  language: "javascript" | "typescript" | "html" | "css";
};

export const Code = ({ codeString, language }: Props) => {
  useEffect(() => {
    hljs.highlightAll(); // Highlights all code blocks on the page
    // Or for specific elements:
    // hljs.highlightElement(document.getElementById('my-code-block'));
  }, [codeString]); // Re-highlight if codeString changes

  return (
    <pre>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: codeString }}
      />
    </pre>
  );
};
