import { FiX } from "react-icons/fi";

export default function ExitEmail({ setOpenEmail }) {
  return (
    <span
      className="
    absolute right-4 top-4 
    flex items-center gap-2 rounded-md
     bg-red-300 hover:bg-red-400
    dark:bg-red-500 dark:hover:bg-red-600
    px-2 py-1 cursor-pointer transition-colors"
      onClick={() => setOpenEmail(false)}
    >
      <FiX /> <span className="max-xl:hidden"> Fecahr</span>
    </span>
  );
}
