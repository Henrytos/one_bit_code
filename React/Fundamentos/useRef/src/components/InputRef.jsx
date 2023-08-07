import { useRef } from "react";

export default function InputRef() {
  const inputRef = useRef(null);

  const focusInputs = () => {
    const input = inputRef.current;
    input.focus();
    input.style.backgroundColor = "#fff";
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInputs}>Focar</button>
    </div>
  );
}
