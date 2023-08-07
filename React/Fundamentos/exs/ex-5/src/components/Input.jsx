export default function Input({ type, value, setValue }) {
  return (
    <div>
      <label htmlFor={value}>Email:</label>
      <input
        type={type}
        name={value}
        id={value}
        value={value}
        required
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
}
