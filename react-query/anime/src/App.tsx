import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./utils/api";
import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async (): Promise<Todo[]> => {
      return await api.get("/todo").then((res) => res.data);
    },
  });
  const [newTodo, setNewTodo] = useState<string>("");
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    console.log(newTodo);
  };

  const addTodo = useMutation({
    mutationFn: async (data: Todo) => {
      return api.post("/todo", data).then((response) => response.data);
    },

    onSuccess: async (data: Todo) => {
      console.log(data);
      queryClient.setQueryData(["todos"], (currentData: Todo[]) => {
        return [...currentData, data];
      });
    },
  });

  return (
    <main className="bg-zinc-900 text-white min-h-screen w-full p-10 ">
      <h1 className="text-2xl font-semibold text-center pb-4">Todo List</h1>
      <hr />
      <div className="flex justify-center mt-4">
        <form className="flex flex-col  gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={(ev) => {
              setNewTodo(ev.target.value);
            }}
            className="px-2 py-1 bg-zinc-900 border  "
          />
          <button onClick={() => {}}>Enviar</button>
        </form>
      </div>
      <div className="w-full max-w-sm flex flex-col gap-4 pt-8 m-auto">
        {data?.map((todo) => (
          <div key={todo.id} className="flex gap-5">
            <span className="text-lg font-normal">
              {todo.id} - {todo.title}
            </span>
            <button
              onClick={() => {
                addTodo.mutate({
                  id: 1,
                  completed: true,
                  title: "henry",
                });
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
