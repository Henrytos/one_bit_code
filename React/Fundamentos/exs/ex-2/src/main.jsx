import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";
import Button from "./components/button/index.jsx";
import posterBCS from "./assets/posterBCS.jpeg";
import posterJK0 from "./assets/posterJK0.jpg";
import posterKNY from "./assets/posterKNY.jpg";
import posterSW from "./assets/star-wars.jpg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Card title="Black Clover" imgPoster={posterBCS} />
    <Card title="Jujutsu Kaisen 0" imgPoster={posterJK0} />
    <Card title="Star Wars" imgPoster={posterSW} />
    <Card title="Kimetsu no yaiba" imgPoster={posterKNY} />
  </React.StrictMode>
);
