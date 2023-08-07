import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function InfoUser() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Nome:{user.name}</p>
      <p>Email:{user.email}</p>
    </div>
  );
}
