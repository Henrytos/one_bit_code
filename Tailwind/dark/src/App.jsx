import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const body = document.querySelector("body");

  theme ? (body.classList = "") : (body.classList = "dark");

  return (
    <>
      <div className="h-screen grid place-content-center  bg-zinc-100 dark:bg-zinc-700 transition-colors">
        <span
          className="flex gap-8 py-2 px-4 relative border
          text-zinc-900  border-zinc-900
          dark:text-zinc-50  dark:border-zinc-50 
          rounded-full cursor-pointer max-w-[116px]  m-auto mb-10"
          onClick={() => setTheme(!theme)}
        >
          <span
            className={`absolute top-0 ${theme ? "translate-x-10" : "left-0"} 
              w-[50%] h-full bg-zinc-600/20 dark:bg-zinc-50/20 
            rounded-full transition-transform`}
          ></span>
          <Moon className="z-10 text-slate-600  dark:text-slate-500" />
          <Sun className=" z-10 text-yellow-500 dark:text-yellow-400" />
        </span>
        <section className="text-zinc-900 dark:text-zinc-50 flex flex-col gap-4 px-40 max-2xl:px-10 max-sm:px-5 max-[300px]:px-3">
          <h2>Lorem, ipsum dolor.</h2>
          <span className="bg-zinc-900 dark:bg-zinc-50 w-full h-[1px]" /> Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Eligendi porro
          assumenda perferendis debitis, veniam ad deserunt ipsam quam, numquam
          ducimus corporis vitae hic similique magnam error, earum modi
          excepturi nobis laborum maiores commodi! Maiores reprehenderit placeat
          quas soluta earum voluptates, optio veniam odio totam quo reiciendis
          illo vero beatae. Corrupti dolores voluptatum voluptas. Earum
          obcaecati quasi voluptates itaque quo voluptatem quis ipsum maiores?
          Quasi veniam cupiditate vitae facere fuga amet corrupti est,
          consequuntur maxime, incidunt odit facilis vero ad non laboriosam
          quisquam ipsum molestias debitis, beatae quo. Consectetur explicabo
          dignissimos eum repellat vel
        </section>
      </div>
    </>
  );
}

export default App;
