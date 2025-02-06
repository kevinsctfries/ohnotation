import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import "./Factorial.css";
import factorialExamples from "./factorial-examples.json";
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

  // Static, non-editable code for Highlight.js
  // Static, non-editable code for Highlight.js
  const [codeContent, setCodeContent] = useState<string>(
    factorialExamples.javascript
  );

  // Editable code for CodeMirror only
  const [editableCode, setEditableCode] = useState<string>(
    factorialExamples.javascript
  );

  // Use code execution hook without passing codeContent
  const { consoleOutput, executionTime, executeCode } = useCodeExecution();

  const codeRef = useRef<HTMLElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorViewRef = useRef<EditorView | null>(null);

  // Highlight.js updates when the language changes
  useEffect(() => {
    setCodeContent(factorialExamples[language]);
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
      <h2>Understanding O(n!)</h2>
      <p>
        O(n!) represents factorial time complexity, which describes an algorithm
        whose running time grows factorially with respect to the input size. In
        other words, the number of operations increases so rapidly that even
        small increases in the input size can lead to an enormous rise in the
        time taken.
      </p>
      <p>
        For an input size of n, the number of operations needed is the product
        of all integers from 1 to n (i.e., n × (n - 1) × (n - 2) × ... × 1).
        This is much more drastic than exponential time complexity (O(2ⁿ)), as
        factorial growth is far faster than exponential growth.
      </p>
      <h2>Key Characteristics of O(n!)</h2>
      <ul>
        <li>
          <span>Extremely Rapid Growth:</span>
          <p>
            With O(n!) complexity, the time required to complete an algorithm
            grows extremely quickly. For example, for an input size of 5, there
            are 5! = 120 operations; for an input size of 6, there are 6! = 720
            operations, and so on. The increase is exponential and very steep.
          </p>
        </li>
        <li>
          <span>Impractical for Large Inputs:</span>
          <p>
            Like O(2ⁿ), O(n!) algorithms are only feasible for small values of
            n. Even with modest increases in n, the number of operations can
            become so large that the algorithm is practically unusable for
            anything but small input sizes.
          </p>
        </li>
        <li>
          <span>Permutation-Based Problems:</span>
          <p>
            Many problems involving permutations, where you need to explore
            every possible arrangement of a set of items, result in O(n!)
            complexity. Since there are n! possible permutations of n elements,
            an algorithm that generates or checks all permutations has this
            complexity.
          </p>
        </li>
        <li>
          <span>Brute Force Solutions:</span>
          <p>
            Algorithms that attempt to solve problems by generating all possible
            solutions (e.g., trying every possible combination or permutation)
            often have O(n!) complexity. These solutions can be impractical when
            the input size increases.
          </p>
        </li>
      </ul>
      <h2>Code Example</h2>
      <div className="codeHighlight">
        <p>
          This code demonstrates how to generate all permutations of an array
          using a recursive approach. Each function takes an array as input and
          systematically rearranges its elements to produce every possible
          ordering. Generating permutations in this way is an O(n!) operation.
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
              setLanguage(e.target.value as keyof FactorialExamples)
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

      <h2>Test O(n!)</h2>
      <p>
        Experiment with the <code>generatePermutations</code> function by
        editing and running the code below to observe its performance in action.
      </p>
      <p>
        Try modifying the elements inside the <code>nums</code> array and
        observe how the function generates different permutations.
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
      <h2>Use Cases of O(n!)</h2>
      <ul>
        <li>
          <span>Traveling Salesman Problem (TSP):</span>
          <p>
            One of the classic problems with O(n!) complexity is the Traveling
            Salesman Problem (TSP), which asks for the shortest possible route
            that visits a set of cities exactly once and returns to the starting
            point. The brute-force solution to TSP involves checking every
            possible order in which the cities can be visited (which is n!),
            making the time complexity factorial.
          </p>
        </li>
        <li>
          <span>Generating Permutations:</span>
          <p>
            As with the Traveling Salesman Problem, generating all possible
            permutations of a set of n elements involves checking n!
            arrangements. This results in an O(n!) time complexity. For example,
            generating all permutations of 3 elements (1, 2, 3) results in 3! =
            6 permutations.
          </p>
        </li>
        <li>
          <span>Solving Puzzles or Games:</span>
          <p>
            Certain puzzles or games, especially those that require testing all
            possible configurations or solutions, can have an O(n!) complexity.
            For example, solving a 4x4 sliding puzzle where you need to consider
            all possible ways the tiles can be rearranged might lead to an O(n!)
            solution.
          </p>
        </li>
        <li>
          <span>Brute-Force Search of Combinations:</span>
          <p>
            In problems where you need to generate and test all possible
            combinations or permutations of a given set of items, an O(n!)
            approach can arise. This can include certain combinatorial problems
            where you're testing all possibilities.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Factorial;
