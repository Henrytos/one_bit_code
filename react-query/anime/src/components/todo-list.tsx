import { getTodos } from "@/api/get-todos";
import { useQuery } from "@tanstack/react-query";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const {
    data: todos,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    retry: 1,
  });

  if (isError) return <h1>is error aplication</h1>;
  if (isLoading) return <h1>is Loading</h1>;

  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
