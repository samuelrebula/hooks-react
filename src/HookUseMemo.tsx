import { useState, useMemo } from "react";

const HookUseMemo: React.FC = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setNumber(2)}>Increment</button>
      <p>text: {text}</p>
    </>
  );
};

const slowFunction = (num: number): number => {
  console.log("Slow function is being called!");
  for (let i = 0; i <= 10000; i++) {}
  return num * 2;
};

export default HookUseMemo;
