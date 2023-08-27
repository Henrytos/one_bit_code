export default function Container({ children }) {
  return (
    <div
      className="
    flex flex-col gap-4 px-40
    text-zinc-900 dark:text-zinc-50 
    max-2xl:px-10 max-sm:px-5 max-[20rem]:px-3"
    >
      {" "}
      {children}
    </div>
  );
}
