import styles from "./styles.module.css";

export default function Header({ subtitle, quantyItens }) {
  return (
    <div className={styles.card}>
      <span className={styles.cardTitle}>{subtitle}</span>
      <span className={styles.cardNumber}>{quantyItens}</span>
    </div>
  );
}
