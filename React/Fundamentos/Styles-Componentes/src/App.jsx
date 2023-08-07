import Status from "./components/Status";
import Sum from "./components/Sum";
import Title from "./components/Title";
export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#2c2c2d",
      }}
    >
      <Title />
      <Sum />
      <Status />
    </div>
  );
}
