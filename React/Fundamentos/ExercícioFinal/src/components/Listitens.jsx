import FinishedItems from "./ListItem/FinishedItems";
import RecentItems from "./ListItem/RecentItems";

export default function ListItens() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <RecentItems />
      <FinishedItems />
    </div>
  );
}
