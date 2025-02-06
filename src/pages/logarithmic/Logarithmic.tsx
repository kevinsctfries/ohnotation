import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import "./Logarithmic.css";
import logarithmicExamples from "./logarithmic-examples.json";
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

type LogarithmicExamples = {
  c: string;
  cpp: string;
  java: string;
  python: string;
  javascript: string;
};

const Logarithmic = () => {
  const [language, setLanguage] =
    useState<keyof LogarithmicExamples>("javascript");

  // Static, non-editable code for Highlight.js
  const [codeContent, setCodeContent] = useState<string>(
    logarithmicExamples.javascript
  );

  // Editable code for CodeMirror only
  const [editableCode, setEditableCode] = useState<string>(
    logarithmicExamples.javascript
  );

  // Use code execution hook without passing codeContent
  const { consoleOutput, executionTime, executeCode } = useCodeExecution();

  const codeRef = useRef<HTMLElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorViewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    setCodeContent(logarithmicExamples[language]);
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
      <h2>What is O(log n)?</h2>
      <p>
        O(log n), or logarithmic time, refers to an algorithm where the time it
        takes to complete grows logarithmically with the size of the input. As
        the input size increases, the time required grows at a much slower rate.
        This is often seen in algorithms that divide the problem in half at each
        step, such as binary search. The key idea is that the number of
        operations increases by a constant amount as the input size doubles,
        rather than increasing proportionally to the size of the input.
      </p>
      <h2>Key Characteristics of O(log n)</h2>
      <ul>
        <li>
          <span>Slow Growth:</span>
          <p>
            In O(log n) operations, the time required grows very slowly relative
            to the input size. For example, doubling the input size only adds a
            fixed number of additional operations, making these algorithms much
            more efficient for large datasets compared to linear (O(n)) or
            quadratic (O(n²)) algorithms.
          </p>
        </li>
        <li>
          <span>Dividing the Problem:</span>
          <p>
            O(log n) time complexity often involves algorithms that repeatedly
            divide the problem in half or use a divide-and-conquer approach.
            This division reduces the search space or the problem size by a
            constant factor in each step.
          </p>
        </li>
        <li>
          <span>Efficient for Large Datasets:</span>
          <p>
            Algorithms with O(log n) time complexity are highly efficient,
            especially for large datasets. Since the time only increases
            logarithmically, these algorithms can handle much larger inputs
            without significantly increasing the computation time.
          </p>
        </li>
      </ul>
      <h2>Code Example</h2>
      <div className="codeHighlight">
        <p>
          This code demonstrates logarithmic time complexity O(log n) by
          implementing Binary Search, an efficient algorithm for finding an
          element in a sorted array. The algorithm repeatedly divides the search
          space in half, reducing the problem size exponentially. Each iteration
          eliminates half of the remaining elements, leading to a logarithmic
          growth rate. Finding an element using Binary Search is an O(log n)
          operation, making it significantly faster than linear search for large
          datasets.
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
              setLanguage(e.target.value as keyof LogarithmicExamples)
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

      <h2>Use Cases of O(log n)</h2>
      <ul>
        <li>
          <span>Binary Search:</span>
          <p>
            Binary Search is a well-known example of an O(log n) algorithm. It
            searches for a target value in a sorted dataset by repeatedly
            dividing the search range in half, narrowing down the possible
            locations for the target. Each step reduces the search space,
            leading to logarithmic time complexity.
          </p>
        </li>
        <li>
          <span>Balanced Binary Search Trees:</span>
          <p>
            Data structures like Binary Search Trees (BST), AVL trees, and
            Red-Black trees provide efficient operations like searching,
            insertion, and deletion in O(log n) time. These trees maintain a
            balanced structure, ensuring that the height of the tree is
            logarithmic with respect to the number of elements, which keeps
            operations efficient.
          </p>
        </li>
        <li>
          <span>Logarithmic Loops:</span>
          <p>
            Some algorithms that involve repeatedly halving the size of the
            input (e.g., exponentiation by squaring) also run in O(log n) time.
            This approach is often used in scenarios where you need to compute
            powers efficiently.
          </p>
        </li>
        <li>
          <span>Efficient Data Access in Sorted Data Structures:</span>
          <p>
            In sorted collections (e.g., sorted arrays, heap structures), many
            operations such as searching for the minimum or maximum, or finding
            specific elements, can be done in O(log n) time by using binary
            search techniques.
          </p>
        </li>
        <li>
          <span>Divide and Conquer Algorithms:</span>
          <p>
            Algorithms that use the divide and conquer approach, such as merge
            sort or quick sort, typically break down the problem into smaller
            sub-problems and solve each recursively. While the overall time
            complexity of these algorithms is not always O(log n), the process
            of dividing the problem itself may exhibit logarithmic behavior.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Logarithmic;
