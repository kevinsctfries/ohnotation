import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./Linear.css";

import linearExamples from "./linear-examples.json";

import hljsC from "highlight.js/lib/languages/c";
import hljsCpp from "highlight.js/lib/languages/cpp";
import hljsJava from "highlight.js/lib/languages/java";
import hljsPython from "highlight.js/lib/languages/python";
import hljsJavaScript from "highlight.js/lib/languages/javascript";
import { Link } from "react-router-dom";

hljs.registerLanguage("c", hljsC);
hljs.registerLanguage("cpp", hljsCpp);
hljs.registerLanguage("java", hljsJava);
hljs.registerLanguage("python", hljsPython);
hljs.registerLanguage("javascript", hljsJavaScript);

type LinearExamples = {
  c: string;
  cpp: string;
  java: string;
  python: string;
  javascript: string;
};

const Linear = () => {
  const [language, setLanguage] = useState<keyof LinearExamples>("javascript");
  const [codeContent, setCodeContent] = useState<string>("");
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setCodeContent(linearExamples[language] || "");
  }, [language]);

  useEffect(() => {
    if (codeRef.current && codeContent) {
      codeRef.current.removeAttribute("data-highlighted");

      hljs.highlightBlock(codeRef.current);
    }
  }, [codeContent]); // Re-run highlighting when `codeContent` changes

  return (
    <div>
      <div className="navBtns">
        <Link to="/constant" className="navButton">
          Previous Page
        </Link>
        <Link to="/quadratic" className="navButton">
          Next Page
        </Link>
      </div>
      <h2>Understanding O(n)</h2>
      <div className="infoText">
        <p>
          O(n) describes the time complexity of an algorithm that grows linearly
          with the size of the input. This means that if the size of the input
          doubles, the execution time will also roughly double.
        </p>
        <br />
        <p>
          O(n) represents the running time of an algorithm that grows in
          proportion to the size of the input (n). In simple terms, O(n) means
          that the time it takes to run the algorithm increase slinearly as the
          size of the input increases.
        </p>
      </div>
      <h2>Key Characteristics of O(n)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Linear Time:</span>
            <p>
              The running time of the algorithm grows proportionally with the
              size of the input.
            </p>
          </li>
          <li>
            <span>Loops Through Input:</span>
            <p>
              Algorithms with O(n) complexity often involve a loop or recursion
              that processes each element of the input exactly once. Each step
              contributes to the total execution time.
            </p>
          </li>
          <li>
            <span>Scalable:</span>
            <p>
              These algorithms are reasonably efficient for moderate input
              sizes, but their performance can degrade as input size grows
              significantly.
            </p>
          </li>
        </ul>
      </div>
      <h3>Choose a Language</h3>
      <div className="langBtn">
        <button onClick={() => setLanguage("javascript")}>JavaScript</button>
        <button onClick={() => setLanguage("c")}>C</button>
        <button onClick={() => setLanguage("cpp")}>C++</button>
        <button onClick={() => setLanguage("java")}>Java</button>
        <button onClick={() => setLanguage("python")}>Python</button>
      </div>
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {codeContent}
        </code>
      </pre>
    </div>
  );
};

export default Linear;
