function sum(a, b) {
  return a + b;
}

export default function App() {
  const tech = "React";
  const targetStatus = true;
  return (
    <div>
      <h2>{tech} é incrivel</h2>
      <h2>È simples 1 + 1 é {sum(1, 1)}</h2>
      <h2>Status space-ship: {targetStatus ? "on" : "off"}</h2>
      <h2>teste </h2>
    </div>
  );
}
