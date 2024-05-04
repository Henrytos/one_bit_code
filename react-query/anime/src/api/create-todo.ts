import { Todo } from "../types/todo";
import { api } from "../utils/api";

export const createTodo = async ({ id, title }: Todo) => {
  await api.post<Todo>("/todo", {
    id,
    title,
    completed: false,
  });
};
