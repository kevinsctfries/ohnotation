import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./Quadratic.css";

import quadraticExamples from "./quadratic-examples.json";

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

type QuadraticExamples = {
  c: string;
  cpp: string;
  java: string;
  python: string;
  javascript: string;
};

const Quadratic = () => {
  const [language, setLanguage] =
    useState<keyof QuadraticExamples>("javascript");
  const [codeContent, setCodeContent] = useState<string>("");
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setCodeContent(quadraticExamples[language] || "");
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
        <Link to="/linear" className="navButton">
          Previous Page
        </Link>
        <Link to="/logarithmic" className="navButton">
          Next Page
        </Link>
      </div>
      <h2>What is O(n^2)?</h2>
      <div className="infoText">
        <p>
          In Big-O Notation, O(n²) (pronounced "O of n squared") describes the
          time complexity of an algorithm whose performance grows quadratically
          with the size of the input (n).
        </p>
      </div>
      <h2>Key Characteristics of O(n^2)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Quadratic Time Complexity:</span>
            <p>
              The running time of an O(n^2) algorithm grows proportional to the
              square of the size of the input. For example, if the input size
              doubles, the execution time increases roughly by a factor of four.
              This is due to the fact that two nested iterations are often
              involved, where each iteration loops over the entire input.
            </p>
          </li>
          <li>
            <span>Nested Loops:</span>
            <p>
              Algorithms with O(n^2) complexity typically contain two nested
              loops. The outer loop runs <span>n</span> times, and for each
              iteration of the outer loops, the inner loop runs <span>n </span>
              times. This results in a total of approximately
              <span> n * n </span>
              iterations, leading to quadratic growth in execution time.
            </p>
          </li>
          <li>
            <span>Input-Dependent Growth:</span>
            <p>
              The time required to complete the task grows significantly as the
              input size increases. While small input sizes may still be
              manageable, large inputs can cause performance bottlenecks.
            </p>
          </li>
          <li>
            <span>Less Efficient for Larger Data:</span>
            <p>
              Algorithms with O(n^2) complexity tend to perform poorly on large
              datasets. For example, in sorting algorithms like
              <span> bubble sort</span>, the quadratic nature of the algorithm
              makes them inefficient compared to algorithms like
              <span> quick sort</span> or <span>merge sort</span>, which have
              O(n log n) complexity.
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

export default Quadratic;
