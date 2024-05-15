import React, { useLayoutEffect, useState } from "react";
import Modal from "./views/Modal";

const HookUseLayoutEffect: React.FC = () => {
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Modal />
    </>
  );
};

export default HookUseLayoutEffect;
