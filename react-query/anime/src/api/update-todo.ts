import { Todo } from "../types/todo";
import { api } from "../utils/api";

export const updateTodo = async (todo: Todo) => {
  await api
    .put(`/todo/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    })
    .then((res) => res.data);
};
