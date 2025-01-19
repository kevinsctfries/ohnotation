import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./Constant.css";

import constantExamples from "./constant-examples.json";

import hljsC from "highlight.js/lib/languages/c";
import hljsCpp from "highlight.js/lib/languages/cpp";
import hljsJava from "highlight.js/lib/languages/java";
import hljsPython from "highlight.js/lib/languages/python";
import hljsJavaScript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("c", hljsC);
hljs.registerLanguage("cpp", hljsCpp);
hljs.registerLanguage("java", hljsJava);
hljs.registerLanguage("python", hljsPython);
hljs.registerLanguage("javascript", hljsJavaScript);

type ConstantExamples = {
  c: string;
  cpp: string;
  java: string;
  python: string;
  javascript: string;
};

const CodeExampleViewer = () => {
  const [language, setLanguage] =
    useState<keyof ConstantExamples>("javascript");
  const [codeContent, setCodeContent] = useState<string>("");
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setCodeContent(constantExamples[language] || "");
  }, [language]);

  useEffect(() => {
    if (codeRef.current && codeContent) {
      codeRef.current.removeAttribute("data-highlighted");

      hljs.highlightBlock(codeRef.current);
    }
  }, [codeContent]); // Re-run highlighting when `codeContent` changes

  return (
    <div>
      <h2>Understanding O(1)</h2>
      <div className="infoText">
        <p>
          O(1) refers to constant time complexity. When we say that an operation
          has O(1) time complexity, we mean that the operation takes the same
          amount of time to complete, regardless of the size of the input. In
          other words, no matter how large the dataset is, the time it takes to
          execute the operation will remain constant. This is one of the most
          efficient time complexities, as it guarantees that the operation will
          execute in the same time regardless of the size of the input.
        </p>
      </div>
      <h2>Key Characteristics of O(1)</h2>
      <div className="infoText">
        <ul>
          <li>
            Fixed Time: The running time of the algorithm does not depend on the
            size of the input. For example, accessing an element from an array
            or hash table is typically O(1).
          </li>
          <li>
            No Loops or Recursion: Algorithms that have O(1) complexity
            generally do not have loops or recursion that would iterate over the
            input data.
          </li>
          <li>
            Fast Execution: These algorithms are very fast because they do not
            need to process each element of the input individually.
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

      <h2>Why is O(1) So Efficient?</h2>
      <div className="infoText">
        <ul>
          <li>
            Predictable: Since the operation takes the same amount of time
            regardless of the input size, it's highly predictable and efficient,
            especially when dealing with large datasets.
          </li>
          <li>
            Scalable: When an algorithm has O(1) time complexity, it scales
            well, even with a massive amount of data. The performance remains
            constant and does not degrade as the size of the input increases.
          </li>
          <li>
            Fast Execution: Operations with O(1) time complexity can often be
            completed very quickly because they don't need to iterate through
            data or perform recursive calls.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CodeExampleViewer;
