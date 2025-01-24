import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./Logarithmic.css";

import logarithmicExamples from "./logarithmic-examples.json";

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

type LogarithmicExamples = {
  c: string;
  cpp: string;
  java: string;
  python: string;
  javascript: string;
};

const Logarithmic = () => {
  const [language, setLanguage] =
    useState<keyof LogarithmicExamples>("javascript");
  const [codeContent, setCodeContent] = useState<string>("");
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setCodeContent(logarithmicExamples[language] || "");
  }, [language]);

  useEffect(() => {
    if (codeRef.current && codeContent) {
      codeRef.current.removeAttribute("data-highlighted");

      hljs.highlightBlock(codeRef.current);
    }
  }, [codeContent]); // Re-run highlighting when `codeContent` changes

  return (
    <div>
      <h2>What is O(log n)?</h2>
      <div className="infoText">
        <p>
          In Big-O Notation, O(log n) (pronounced "O of log n") describes the
          time complexity of an algorithm that reduces the problem size by a
          fixed fraction in each step. This means the execution time grows
          logarithmically with the size of the input (n).
        </p>
      </div>
      <h2>Key Characteristics of O(log n)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Logarithmic Time Complexity:</span>
            <p>
              The running time of an O(log n) algorithm grows logarithmically
              with respect to the input size. This means that as the input size
              increases, the time taken to process the input increases at a much
              slower rate compared to <span>O(n)</span> or <span>O(n^2) </span>
              algorithms. For example, if the input size doubles, the time
              increases by only a constant factor, which makes these algorithmsm
              very efficient for large datasets.
            </p>
          </li>
          <li>
            <span>Divide and Conquer Approach:</span>
            <p>
              <span>O(log n) </span>
              algorithms often use a "divide and conquer" approach, where the
              problem is divided into smaller subproblems, and the input size is
              halved (or reduced by a constant factor) with each iteration or
              recursion. This allows the algorithm to quickly narrow down the
              search space.
            </p>
          </li>
          <li>
            <span>Efficient for Large Data Sets:</span>
            <p>
              <span>O(log n) </span> is extremely efficient when dealing with
              large data sets, especially when compared to <span>O(n)</span> and
              <span> O(n^2)</span> algorithms. This is why many search
              algorithms, like <span>binary search</span>, operate in O(log n)
              time complexity.
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

export default Logarithmic;
