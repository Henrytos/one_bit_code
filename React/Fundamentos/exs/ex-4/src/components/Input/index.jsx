export default function Input(props) {
  return (
    <input
      type="number"
      id="passwordSize"
      value={props.customSize}
      min={1}
      onChange={(ev) => props.setCustomSize(+ev.target.value)}
    />
  );
}
