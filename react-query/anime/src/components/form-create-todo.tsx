import { createTodo } from "@/api/create-todo";
import { Todo } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  title: z.string().nonempty(),
});

type FormSchema = z.infer<typeof schema>;

export function FormCreateTodo() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      title: "",
    },
  });

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

  const handleCreateTodoSubmit = (data: FormSchema) => {
    createTodofn({
      id: Math.ceil(Math.random() * 1000).toString(),
      title: data.title,
      completed: false,
    });
    reset({
      title: "",
    });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleCreateTodoSubmit)}
    >
      <input
        type="text"
        className="bg-neutral-900 text-neutral-100 p-2 rounded-md border"
        {...register("title", { required: true })}
      />
      {errors.title && (
        <span className="text-red-500">This field is required</span>
      )}

      <button
        type="submit"
        className="border py-2 rounded hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
      >
        add todo
      </button>
    </form>
  );
}
