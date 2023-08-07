import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Container1 from "./container1.jsx";
import Container2 from "./container2.jsx";
import Container3 from "./container3.jsx";
import List from "./list.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Container1 />
    <Container2 />
    <Container3 />
    <List />
  </React.StrictMode>
);
