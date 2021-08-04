import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
  const toggleCompletada = (id) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      })
    );
  };

  const editarTarea = (id, nuevoTexto) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, texto: nuevoTexto };
        }
        return tarea;
      })
    );
  };

  const eliminarTarea = (id) => {
    cambiarTareas(
      tareas.filter((tarea) => {
        if (tarea.id !== id) {
          return tarea;
        }
        return;
      })
    );
  };

  return (
    <ul className="Lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if (mostrarCompletadas) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                eliminarTarea={eliminarTarea}
              />
            );
          } else if (!tarea.completada) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                eliminarTarea={eliminarTarea}
              />
            );
          }
          return;
        })
      ) : (
        <div className="lista-tareas__mensaje">- No hay tareas agregadas -</div>
      )}
    </ul>
  );
};

export default ListaTareas;
