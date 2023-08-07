import CardItem from "./CardItem";
export default function Cards() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <CardItem subtitle="Diversidade de itens" quantyItens={2} />
      <CardItem subtitle="Inventário Total" quantyItens={40} />
      <CardItem subtitle="Itens Recentes" quantyItens={2} />
      <CardItem subtitle="Itens acabando" quantyItens={1} />
    </div>
  );
}
