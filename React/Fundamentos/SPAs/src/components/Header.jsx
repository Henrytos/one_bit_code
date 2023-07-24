import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/admin"}>Admin</Link>
      </nav>
    </header>
  );
}
