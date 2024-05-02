import { Todo } from "../App";
import { api } from "../utils/api";

const addTodo = async (todo: Todo) => {
  const new_todo = await api.post<Todo>("/todo", todo).then((res) => res.data);
  return new_todo;
};

const updateTodo = async (id: number, data: Todo[]) => {
  const current_todo = data?.find((todo) => todo.id === id);
  const new_todo = await api
    .put<Todo>(`/todo/${id}`, {
      ...current_todo,
      completed: !current_todo?.completed,
    })
    .then((res) => res.data);
  return new_todo;
};

export { addTodo, updateTodo };
