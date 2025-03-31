import React from "react";
const NavBar= ()=> {
return(
    <div>
        <div className="nav-bar">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Empresa
            </a>
          </li>          
          <li class="nav-item">
            <a class="nav-link" href="#">
              Usuarios
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Vehículos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Rutas
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Asignar Ruta
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Calibrar
            </a>
          </li>
        </ul>
      </div>
    </div>
)
}

export default NavBar;