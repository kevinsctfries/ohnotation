import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./Linearithmic.css";

import linearithmicExamples from "./linearithmic-examples.json";

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

type LinearithmicExamples = {
  c: string;
  cpp: string;
  java: string;
  python: string;
  javascript: string;
};

const Linearithmic = () => {
  const [language, setLanguage] =
    useState<keyof LinearithmicExamples>("javascript");
  const [codeContent, setCodeContent] = useState<string>("");
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setCodeContent(linearithmicExamples[language] || "");
  }, [language]);

  useEffect(() => {
    if (codeRef.current && codeContent) {
      codeRef.current.removeAttribute("data-highlighted");

      hljs.highlightElement(codeRef.current);
    }
  }, [codeContent]); // Re-run highlighting when `codeContent` changes

  return (
    <div>
      <h2>Understanding O(n log n)</h2>
      <div className="infoText">
        <p>
          O(n log n) time complexity, often referred to as linearithmic time,
          represents algorithms whose execution time grows at a rate
          proportional to n (the size of the input) multiplied by the logarithm
          of n. This complexity is common in algorithms that break down problems
          into smaller subproblems (using a divide-and-conquer approach) and
          then combine the results. Although it is more complex than linear time
          (O(n)), O(n log n) is still much more efficient than quadratic time
          (O(n^2)) and is considered highly scalable for large datasets.
        </p>
      </div>
      <h2>Key Characteristics of O(n log n)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Moderately Efficient: </span>
            <p>
              O(n log n) algorithms scale well with large datasets, offering
              better performance than quadratic algorithms (O(n²)) but slower
              than linear algorithms (O(n)).
            </p>
          </li>
          <li>
            <span>Divide-and-Conquer: </span>
            <p>
              Many O(n log n) algorithms employ a divide-and-conquer strategy,
              where the input data is repeatedly divided into smaller subsets
              (log n), and the results of those subsets are combined (n). This
              combination of linear and logarithmic operations leads to an
              efficient solution.
            </p>
          </li>
        </ul>
      </div>
      <h2>Code Example</h2>
      <div className="infoText">
        <p>code example</p>
      </div>
      <h3>Choose a Language</h3>

      {/* Desktop: Buttons */}
      <div className="langBtn">
        <button onClick={() => setLanguage("javascript")}>JavaScript</button>
        <button onClick={() => setLanguage("c")}>C</button>
        <button onClick={() => setLanguage("cpp")}>C++</button>
        <button onClick={() => setLanguage("java")}>Java</button>
        <button onClick={() => setLanguage("python")}>Python</button>
      </div>

      {/* Mobile: Dropdown */}
      <div className="langDropdown">
        <select
          onChange={e =>
            setLanguage(e.target.value as keyof LinearithmicExamples)
          }
          value={language}
          aria-label="Choose a programming language">
          <option value="javascript">JavaScript</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </div>

      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {codeContent}
        </code>
      </pre>
      <h2>Additional Examples of O(n log n) Algorithms</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Merge Sort:</span>
            <p>
              A sorting algorithm that divides the input in half, recursively
              sorts each half, and then merges them.
            </p>
          </li>
          <li>
            <span>Quick Sort:</span>
            <p>
              Another sorting algorithm that partitions the input data and
              recursively sorts each partition.
            </p>
          </li>
          <li>
            <span>Heap Sort: </span>
            <p>Sorts data using a binary heap structure.</p>
          </li>
          <li>
            <span>Balanced Binary Search Trees (BST):</span>
            <p>
              Operations such as insert, delete, and search in balanced trees
              (e.g., AVL trees, Red-Black trees) typically operate in O(log n)
              time for each operation, and for n elements, the total time is O(n
              log n).
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Linearithmic;
