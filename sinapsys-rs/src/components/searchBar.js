import React from "react";
import "./searchBar.css"; // Importar los estilos

const SearchBar = () => {
    return (
        <div className="search-bar">
           <div className="inputs-container"> 
            <input type="text" placeholder="Estoy en..." className="search-input" />
            <input type="text" placeholder="Voy para..." className="search-input" />
        </div>
            <button className="search-button">Buscar Ruta</button>
        </div>
    );
};

export default SearchBar;
