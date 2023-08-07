import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("conponente montado");
    return () => {
      console.log("Componente desmontando.....fazendo limpeza");
    };
  }, [show]);
  return (
    <div>
      <button onClick={() => setCount((state) => state + 1)}>
        Cout:{count}
      </button>
    </div>
  );
}
function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Conhecendo o useEffect()</h1>
      <div>
        <input
          type="checkbox"
          id="show"
          value={show}
          onChange={() => setShow((state) => !state)}
        />
        <label htmlFor="show">Exibir Contador</label>
      </div>
      <hr />
      {show ? <Counter /> : null}
    </>
  );
}

export default App;
