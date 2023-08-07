const games = [
  {
    id: 1,
    coverImage:
      "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
    title: "Super Mario Bros",
    releaseYear: 1985,
    description: "A classic platformer game.",
  },
  {
    id: 2,
    coverImage:
      "https://cdn.mobygames.com/covers/4857336-the-legend-of-zelda-nes-front-cover.jpg",
    title: "The Legend of Zelda",
    releaseYear: 1986,
    description: "A top-down adventure game.",
  },
  {
    id: 3,
    coverImage:
      "https://www.hellandheavennet.com/files/final-fantasy/box-nes-us-1.jpg",
    title: "Final Fantasy",
    releaseYear: 1987,
    description: "A classic role-playing game.",
  },
  {
    id: 4,
    coverImage: "https://gamefaqs.gamespot.com/a/box/0/3/4/3034_front.jpg",
    title: "Doom",
    releaseYear: 1993,
    description: "A first-person shooter game.",
  },
  {
    id: 5,
    coverImage:
      "https://cdn.mobygames.com/covers/4056006-warcraft-orcs-humans-dos-front-cover.jpg",
    title: "Warcraft",
    releaseYear: 1994,
    description: "A real-time strategy game.",
  },
  {
    id: 6,
    coverImage:
      "https://cdn.mobygames.com/covers/5346152-starcraft-windows-front-cover.jpg",
    title: "Starcraft",
    releaseYear: 1998,
    description: "A military science fiction game.",
  },
  {
    id: 7,
    coverImage:
      "https://i.pinimg.com/originals/a0/d0/9c/a0d09c9cd3eb770f8f83e23744da72fc.jpg",
    title: "Half-Life",
    releaseYear: 1998,
    description: "A first-person shooter game.",
  },
  {
    id: 8,
    coverImage:
      "http://media.ign.com/games/image/object/002/002226/Gran-Turismo-1_PS1_US_BOX.jpg",
    title: "Gran Turismo",
    releaseYear: 1998,
    description: "A driving/racing simulator game.",
  },
  {
    id: 9,
    coverImage:
      "https://cdn.mobygames.com/covers/3966925-halo-combat-evolved-xbox-front-cover.jpg",
    title: "Halo",
    releaseYear: 2001,
    description: "A military science fiction shooter game.",
  },
  {
    id: 10,
    coverImage:
      "http://s.emuparadise.org/fup/up/150757-Kingdom_Hearts_(USA)-1.jpg",
    title: "Kingdom Hearts",
    releaseYear: 2002,
    description:
      "An action-based role-playing game with Disney and Final Fantasy characters.",
  },
];

export default function App() {
  return (
    <div className="app">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Meus Jogos
      </h1>
      <section
        style={{
          width: "100vw",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              margin: "2rem",
              width: "20rem",
              padding: "1rem 3rem",
              border: "2px solid white",
              cursor: "pointer",
            }}
          >
            <h3>{game.title}</h3>
            <img
              src={game.coverImage}
              alt={game.title}
              style={{
                width: "20rem",
                height: "30rem",
                objectFit: "cover",
              }}
            />
            <h4>Ano: {game.releaseYear}</h4>
            <p>Descrição: {game.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
