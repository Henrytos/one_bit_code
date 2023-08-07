import { useState } from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";

Form.propTypes = {
  addGame: PropTypes.func,
};

export default function Form({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText label="Titulo:" value={title} setValue={setTitle} />
      <InputText label="Capa:" value={cover} setValue={setCover} />

      <button>Adicionar</button>
    </form>
  );
}
