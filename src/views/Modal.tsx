import React, { useLayoutEffect, useRef, useState } from "react";

const Modal: React.FC = () => {
  const [show, setShow] = useState(false);

  const popup = useRef<HTMLDivElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    if (!popup.current || !button.current) return;

    const { bottom } = button.current.getBoundingClientRect();

    popup.current.style.top = `${bottom + 25}px`;
  });

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Toggle Modal
      </button>

      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          Hello from modal!
        </div>
      )}
    </>
  );
};

export default Modal;
