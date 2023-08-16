import { FiSearch } from "react-icons/fi";

const SearchForm = () => (
  <form
    className="min-w-0 md:w-full flex-grow flex"
    onSubmit={(ev) => ev.preventDefault()}
  >
    <input
      className="
       flex-grow 
       p-2 rounded-l-lg border-2 border-transparent
       bg-zinc-300 dark:bg-zinc-600 text-zinc-600 dark:text-zinc-50
       focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 transition-colors"
      type="text"
      placeholder="Pesquisar..."
    />
    <button
      className="
       p-2 rounded-r-lg border-2 border-transparent
       bg-zinc-300 dark:bg-zinc-600
       text-zinc-600 dark:text-zinc-50
       focus:outline-none 
       dark:focus:border-emerald-400 focus:border-emerald-600  
       dark:focus:text-emerald-400 focus:text-emerald-600
       dark:hover:border-emerald-400 hover:border-emerald-600 
       transition-colors
        "
    >
      <FiSearch />
    </button>
  </form>
);

export default SearchForm;
