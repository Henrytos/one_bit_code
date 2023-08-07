import { useState } from "react";
import formatDate from "./components/formatDate";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

function App() {
  const [email, setEmail] = useState("");
  const [menssagem, setMenssagem] = useState("");
  const [menssagens, setMenssagens] = useState(() => {
    const storedPost = localStorage.getItem("obc-posts-lib");
    if (!storedPost) return [];
    return JSON.parse(storedPost);
  });

  function addPost({ email, menssagem }) {
    const date = formatDate(new Date());
    const newPost = { email, date, menssagem };
    console.log(newPost);
    setMenssagens((state) => {
      const posts = [newPost, ...state];
      localStorage.setItem("obc-posts-lib", JSON.stringify(posts));
      return posts;
    });
  }

  const showPost = (ev) => {
    ev.preventDefault();
    addPost({ email, menssagem });
    setMenssagem("");
    setEmail("");
  };
  return (
    <div id="App">
      <h2>Seção de comentarios</h2>
      <form onSubmit={showPost}>
        <Input setValue={setEmail} value={email} type="email" />
        <TextArea setValue={setMenssagem} value={menssagem} />
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      <hr />
      <div>
        {menssagens.length > 0
          ? menssagens.map((post) => (
              <div key={post.date} className="post">
                <h3 style={{ color: "#aaaa60" }}>{post.email}</h3>
                <p>Em {post.date}</p>
                <p>
                  <span className="mensagen">Menssagem:</span> {post.menssagem}
                </p>
              </div>
            ))
          : "Seja o primeiro a Comentar!"}
      </div>
    </div>
  );
}

export default App;
