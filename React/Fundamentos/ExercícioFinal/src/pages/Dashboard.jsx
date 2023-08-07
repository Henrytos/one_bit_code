import Cards from "../components/Cards";
import ListItens from "../components/Listitens";

export default function Dashboard() {
  return (
    <main>
      <span style={{ fontSize: "2rem" }}>Dashbord</span>
      <Cards />
      <ListItens />
    </main>
  );
}
