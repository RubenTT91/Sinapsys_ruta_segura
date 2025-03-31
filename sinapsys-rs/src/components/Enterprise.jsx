import React from "react";
import NavBar from "./Main_Function";

const Enterprise = () => {
  return (
    <div>
      <header>
        <img src="/sinapsys-logo.png" alt="Logo de Sinapsys" width="200" />       
        <NavBar />
        <button className="header-user-icon">👤</button>
      </header>
    </div>
  );
};
