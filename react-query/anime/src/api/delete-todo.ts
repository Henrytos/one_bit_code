import { api } from "../utils/api";

export const deleteTodo = async (id: string) => {
  await api.delete(`/todo/${id}`);
};
