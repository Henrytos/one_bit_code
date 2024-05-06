import { TodoList } from "./components/todo-list";
import { FormCreateTodo } from "./components/form-create-todo";

// Create a client

export default function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-neutral-900 text-neutral-100 antialiased font-light">
        <div className="space-y-6 w-full max-w-md m-auto">
          <h1 className="text-2xl font-semibold">todo list</h1>
          <TodoList />
          <FormCreateTodo />
        </div>
      </main>
    </>
  );
}
