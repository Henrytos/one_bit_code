export default function TextArea({ value, setValue }) {
  return (
    <div>
      <label htmlFor={value}>Menssagem</label>
      <textarea
        id={value}
        name={value}
        value={value}
        required
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
}
