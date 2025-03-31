import React from "react";
import NavBar from "./Main_Function";

const Enterprise = () => {
  return (
    <div>
      <header>
        <img src="/sinapsys-logo.png" alt="Logo de Sinapsys" width="200" />       
        <NavBar />
        <button type="button" class="btn-close" disabled aria-label="Close"></button>
      </header>
    </div>
  );
};
