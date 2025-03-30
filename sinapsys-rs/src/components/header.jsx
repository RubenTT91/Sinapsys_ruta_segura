import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

import "./Header.css";

const Header = () => {

  const useNavigate = useNavigate();
  const HandleNavigation = () => {
    useNavigate("/enterprise");
  };
  return (
    <header>
      <img src="/sinapsys-logo.png" alt="Logo de Sinapsys" width="200" />
      <div className="search-bar">
        <div className="inputs-container">
          <input
            type="text"
            placeholder="Estoy en..."
            className="search-input"
          />
          <input
            type="text"
            placeholder="Voy para..."
            className="search-input"
          />
        </div>
        <button className="search-button">Buscar Ruta</button>
      </div>
      <button className="header-user-icon" onClick={HandleNavigation}><FaRegUserCircle /></button>
    </header>
  );
};

export default Header;
