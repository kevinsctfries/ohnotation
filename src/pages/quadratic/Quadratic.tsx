import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import "./Quadratic.css";
import quadraticExamples from "./quadratic-examples.json";
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

  const [codeContent, setCodeContent] = useState<string>(
    quadraticExamples.javascript
  );

  const [editableCode, setEditableCode] = useState<string>(
    quadraticExamples.javascript
  );

  const { consoleOutput, executionTime, executeCode } =
    useCodeExecution(editableCode);

  const codeRef = useRef<HTMLElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorViewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    setCodeContent(quadraticExamples[language]);
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
      <h2>What is O(n²)?</h2>
      <p>
        O(n²), or quadratic time, refers to an operation where the time it takes
        to complete grows as the square of the size of the input. This means
        that if you double the size of the input, the time required to complete
        the task will quadruple. The growth of the time is not linear, but
        instead increases much faster as the input size increases. O(n²)
        operations are common in algorithms that involve nested loops, where one
        loop iterates over the dataset and the other loop iterates over the
        dataset for each element in the first loop.
      </p>
      <h2>Key Characteristics of O(n^2)</h2>
      <ul>
        <li>
          <span>Squared Growth:</span>
          <p>
            In O(n²) operations, the time taken grows at a rate proportional to
            the square of the input size. If the input size doubles, the time
            required increases by four times. This means that the time
            complexity grows much faster than linear time (O(n)) as the size of
            the input increases.
          </p>
        </li>
        <li>
          <span>Nested Loops:</span>
          <p>
            O(n²) operations typically involve two nested loops that iterate
            over the dataset. For each item in the first loop, the second loop
            iterates through the entire dataset, leading to a total of n * n
            steps.
          </p>
        </li>
        <li>
          <span>Inefficient for Large Inputs:</span>
          <p>
            Because the time grows quadratically, O(n²) algorithms can become
            very slow when the input size is large. While they may work fine
            with small datasets, their performance degrades quickly as the
            dataset increases in size.
          </p>
        </li>
        <li>
          <span>Increased Complexity:</span>
          <p>
            Quadratic time complexity indicates that the problem is more complex
            than linear time problems. It generally happens in algorithms where
            comparisons or checks need to be made between multiple pairs of
            elements in the dataset.
          </p>
        </li>
      </ul>
      <h2>Code Example</h2>
      <div className="codeHighlight">
        <p>
          This code demonstrates quadratic time complexity O(n²) using Bubble
          Sort, a simple sorting algorithm. The algorithm repeatedly compares
          adjacent elements and swaps them if they are in the wrong order. The
          process is repeated for every element, leading to n-1 passes, where
          each pass requires up to n-1 comparisons. As a result, the number of
          operations grows proportionally to the square of the input size,
          making Bubble Sort inefficient for large datasets. Sorting an array
          using this approach is an O(n²) operation.
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
              setLanguage(e.target.value as keyof QuadraticExamples)
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

      <h3>Test how fast O(1) is!</h3>
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

      <h2>Use Cases of O(n²)</h2>
      <ul>
        <li>
          <span>Bubble Sort:</span>
          <p>
            One of the classic examples of an O(n²) algorithm is Bubble Sort. In
            this algorithm, each element in the array is compared with every
            other element to sort them. The first loop runs n times, and for
            each iteration, the second loop also runs n times, resulting in a
            time complexity of O(n²).
          </p>
        </li>
        <li>
          <span>Selection Sort:</span>
          <p>
            Selection Sort is another sorting algorithm that works in O(n²)
            time. It repeatedly selects the smallest (or largest) element from
            the unsorted part of the list and swaps it with the element at the
            current position. This involves a nested loop that results in
            quadratic time complexity.
          </p>
        </li>
        <li>
          <span>Inserting All Pairs of Items into a Data Structure:</span>
          <p>
            In cases where you need to insert all pairs of items from a dataset
            into a structure (like finding all possible pairs of elements in an
            array), this will often require nested iterations, leading to O(n²)
            complexity.
          </p>
        </li>
        <li>
          <span>Matrix Multiplication:</span>
          <p>
            When multiplying two matrices, the operation involves iterating over
            rows and columns, which results in nested loops. The time complexity
            for this type of operation can be O(n²) in many simple matrix
            algorithms.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Quadratic;
