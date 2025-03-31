import React from "react";
import "./FromTo.css";

const FromTo = () => {
  return (
    <div className="inputs-container">
      <div class="input-group">
        <span class="input-group-text">Estoy en...</span>
        <input type="text" aria-label="First name" class="form-control"></input>
        <span class="input-group-text">Voy a...</span>
        <input type="text" aria-label="Last name" class="form-control"></input>
      </div>

      <button type="button" class="btn btn-primary">
        Buscar
      </button>
    </div>
  );
};

export default FromTo;
