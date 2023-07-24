import { Link, useLoaderData } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();
  if (!product)
    return (
      <>
        <Link to={"/products"}>
          <button>Voltar</button>
        </Link>
        <h2>Opps.... produto não encontrado</h2>
      </>
    );
  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <button>Comprar</button>
    </section>
  );
}
