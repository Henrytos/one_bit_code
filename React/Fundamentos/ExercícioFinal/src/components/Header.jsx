import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h3>REACT STOCK</h3>
      <nav>
        <Link to={"./"}> inicio</Link>
        <Link to={"./stockItems"}> Items </Link>
      </nav>
    </header>
  );
}
