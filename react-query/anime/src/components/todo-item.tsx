import { deleteTodo } from "@/api/delete-todo";
import { updateTodo } from "@/api/update-todo";
import { Todo } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface TodoItemProps {
  todo: Todo;
}
export function TodoItem({ todo }: TodoItemProps) {
  const queryClient = useQueryClient();

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

  const handleTogleTodoClick = (todo: Todo) => {
    updateTodofn(todo);
  };

  const handleDeleteTodoClick = (id: string) => {
    deleteTodofn(id);
  };

  return (
    <li
      key={todo.id}
      className={`
              ${todo.completed ? "line-through" : ""}
              `}
      onClick={() => handleTogleTodoClick(todo)}
    >
      {todo.title}
      <button onClick={() => handleDeleteTodoClick(todo.id ?? "1")}>x</button>
    </li>
  );
}
