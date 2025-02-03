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
          O(n log n), or linearithmic time, describes an algorithm whose time
          complexity grows at a rate that combines both linear and logarithmic
          growth. This means that for each item in the input, the algorithm does
          work that grows logarithmically with respect to the size of the input.
          The total time taken by the algorithm is a product of linear time
          (O(n)) and logarithmic time (O(log n)), resulting in a complexity of
          O(n log n). These types of algorithms are typically more efficient
          than quadratic algorithms (O(n²)), especially as the size of the input
          increases.
        </p>
      </div>
      <h2>Key Characteristics of O(n log n)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Combination of Linear and Logarithmic Growth:</span>
            <p>
              The time complexity of O(n log n) grows faster than linear time
              (O(n)), but much slower than quadratic time (O(n²)). It occurs
              when you perform a logarithmic operation (such as dividing the
              problem in half) for each element in a collection. The algorithm
              does some work for each element, but that work involves a
              logarithmic amount of steps.
            </p>
          </li>
          <li>
            <span>Efficient for Large Inputs:</span>
            <p>
              Algorithms with O(n log n) time complexity are more efficient than
              quadratic algorithms (O(n²)) for large datasets. The combination
              of linear and logarithmic growth means that they scale well as
              input size increases, offering a significant performance
              improvement over less efficient algorithms.
            </p>
          </li>
          <li>
            <span>Divide and Conquer Approach:</span>
            <p>
              Many O(n log n) algorithms are based on the divide and conquer
              strategy, which breaks the problem into smaller sub-problems,
              solves them independently, and then combines the results. The
              logarithmic factor often arises from the way the problem is
              recursively divided.
            </p>
          </li>
        </ul>
      </div>
      <h2>Code Example</h2>
      <div className="infoText">
        <div className="codeHighlight">
          <p>CODE EXAMPLE CODE EXAMPLE CODE EXAMPLE</p>
          <h3>Choose a Language</h3>

          {/* Desktop: Buttons */}
          <div className="langBtn">
            <button onClick={() => setLanguage("javascript")}>
              JavaScript
            </button>
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
        </div>
      </div>

      <h2>Use Cases of O(n log n)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Sorting Algorithms:</span>
            <ul>
              <li>
                <span>Merge Sort:</span>
                <p>
                  A divide-and-conquer algorithm that splits the array into
                  smaller sub-arrays, sorts them, and then merges them back
                  together in O(n log n) time.
                </p>
              </li>
              <li>
                <span>Quick Sort:</span>
                <p>
                  Another divide-and-conquer algorithm that chooses a pivot,
                  partitions the array around the pivot, and then recursively
                  sorts the partitions. On average, it has O(n log n) time
                  complexity, although its worst-case complexity can be O(n²).
                </p>
              </li>
              <li>
                <span>Heap Sort:</span>
                <p>
                  A sorting algorithm that uses a binary heap to sort elements.
                  It maintains a heap structure, and each element is extracted
                  in O(log n) time, leading to O(n log n) total complexity.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <span>Efficient Searching and Merging:</span>
            <p>
              Many algorithms that combine sorting with searching or merging
              tasks also run in O(n log n) time. For example, binary search
              trees that require O(log n) time for each operation can use these
              methods to efficiently find or merge elements in O(n log n) time.
            </p>
          </li>
          <li>
            <span>Divide and Conquer Algorithms:</span>
            <p>
              Algorithms like merge sort, quick sort, and closest pair of points
              often follow the divide and conquer approach. These algorithms
              divide the problem into sub-problems and then combine the results
              efficiently in O(n log n) time.
            </p>
          </li>
          <li>
            <span>Graph Algorithms:</span>
            <p>
              Some graph traversal algorithms and minimum spanning tree
              algorithms, like Kruskal's algorithm or Prim's algorithm (using
              heaps), also exhibit O(n log n) time complexity. These algorithms
              often need to manage or process large sets of edges and nodes
              efficiently.
            </p>
          </li>
          <li>
            <span>Data Structures and Operations:</span>
            <p>
              Operations on certain data structures, such as balanced binary
              search trees (e.g., AVL trees, Red-Black trees) and heaps, often
              run in O(n log n) time. These data structures maintain balance or
              order through logarithmic operations and can perform operations
              like insertion and deletion in logarithmic time for each element.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Linearithmic;
