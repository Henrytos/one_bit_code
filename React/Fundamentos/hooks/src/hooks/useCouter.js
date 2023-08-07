import { useState } from "react";

function getInitValue() {
  console.log("Obtendo valor inicial");
  return 1 + 1;
}

export default function useCounter() {
  const [count, setCount] = useState(() => getInitValue());

  const increment = () => {
    setCount((targetState) => targetState + 1);
  };

  return { count, increment };
}
