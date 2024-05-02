import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../App";
import { api } from "../utils/api";
import { addTodo, updateTodo } from "../services/todo";

export const useTodo = () => {
  const queryClient = useQueryClient();

  const mutationCreate = useMutation({
    mutationFn: addTodo,
    onSuccess: (data) => {
      queryClient.setQueryData(["todos"], (prev: Todo[]) => {
        return [...prev, data];
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/todo/${id}`);
      return id;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["todos"], (prev: Todo[]) => {
        return prev.filter((todo) => todo.id !== data);
      });
    },
  });

  const mutationUpdate = useMutation({
    mutationFn: async (id: number) => {
      const data = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      return updateTodo(id, data);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["todos"], (prev: Todo[]) => {
        return prev?.map((todo) => (todo.id == data.id ? data : todo));
      });
    },
  });

  return { mutationCreate, mutationDelete, mutationUpdate };
};
