import React, { useEffect } from "react";
import { sim } from "@code-hike/sim-user";
import { MiniTerminal } from "@code-hike/mini-terminal";
import { Terminal } from "../../examples/vite/src/mini-terminal";

import "./styles.css";

// import "../../node_modules/@code-hike/mini-terminal/dist/index.css";

export default function App() {
  const [count, setCount] = React.useState(0);

  const [progress, setProgress] = React.useState(0);

  let slide = 0;

  const yarnCommands = `$ yarn install
Fetching packages...
Done.|
$ yarn dev
Compiled successfully - ready on http://localhost:3000`;

  useEffect(() => {
    setInterval(() => {
      setProgress(slide % yarnCommands.split("|").length);
      slide++;
      console.log(
        slide % yarnCommands.split("|").length,
        slide,
        yarnCommands.split("|").length
      );
    }, 2000);
  }, []);
  return (
    <div className="App">
      <h1
        id="inc"
        style={{
          background: "salmon",
          textAlign: "center",
        }}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </h1>
      <button
        onClick={() => {
          sim({ type: "click", selector: "#inc" });
        }}
      >
        Simulate Click
      </button>

      <Terminal snippets={yarnCommands.split("|")} index={progress} />
    </div>
  );
}
