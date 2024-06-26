import { Todo } from "../types/todo";
import { api } from "../utils/api";

export const getTodos = async () => {
  return await api.get<Todo[]>("/todo").then((res) => res.data);
};
