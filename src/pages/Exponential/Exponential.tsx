import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import "./Exponential.css";
import exponentialExamples from "./exponential-examples.json";
import useCodeExecution from "../../utils/CodeExecution";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import { EditorState } from "@codemirror/state";
import { EditorView, lineNumbers } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark } from "@uiw/codemirror-theme-github";

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

  // Static, non-editable code for Highlight.js
  const [codeContent, setCodeContent] = useState<string>(
    exponentialExamples.javascript
  );

  // Editable code for CodeMirror only
  const [editableCode, setEditableCode] = useState<string>(
    exponentialExamples.javascript
  );

  // Use code execution hook without passing codeContent
  const { consoleOutput, executionTime, executeCode } = useCodeExecution();

  const codeRef = useRef<HTMLElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorViewRef = useRef<EditorView | null>(null);

  // Highlight.js updates when the language changes
  useEffect(() => {
    setCodeContent(exponentialExamples[language]);
  }, [language]);

  useEffect(() => {
    if (codeRef.current && codeContent) {
      codeRef.current.removeAttribute("data-highlighted");
      codeRef.current.textContent = codeContent;
      hljs.highlightElement(codeRef.current);
    }
  }, [codeContent, language]);

  useEffect(() => {
    if (editorRef.current) {
      editorViewRef.current = new EditorView({
        state: EditorState.create({
          doc: editableCode,
          extensions: [
            javascript(),
            githubDark,
            lineNumbers(),
            EditorView.updateListener.of(update => {
              setEditableCode(update.state.doc.toString());
            }),
          ],
        }),
        parent: editorRef.current,
      });

      return () => {
        editorViewRef.current?.destroy();
      };
    }
  }, []);

  return (
    <div>
      <h1>Exponential Time</h1>
      <h2>Understanding O(2ⁿ)</h2>
      <p>
        O(2ⁿ) describes an exponential time complexity, meaning that the time it
        takes to run an algorithm doubles with every additional element in the
        input. This is considered one of the least efficient time complexities,
        as the number of operations grows extremely quickly as the size of the
        input increases. This growth is much faster than linear (O(n)) or even
        logarithmic (O(log n)) growth. For example, an algorithm with O(2ⁿ) will
        take 2 operations for 1 input, 4 operations for 2 inputs, 8 operations
        for 3 inputs, and so on.
      </p>
      <h2>Key Characteristics of O(2ⁿ)</h2>
      <ul>
        <li>
          <span>Exponential Growth:</span>
          <p>
            The running time of an algorithm with O(2ⁿ) doubles with each
            additional input element. This causes an explosion in computation as
            n increases, making the algorithm impractical for large input sizes.
          </p>
        </li>
        <li>
          <span>Slow for Large Inputs:</span>
          <p>
            Algorithms with O(2ⁿ) can handle only small input sizes efficiently.
            As n increases, the number of operations increases at a rapid rate,
            so they become infeasible for real-world use when n is large.
          </p>
        </li>
        <li>
          <span>Recursion and Branching:</span>
          <p>
            Exponential time complexity often occurs in recursive algorithms
            that branch into multiple sub-problems. Each branch itself can split
            into more branches, leading to an exponential number of recursive
            calls.
          </p>
        </li>
        <li>
          <span>Inefficient for Large Data:</span>
          <p>
            While these algorithms can sometimes be useful for small datasets or
            where no better solutions exist, they are typically considered
            inefficient for problems with larger datasets.
          </p>
        </li>
      </ul>
      <h2>Code Example</h2>
      <div className="codeHighlight">
        <p>
          This code demonstrates how to compute the Fibonacci sequence using a
          recursive approach. Each function takes an integer n as input and
          returns the nth Fibonacci number by recursively summing the two
          preceding numbers. Computing Fibonacci numbers with this recursive
          approach is an O(2ⁿ) operation
        </p>
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
              setLanguage(e.target.value as keyof ExponentialExamples)
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
          <code ref={codeRef} className={`language-${language}`} />
        </pre>
      </div>

      <h2>Test O(2ⁿ)</h2>
      <p>
        Experiment with the <code>fibonacci</code> function by editing and
        running the code below to observe its performance in action.
      </p>
      <p>
        "Try changing the value of <code>n</code> inside{" "}
        <code>console.log(fibonacci(n))</code> to see how the function computes
        different Fibonacci numbers."
      </p>

      <div className="code-editor">
        <div ref={editorRef} />
        <div className="console">
          <div className="consoleHeader">
            <h4>Console Output</h4>
            <button
              className="runCodeButton"
              onClick={() => executeCode(editableCode)}>
              <PlayArrowRoundedIcon />
              Run Code
            </button>
          </div>
          {executionTime !== null && (
            <div className="executionTime">
              <p>Execution Time: {executionTime.toFixed(2)} ms</p>
            </div>
          )}
          <div className="consoleOutput">
            <p>{consoleOutput || "No output yet. Run the code!"}</p>
          </div>
        </div>
      </div>

      <h2>Use Cases of O(2ⁿ)</h2>
      <ul>
        <li>
          <span>Recursive Algorithms:</span>
          <p>
            A classic example of O(2ⁿ) time complexity is the recursive solution
            to the Fibonacci sequence without memoization. The recursive calls
            for each Fibonacci number grow exponentially as each call generates
            two additional calls.
          </p>
        </li>
        <li>
          <span>Power Set:</span>
          <p>
            The power set problem involves generating all subsets of a given
            set. If you have a set of n elements, there are 2ⁿ possible subsets.
            The time complexity to generate all subsets is O(2ⁿ), as you need to
            consider each subset.
          </p>
        </li>
        <li>
          <span>Combinatorial Problems:</span>
          <p>
            Many combinatorial problems, such as finding all possible solutions
            to the traveling salesman problem or solving certain types of
            puzzles, have an O(2ⁿ) complexity because they involve exploring all
            possible combinations or permutations of the input data.
          </p>
        </li>
        <li>
          <span>Brute Force Solutions:</span>
          <p>
            In problems where there is no known efficient algorithm, brute-force
            solutions that explore all possibilities may result in O(2ⁿ)
            complexity. This is often seen in exhaustive search algorithms where
            each element in the input has two choices (included or not
            included).
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Exponential;
