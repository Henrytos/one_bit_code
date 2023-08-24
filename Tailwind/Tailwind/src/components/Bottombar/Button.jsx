// eslint-disable-next-line react/prop-types
const Button = ({ active, onClick, children }) => {
  return (
    <button
      className={`flex-1 p-2 mb-0.5 rounded-lg shadow
        text-gray-800 dark:text-gray-50
        ${
          active
            ? "bg-emerald-500 dark:bg-emerald-600"
            : "bg-gray-200 dark:bg-gray-950"
        }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
