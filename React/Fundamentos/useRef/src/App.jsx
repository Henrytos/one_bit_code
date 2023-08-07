import { useRef, useState } from "react";
import InputRef from "./components/InputRef";

export default function App() {
  let variable = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);
  const handleClick = () => {
    alert(`variavesis: ${variable}
    ref: ${ref.current}
    state: ${state}
    `);
  };
  return (
    <div>
      <h2>Input input-UseRef Dom</h2>
      <InputRef />
      <hr />
      <h2>Valores:</h2>
      <hr />
      <p>Variavel: {variable}</p>
      <p>Variavel-ref: {ref.current}</p>
      <p>Variavel-satate: {state}</p>
      <hr />
      <button onClick={() => variable++}>Adicionar variavel</button>
      <button onClick={() => ref.current++}>Adicionar variavel-ref</button>
      <button onClick={() => setState((state) => state + 1)}>
        Adicionar variavel-state
      </button>
      <hr />
      <button onClick={handleClick}>Mostar variaveis</button>
    </div>
  );
}
