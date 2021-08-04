import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/all";

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  const toggleCompletadas = () => {
    console.log(mostrarCompletadas);
    cambiarMostrarCompletadas(!mostrarCompletadas);
    console.log(mostrarCompletadas);
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__titulo">Lista de Tareas</h1>
        {mostrarCompletadas ? (
          <button className="header__boton" onClick={() => toggleCompletadas()}>
            No mostrar completados
            <FaEyeSlash className="header__icono-boton" />
          </button>
        ) : (
          <button className="header__boton" onClick={() => toggleCompletadas()}>
            Mostrar completados
            <FaEye className="header__icono-boton" />
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
