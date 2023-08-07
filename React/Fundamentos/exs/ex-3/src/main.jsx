import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./Profile.jsx";
import imgHenry from "./assets/henry.jpeg";
import imgFelipe from "./assets/felipe.jpeg";
import imgLevi from "./assets/levi.jpeg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profile
      avatar={imgHenry}
      name="Henry"
      bio="tenho 16 anos e tenho sonho de me torna um desenvolvedor Front-end"
      email="franzhenry46@gmail.com"
      phone="11 96760-3378"
      githubUrl="https://github.com/Henrytos"
      linkedinUrl="https://www.linkedin.com/in/henry-franz-617841245/"
      twitterUrl=""
    />
    <Profile
      avatar={imgFelipe}
      name="Felipe Rocha"
      bio="tenho 16 anos e tenho sonho de me torna um desenvolvedor Front-end"
      email="franzhenry46@gmail.com"
      phone="11 96760-3378"
      githubUrl="https://github.com/Henrytos"
      linkedinUrl="https://www.linkedin.com/in/henry-franz-617841245/"
      twitterUrl=""
    />
    <Profile
      avatar={imgLevi}
      name="Levi"
      bio="tenho 16 anos e tenho sonho de me torna um desenvolvedor Front-end"
      email="franzhenry46@gmail.com"
      phone="11 96760-3378"
      githubUrl="https://github.com/Henrytos"
      linkedinUrl="https://www.linkedin.com/in/henry-franz-617841245/"
      twitterUrl=""
    />
  </React.StrictMode>
);
