export default function InputText({ label, value, setValue }) {
  return (
    <div>
      <label htmlFor="cover">{label}</label>
      <input
        type="text"
        id="cover"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
}
