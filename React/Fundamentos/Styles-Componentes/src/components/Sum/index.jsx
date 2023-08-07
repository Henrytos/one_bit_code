function sum(a, b) {
  return a + b;
}
import styles from "../../styles.module.css";
export default function Sum() {
  return <h2 className={styles.sum}>È simples 1 + 1 é {sum(1, 1)}</h2>;
}
