import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div
        className="
        h-screen grid
      bg-zinc-50 dark:bg-zinc-800 
       text-zinc-800 dark:text-zinc-50 
        place-content-center gap-12 "
      >
        <span className="text-4xl">Bem Vindo ao TailwindCss</span>
        <button
          className="
          w-40
          m-auto
          bg-zinc-800 text-zinc-50 
          py-2 px-4 
          border rounded-2xl
          hover:bg-zinc-100 hover:text-zinc-800 transition-colors
          "
          onClick={() => setCount((count) => count + 1)}
        >
          Couter is {count}
        </button>
      </div>
    </>
  );
}

export default App;
