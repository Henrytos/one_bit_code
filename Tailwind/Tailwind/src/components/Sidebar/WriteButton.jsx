// eslint-disable-next-line react/prop-types
const WriteButton = ({ children }) => (
  <button
    className="
    text-zinc-800
    bg-emerald-400 dark:bg-emerald-500
    hover:bg-emerald-500 hover:dark:bg-emerald-600
      w-full rounded-lg py-2 transition-colors
      "
  >
    {children}
  </button>
);

export default WriteButton;
