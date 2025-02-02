import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./Factorial.css";

import factorialExamples from "./factorial-examples.json";

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

type FactorialExamples = {
  c: string;
  cpp: string;
  java: string;
  python: string;
  javascript: string;
};

const Factorial = () => {
  const [language, setLanguage] =
    useState<keyof FactorialExamples>("javascript");
  const [codeContent, setCodeContent] = useState<string>("");
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setCodeContent(factorialExamples[language] || "");
  }, [language]);

  useEffect(() => {
    if (codeRef.current && codeContent) {
      codeRef.current.removeAttribute("data-highlighted");

      hljs.highlightElement(codeRef.current);
    }
  }, [codeContent]); // Re-run highlighting when `codeContent` changes

  return (
    <div>
      <h2>Understanding O(n!)</h2>
      <div className="infoText">
        <p>
          <span>O(n!)</span>, or factorial time complexity, refers to algorithms
          whose execution time grows as the factorial of the size of the input.
          This means that the number of operations required to solve the problem
          increases very rapidly, far faster than polynomial time complexities
          such as <span>O(n)</span> or <span>O(n^2)</span>.
        </p>
        <br />
        <p>
          <span>O(n!) </span>is often seen in problems that involve generating
          or evaluating all possible permutations of a set of elements, where
          the number of permutations grows factorially as the number of elements
          increases.
        </p>
      </div>
      <h2>Why O(n!) is Inefficient</h2>
      <div className="infoText">
        <p>
          <span>O(n!)</span> is one of the most inefficient time complexities,
          often making it suitable only for small, highly constrained problems.
          These algorithms are typically impractical for any problem where the
          input size is even moderately large. For example, trying to compute
          all permutations of a set of 50 elements would involve billions of
          billions of operations. In practice, optimization techniques like
          dynamic programming, pruning, and heuristics are used to reduce the
          search space or to approximate solutions when dealing with problems
          that might have factorial complexity.
        </p>
        <br />
        <p>
          <span>O(n!)</span> algorithms tend to be used in highly specialized,
          small-scale problems, but they generally aren't feasible for
          real-world, large-scale datasets.
        </p>
      </div>
      <h2>Key Characteristics of O(n!)</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Extremely Inefficient for Large Inputs:</span>
            <p>
              The factorial growth of <span>O(n!)</span> makes these algorithms
              impractical for even moderately sized inputs. For example, with 10
              elements, there are 3,628,800 possible permutations, and with 20
              elements, the number of permutations jumps to
              2,432,902,008,176,640,000. This rapid growth makes algorithms with
              <span> O(n!)</span> complexity unusable for large datasets.
            </p>
          </li>
          <li>
            <span>Permutations and Combinations:</span>
            <p>
              Many <span>O(n!)</span> algorithms deal with generating and
              evaluating all possible permutations or combinations of a set of
              elements. These problems arise frequently in combinatorial
              optimization and search problems, where every possible
              configuration must be checked to find the optimal solution.
            </p>
          </li>
          <li>
            <span>Infeasibility for Large Inputs:</span>
            <p>
              <span>O(n!) </span>time complexity is considered highly
              inefficient and impractical for large inputs. As n increases, the
              time to compute solutions grows astronomically, quickly exceeding
              the capabilities of modern computing systems. Even for relatively
              small n (e.g., 20 or 30), the number of operations becomes
              overwhelming.
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
          onChange={e => setLanguage(e.target.value as keyof FactorialExamples)}
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
      <h2>Additional Examples of O(n!) Algorithms</h2>
      <div className="infoText">
        <ul>
          <li>
            <span>Brute-Force Permutation Generation:</span>
            <p>
              Generating all possible permutations of a set of n elements, such
              as when trying to solve problems like the
              <span> traveling salesman problem</span> using brute force. Every
              possible order of visiting cities must be evaluated to find the
              best path.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Factorial;
