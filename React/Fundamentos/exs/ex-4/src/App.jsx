import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [copy, setCopy] = useState("Copiar");
  const [password, setPassword] = useState("");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8;
  // ...
  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let i = 0; i < customSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopy("Copiar");
  }
  // ...
  function genereto() {
    generate();
  }
  function copiar() {
    navigator.clipboard.writeText(password);
    setCopy("Copiado!");
  }
  return (
    <>
      <h1>Gerador de senhas</h1>

      <div>
        <label htmlFor="showInput">Costumizar Tamanha</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((targetState) => !targetState)}
        />
      </div>
      <br />
      {showInput ? (
        <div>
          <label htmlFor="customSize">Tamanho:</label>
          <Input customSize={customSize} setCustomSize={setCustomSize} />
        </div>
      ) : null}
      <div className="card">
        <button onClick={genereto}>
          Gerar senha do tamanho:{passwordSize}
        </button>
        <button onClick={copiar}>{copy}</button>
        <p>{password}</p>
      </div>
    </>
  );
}

export default App;
