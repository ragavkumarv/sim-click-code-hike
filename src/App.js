import React from "react";
import { sim } from "@code-hike/sim-user";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1
        id="inc"
        style={{
          background: "salmon",
          textAlign: "center"
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
    </div>
  );
}
