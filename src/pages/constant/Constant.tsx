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
          <span>O(1)</span>, or <span>constant time complexity</span>, refers to
          operations that take the same amount of time to execute, regardless of
          the size of the input. This means that no matter how large or small
          the dataset is, the execution time remains fixed and does not scale
          with the size of the input.
        </p>
        <br />
        <p>
          Constant time operations are considered the gold standard in algorithm
          design because they provide the best possible efficiency. Examples of
          <span> O(1)</span> operations include:
        </p>
        <ul>
          <li>Accessing a specific element in an array by its index.</li>
          <li>
            Fetching a value from a hash table using a key (in ideal conditions
            without collisions).
          </li>
          <li>Checking if a number is even or odd using modulo (%).</li>
        </ul>
      </div>
      <h2>Key Characteristics of O(1)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Fixed Time:</span>
            <p>
              The running time of the algorithm does not depend on the size of
              the input. For example, accessing an element from an array or hash
              table is typically O(1).
            </p>
          </li>
          <li>
            <span>No Dependency on Input Size:</span>
            <p>
              O(1) operations are independent of the size of the input. Unlike
              O(n) or O(log n) algorithms, they do not scale or degrade in
              performance as the input grows.
            </p>
          </li>
          <li>
            <span>Simple Operations:</span>
            <p>
              These algorithms often involve simple operations like direct
              memory access, basic arithmetic, or boolean evaluations.{" "}
            </p>
          </li>
          <li>
            <span>No Loops or Recursion:</span>
            <p>
              Algorithms that have O(1) complexity generally do not have loops
              or recursion that would iterate over the input data.
            </p>
          </li>
        </ul>
      </div>
      <h2>Code Example</h2>
      <div className="infoText">
        <p>
          The <span>getElement</span> function takes an array (arr) and an index
          (index) as inputs. It directly retrieves the value stored at the
          specified index in the array. In this example, it fetches the value at
          index 2, which is 30.
        </p>
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
            <span>Predictable:</span>
            <p>
              Since the operation takes the same amount of time regardless of
              the input size, it's highly predictable and efficient, especially
              when dealing with large datasets.
            </p>
          </li>
          <li>
            <span>Scalable:</span>
            <p>
              When an algorithm has O(1) time complexity, it scales well, even
              with a massive amount of data. The performance remains constant
              and does not degrade as the size of the input increases.
            </p>
          </li>
          <li>
            <span>Fast Execution:</span>
            <p>
              Operations with O(1) time complexity can often be completed very
              quickly because they don't need to iterate through data or perform
              recursive calls.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Constant;
