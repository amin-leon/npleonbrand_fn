import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Typing = () => {
  return (
    <div className="flex justify-center mx-auto py-8  rounded-lg p-4 z-100 h-1/2">
      <TypeAnimation
        sequence={[
          "import React from 'react';",
          1500,
          "const App = () => {",
          500,
          "const App = () => {\n  return <h1>Hello World</h1>;",
          1000,
          "const App = () => {\n  return <h1>Hello World</h1>;\n};",
          1000,
          "const App = () => {\n  const [count, setCount] = useState(0);\n  return <h1>Hello World</h1>;\n};",
          2000,
          "const App = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <h1>Counter: {count}</h1>\n    </div>\n  );\n};",
          3000,
        ]}
        wrapper="pre"
        speed={40}
        style={{
          fontSize: "1.2em",
          fontFamily: "monospace",
          fontWeight: "medium",
          background: "linear-gradient(to right, #22d3ee, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "blue",
          textAlign: "left",
          whiteSpace: "pre-line",
        }}
        repeat={Infinity}
        cursor={true}
      />
    </div>
  );
};

export default Typing;
