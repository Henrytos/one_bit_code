export default function Title({ children }) {
  return (
    <span
      className="border-b dark:border-zinc-50 border-zinc-900 
    pb-4 text-xl font-semibold uppercase"
    >
      {children}
    </span>
  );
}
