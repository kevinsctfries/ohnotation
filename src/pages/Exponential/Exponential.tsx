import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./Exponential.css";

import exponentialExamples from "./exponential-examples.json";

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

type ExponentialExamples = {
  c: string;
  cpp: string;
  java: string;
  python: string;
  javascript: string;
};

const Exponential = () => {
  const [language, setLanguage] =
    useState<keyof ExponentialExamples>("javascript");
  const [codeContent, setCodeContent] = useState<string>("");
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setCodeContent(exponentialExamples[language] || "");
  }, [language]);

  useEffect(() => {
    if (codeRef.current && codeContent) {
      codeRef.current.removeAttribute("data-highlighted");

      hljs.highlightBlock(codeRef.current);
    }
  }, [codeContent]); // Re-run highlighting when `codeContent` changes

  return (
    <div>
      <h2>Understanding O(2^n)</h2>
      <div className="infoText">
        <p>
          O(2^n), or exponential time complexity, refers to algorithms whose
          execution time doubles with each additional element in the input. This
          type of complexity is typically seen in problems that require
          evaluating all possible combinations or solutions, where the number of
          possibilities grows exponentially with the size of the input. As a
          result, algorithms with O(2^n) complexity become very inefficient for
          large datasets, as their running time grows extremely fast.
        </p>
      </div>
      <h2>Key Characteristics of O(2^n)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Extremely Inefficient for Large Inputs:</span>
            <p>
              O(2^n) algorithms grow at a rapid, exponential rate, meaning that
              even small increases in the size of the input can lead to an
              explosion in execution time. These algorithms are generally
              impractical for large datasets, as they can become prohibitively
              slow.
            </p>
          </li>
          <li>
            <span>Brute-Force Solutions:</span>
            <p>
              Many algorithms with O(2^n) time complexity rely on brute-force
              methods, evaluating all possible solutions or configurations. This
              can include problems like the traveling salesman problem, where
              all possible routes must be checked to find the optimal solution.
            </p>
          </li>
          <li>
            <span>No Efficient Solution for Large Inputs:</span>
            <p>
              Unlike O(n), O(n log n), or O(n²) algorithms, O(2^n) algorithms
              typically do not have a known efficient solution for large inputs.
              As n increases, the time to compute solutions grows so rapidly
              that even powerful machines may struggle to finish the computation
              in a reasonable amount of time.
            </p>
          </li>
        </ul>
      </div>
      <h2>Code Example</h2>
      <div className="infoText">
        <p>code example</p>
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
      <h2>Additional Examples of O(2^n) Algorithms</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Brute-Force Search in Combinatorial Problems:</span>
            <p>
              In problems like the <span>knapsack problem</span> or
              <span> subset sum problem</span>, where every combination of
              elements is evaluated.
            </p>
          </li>
          <li>
            <span>Recursive Solutions to Certain Problems:</span>
            <p>
              Some recursive algorithms, especially those that solve problems
              like generating all subsets or permutations of a set (e.g.,
              generating power sets of a set), exhibit O(2^n) complexity.
            </p>
          </li>
          <li>
            <span>Certain Backtracking Algorithms:</span>
            <p>
              For problems such as solving the <span>N-Queens problem</span> or
              <span> Sudoku</span> using backtracking, where each possible
              configuration is explored.
            </p>
          </li>
          <li>
            <span>Recursive Fibonacci Calculation (without memoization):</span>
            <p>
              A naive recursive solution to calculate Fibonacci numbers results
              in repeated recalculations, leading to O(2^n) complexity.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Exponential;
