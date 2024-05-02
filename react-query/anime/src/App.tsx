import { useQuery } from "@tanstack/react-query";
import { api } from "./utils/api";
import { useState } from "react";
import { useTodo } from "./hooks/useTodo";

// Create a client

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getTodos = async () => {
  const todos = await api.get<Todo[]>("/todo").then((res) => res.data);
  return todos;
};

export default function App() {
  const [todo, setTodo] = useState<string>("");

  const { data, isError, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    retry: 1,
  });

  const { mutationCreate, mutationDelete, mutationUpdate } = useTodo();
  if (isError) return <h1>is error aplication</h1>;
  if (isLoading) return <h1>is Loading</h1>;

  const handleAddTodoClick = () => {
    mutationCreate.mutate({
      id: Math.random(),
      title: todo,
      completed: false,
    });
    setTodo("");
  };

  const handleCompleteTodoClick = (id: number) => {
    mutationUpdate.mutate(id);
  };

  const handleDeleteTodoClick = (id: number) => {
    mutationDelete.mutate(id);
  };

  return (
    <>
      <main>
        <h1>todo list</h1>
        <div>
          <ul>
            {data?.map((todo, i) => (
              <li
                key={todo.id}
                className={`
              ${todo.completed ? "line-through" : ""}
              `}
                onClick={() => handleCompleteTodoClick(todo.id)}
              >
                {i + 1}- {todo.title}
                <button onClick={() => handleDeleteTodoClick(todo.id)}>
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={todo}
            onChange={(ev) => {
              setTodo(ev.target.value);
            }}
            className="border text-black"
          />

          <button onClick={handleAddTodoClick}>add todo</button>
        </div>
      </main>
    </>
  );
}
