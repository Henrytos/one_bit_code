import UserContext from "./context/UserContext";
import InfoUser from "./components/InfoUser";
import Container from "./components/Container";
import Header from "./components/Header";

// Componente pai que provê o contexto
const App = () => {
  const user = {
    name: "João",
    email: "joao@example.com",
  };

  return (
    <UserContext.Provider value={user}>
      <Header />
      <h1>Aplicação</h1>

      <Container>
        <InfoUser></InfoUser>
      </Container>
    </UserContext.Provider>
  );
};

export default App;
