import styles from "./styles.module.css";

export default function Description(props) {
  return <p className={styles.description}>{props.children}</p>;
}
