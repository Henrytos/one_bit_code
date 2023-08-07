import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <hr />
      <main>
        <Outlet />
      </main>
      <footer>
        <hr />
        <p>Feito com React Router!</p>
      </footer>
    </>
  );
}
