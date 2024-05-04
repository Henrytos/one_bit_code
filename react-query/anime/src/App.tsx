import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createTodo } from "./api/create-todo";
import { updateTodo } from "./api/update-todo";
import { getTodos } from "./api/get-todos";
import { deleteTodo } from "./api/delete-todo";

// Create a client

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todo, setTodo] = useState<string>("");

  const { data, isError, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    retry: 1,
  });

  const queryClient = useQueryClient();

  const { mutateAsync: createTodofn } = useMutation({
    mutationFn: createTodo,
    onSuccess: (_, variables) => {
      const cached = queryClient.getQueryData<Todo[]>(["todos"]);
      if (cached) {
        queryClient.setQueryData(["todos"], () => {
          return [...cached, variables];
        });
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutateAsync: deleteTodofn } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (_, variables) => {
      const cached = queryClient.getQueryData<Todo[]>(["todos"]);
      if (cached) {
        queryClient.setQueryData(["todos"], () => {
          return cached.filter((todo) => Number(todo.id) !== Number(variables));
        });
      }
    },
  });

  const { mutateAsync: updateTodofn } = useMutation({
    mutationFn: updateTodo,
    onSuccess: (_, variables) => {
      const todoId = variables.id;
      const cached = queryClient.getQueryData<Todo[]>(["todos"]);
      if (cached) {
        queryClient.setQueryData(["todos"], () => {
          return cached.map((todo) => {
            if (todo.id === todoId) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          });
        });
      }
    },
  });

  if (isError) return <h1>is error aplication</h1>;
  if (isLoading) return <h1>is Loading</h1>;

  const handleAddTodoClick = () => {
    createTodofn({
      id: Math.ceil(Math.random() * 1000).toString(),
      title: todo,
      completed: false,
    });
  };

  const handleTogleTodoClick = (todo: Todo) => {
    updateTodofn(todo);
  };

  const handleDeleteTodoClick = (id: string) => {
    deleteTodofn(id);
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
                onClick={() => handleTogleTodoClick(todo)}
              >
                {i + 1}- {todo.title} --------{todo.id}
                <button onClick={() => handleDeleteTodoClick(todo.id ?? "1")}>
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
