import { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>("nathalia");

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
