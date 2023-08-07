const targetStatus = true;

export default function Status() {
  return (
    <h2
      //Estilos inline
      style={{
        color: targetStatus ? "green" : "red",
      }}
    >
      Status space-ship: {targetStatus ? "on" : "off"}
    </h2>
  );
}
