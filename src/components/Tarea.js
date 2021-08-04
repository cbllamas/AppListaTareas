import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaCheckSquare, FaEdit, FaSquare, FaTimes } from "react-icons/fa";

const Tarea = ({ tarea, toggleCompletada, editarTarea, eliminarTarea }) => {
  const [editandoTarea, cambiarEditandoTarea] = useState(false);
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id, nuevaTarea);
    cambiarEditandoTarea(false);
  };

  return (
    <li key={tarea.id} className="lista-tareas__tarea">
      {tarea.completada === true ? (
        <FaCheckSquare
          className="lista-tareas__icono lista-tareas__icono-check"
          onClick={() => toggleCompletada(tarea.id)}
        />
      ) : (
        <FaSquare
          className="lista-tareas__icono lista-tareas__icono-check"
          onClick={() => toggleCompletada(tarea.id)}
        />
      )}
      <div className="lista-tareas__texto">
        {editandoTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(e) => cambiarNuevaTarea(e.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FaEdit
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => {
            cambiarEditandoTarea(!editandoTarea);
          }}
        />
        <FaTimes
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => eliminarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Tarea;
