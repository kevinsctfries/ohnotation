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

      hljs.highlightElement(codeRef.current);
    }
  }, [codeContent]); // Re-run highlighting when `codeContent` changes

  return (
    <div>
      <h2>Understanding O(n)</h2>
      <div className="infoText">
        <p>
          O(n), or linear time, refers to an operation where the time it takes
          to complete is directly proportional to the size of the input. This
          means that as the size of the input increases, the time it takes to
          complete the operation increases at the same rate. If you double the
          size of the input, the time it takes to process it will also double.
          O(n) operations are common in algorithms that need to process each
          item in a dataset individually.
        </p>
      </div>
      <h2>Key Characteristics of O(n)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Proportional Time:</span>
            <p>
              In O(n) operations, the time taken to complete the task grows
              linearly with the size of the input. If you have a list of 10
              items, the operation will take 10 steps; if you have 100 items, it
              will take 100 steps.
            </p>
          </li>
          <li>
            <span>Scalable with Input Size:</span>
            <p>
              As the size of the input grows, the time required to perform the
              operation increases at the same rate. This means that larger
              datasets will take more time, but the relationship between the
              input size and the time taken is predictable.
            </p>
          </li>
          <li>
            <span>Iterative Process:</span>
            <p>
              O(n) operations usually involve iterating through each element of
              a dataset exactly once. For example, looping through an array to
              find the sum of its elements is an O(n) operation because the
              algorithm needs to visit each element.
            </p>
          </li>
          <li>
            <span>Moderate Efficiency:</span>
            <p>
              While O(n) operations are generally less efficient than O(1)
              operations, they are still reasonable for moderate-sized datasets.
              The time increases in a predictable manner, and for many problems,
              linear time is considered efficient enough.
            </p>
          </li>
        </ul>
      </div>
      <h2>Code Example</h2>
      <div className="infoText">
        <div className="codeHighlight">
          <p>
            This code demonstrates how to find the maximum value in an array by
            iterating through each element. Each function assumes the first
            element is the maximum and updates it whenever a larger value is
            found. Finding the maximum value in an array using this approach is
            an O(n) operation.
          </p>
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
                setLanguage(e.target.value as keyof LinearExamples)
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

      <h2>Use Cases of O(n)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Finding the Maximum or Minimum Value in an Array:</span>
            <p>
              To find the maximum (or minimum) value in an unsorted array, the
              algorithm must check each element once. This makes the operation
              O(n), where n is the number of elements in the array.
            </p>
          </li>
          <li>
            <span>Searching for an Element in an Unsorted List:</span>
            <p>
              If you need to search for a specific element in an unsorted list,
              you would have to look through every item one by one, which makes
              this an O(n) operation.
            </p>
          </li>
          <li>
            <span>Summing the Elements of a List:</span>
            <p>
              To find the sum of all the numbers in an array, the algorithm must
              visit each number and add it to the total. This requires iterating
              through the entire list, making it an O(n) operation.
            </p>
          </li>
          <li>
            <span>Copying or Cloning a Dataset:</span>
            <p>
              If you're copying all the elements of an array to a new array, you
              must visit each element and copy it over, which takes O(n) time.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Linear;
