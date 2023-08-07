import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Header() {
  const user = useContext(UserContext);
  return (
    <header>
      <h2>Bem-vindo {user.name}</h2>
    </header>
  );
}
