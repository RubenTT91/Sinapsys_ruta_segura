import React from "react";

const Enterprise = () => {
  return (
    <div>
      <header>
        <img src="/sinapsys-logo.png" alt="Logo de Sinapsys" width="200" />
        <div className="navbar">
          <nav>
            <ul>
              <li>Inicio</li>
              <li>Sobre Nosotros</li>
              <li>Contacto</li>
            </ul>
          </nav>
          <button className="search-button">Buscar Ruta</button>
        </div>
        <button className="header-user-icon">👤</button>
      </header>
    </div>
  );
};
