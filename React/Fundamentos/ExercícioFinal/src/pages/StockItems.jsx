import { Link, Outlet } from "react-router-dom";

export default function StockItems() {
  return (
    <main>
      <h2>STOCK ITEMS</h2>
      <nav>
        <Link to="./allItens">Todos os itens</Link>
        <Link to="./newItem">Novo Item</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </main>
  );
}
