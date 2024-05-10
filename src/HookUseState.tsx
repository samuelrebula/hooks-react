import React from "react";
import { useState } from "react";

const HookUseState: React.FC = () => {
  // const [count, setCount] = useState(0);
  // const [theme, setTheme] = useState("Dark");
  const [state, setState] = useState({ count: 0, theme: "Light" });

  // const IncrementCount = () => {
  //   setCount((prevState) => prevState + 1);
  // };

  const changeState = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: "Dark",
      };
    });
  };

  const logState = () => {
    console.log(state);
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          changeState();
          logState();
          // IncrementCount();
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default HookUseState;
