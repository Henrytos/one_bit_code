import { Todo } from "../App";
import { api } from "../utils/api";

export const getOneTodo = async (id: number) => {
  const data = await api.get<Todo>(`/todo/${id}`);
  const todo = data.data;
  console.log(todo);
  return todo;
};
