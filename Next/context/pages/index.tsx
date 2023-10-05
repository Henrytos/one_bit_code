import { useContext } from "react";
import { AuthContext, AuthProvider } from "./Contexts/auth";

export default function Home() {
  const { user, setUser } = useContext<string | any>(AuthContext);

  return (
    <AuthProvider>
      <main className="bg-zinc-100 text-zinc-950 h-screen grid place-content-center">
        <section>
          <h1 className="text-3xl">context</h1>
          <div>
            <p>{user}</p>
            <p>{user}</p>
          </div>
        </section>
      </main>
    </AuthProvider>
  );
}
