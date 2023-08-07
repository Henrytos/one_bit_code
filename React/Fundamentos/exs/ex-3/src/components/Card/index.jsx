import style from "./style.module.css";

export default function Card(props) {
  return <div {...props}>{props.children}</div>;
}
