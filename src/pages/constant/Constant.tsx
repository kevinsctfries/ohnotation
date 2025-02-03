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

const Constant = () => {
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

      hljs.highlightElement(codeRef.current);
    }
  }, [codeContent]); // Re-run highlighting when `codeContent` changes

  return (
    <div>
      <h2>Understanding O(1)</h2>
      <div className="infoText">
        <p>
          O(1), or constant time, refers to an operation in which the time it
          takes to complete does not depend on the size of the input. In other
          words, whether you're working with a small dataset or a very large
          one, the operation will always take the same amount of time. This
          makes O(1) operations highly efficient because they don't require any
          additional time as the size of the data grows.
        </p>
      </div>
      <h2>Key Characteristics of O(1)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Fixed Time:</span>
            <p>
              O(1) operations always take a constant amount of time. The time
              taken to complete the operation is independent of the input size.
              For example, accessing an element in an array by index is always a
              fixed time operation.
            </p>
          </li>
          <li>
            <span>No Scaling with Input Size:</span>
            <p>
              As the input size increases, the time it takes to complete the
              operation remains unchanged. This means that regardless of whether
              you're dealing with a small or large dataset, the performance
              stays the same.
            </p>
          </li>
          <li>
            <span>Efficiency:</span>
            <p>
              Since the time complexity does not increase with the size of the
              input, O(1) operations are generally very fast and scalable. This
              makes them ideal in scenarios where consistent performance is
              needed.
            </p>
          </li>
          <li>
            <span>Simple Operations:</span>
            <p>
              O(1) operations usually involve simple tasks, such as directly
              accessing data, performing a calculation, or checking a condition.
              These operations don’t require iterating through large datasets.
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
                setLanguage(e.target.value as keyof ConstantExamples)
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

      <h2>Use Cases of O(1)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Array Indexing:</span>
            <p>
              Accessing an element in an array by its index is an O(1)
              operation. The time it takes to retrieve an element doesn’t depend
              on the size of the array.
            </p>
          </li>
          <li>
            <span>Hash Tables:</span>
            <p>
              In hash tables, retrieving a value by its key is an O(1)
              operation. The time it takes to look up a value remains constant,
              even as the table grows in size.
            </p>
          </li>
          <li>
            <span>Simple Arithmetic Operations:</span>
            <p>
              Basic arithmetic operations like addition, subtraction,
              multiplication, or division are generally O(1), as they take the
              same amount of time regardless of the values involved.
            </p>
          </li>
          <li>
            <span>Boolean Checks:</span>
            <p>
              Checking if a number is even or odd using the modulus operator is
              an O(1) operation. The size of the number doesn’t affect how long
              it takes to perform this check.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Constant;
