import React, { useState } from "react";

const Tarea = (props) => {
  const [modoEdit, setModoEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const editar = () => {
    setModoEdit(true);
  };

  const manejarEdit = (event) => {
    setEditText(event.target.value);
  };

  const submitEdit = (event) => {
    event.preventDefault();
    props.editar(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };

  const borrarTarea = () => {
    props.borrar(props.id);
  };

  return (
    <div>
      {!modoEdit ? (
        <div className="tarea">
          <span> {props.tarea}</span>
          <div className="Editar">
            <span onClick={editar}>Editar</span>
          </div>

          <div className="Borrar">
            <span onClick={borrarTarea}>Borrar</span>
          </div>
        </div>
      ) : (
        <form className="formEdit" onSubmit={submitEdit}>
          <input
            value={editText}
            className="edit-input"
            onChange={manejarEdit}
          />
          <button className="guardar">Guardar</button>
        </form>
      )}
    </div>
  );
};

export default Tarea;
