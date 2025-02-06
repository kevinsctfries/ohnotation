import { useState } from "react";

export const useCodeExecution = () => {
  const [consoleOutput, setConsoleOutput] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const executeCode = (code: string) => {
    const startTime = performance.now();

    setConsoleOutput(null);

    const originalConsoleLog = console.log;
    let logOutput: string[] = [];

    console.log = (...args: any[]) => {
      logOutput.push(args[args.length - 1]);
    };

    try {
      console.log("Code to be executed:", code);

      eval(code);

      if (logOutput.length > 0) {
        setConsoleOutput(logOutput[logOutput.length - 1].toString());
      }
    } catch (error) {
      console.log("Error in execution:", error);
      setConsoleOutput(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      console.log = originalConsoleLog;
    }

    const endTime = performance.now();
    setExecutionTime(endTime - startTime);
  };

  return {
    consoleOutput,
    executionTime,
    executeCode,
  };
};

export default useCodeExecution;
