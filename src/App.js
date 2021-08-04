import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import FormularioTareas from "./components/FormularioTareas";
import ListaTareas from "./components/ListaTareas";

const App = () => {
  //Obtener Tareas Guardadas de LocalStorage
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  //Mostrar Tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  //Guardando Tareas Guardadas en LocalStorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  //Obtener Condicion de Mostrar Tareas Completadas de LocalStorage
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }

  //Estado de Mostrar Completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
    configMostrarCompletadas
  );
  //Guardando Condicion de Mostrar Tareas Completadas en LocalStorage
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  console.log(tareas);
  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
