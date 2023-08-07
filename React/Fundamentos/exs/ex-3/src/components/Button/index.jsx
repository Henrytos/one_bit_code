import styles from "./styles.module.css";

export default function Btn(props) {
  return (
    <a {...props} target="blank">
      {props.children}
    </a>
  );
}
