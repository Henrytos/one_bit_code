import Game from "./components/Game";
import Form from "./components/Form";
import useGameColletion from "./hooks/useGameColletion";

export default function App() {
  const { games, addGame, removeGame } = useGameColletion();

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <Form addGame={addGame} />
      <div className="games">
        {games.map((game) => (
          <Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />
        ))}
      </div>
    </div>
  );
}
