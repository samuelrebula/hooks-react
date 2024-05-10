import React, { useState, useRef, useEffect } from "react";

const HookUseRef: React.FC = () => {
  const [name, setName] = useState("");

  const previousName = useRef<string>("");

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  //   const renders = useRef(0);

  //   useEffect(() => {
  //     renders.current = renders.current + 1;
  //   });

  //   const inputRef = useRef<HTMLInputElement>(null);

  //   //   console.log(inputRef.current);

  //   const focusInput = () => {
  //     inputRef.current?.focus();
  //   };

  return (
    <div>
      <input
        // ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello! My name is {name}</p>
      {/* <p>Renders: {renders.current}</p> */}
      {/* <button onClick={focusInput}>Focus input</button> */}
      <p>And my name was {previousName.current}</p>
    </div>
  );
};

export default HookUseRef;
