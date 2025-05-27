import React from "react";
import "../css/EmpresasList.css";

const empresas = [
  {
    nombre: "FutureTech Solutions",
    nit: "9876543",
    representante: "Andrés López",
    idRepresentante: "1122334455",
    direccion: "Calle 45 #12-34",
    telefono: "310 5678901",
  },
  {
    nombre: "Quantum Innovations",
    nit: "1239874",
    representante: "Mariana Gómez",
    idRepresentante: "5566778899",
    direccion: "Avenida Siempre Viva 742",
    telefono: "315 6789012",
  },
  // Agrega más empresas aquí...
];

const ListaEmpresas = () => {
  return (
  <div className="lista-empresas-container">
  <div class="barra-superior-tabla">
  <button class="btn-agregar-empresa">+ Nueva Empresa</button>
  </div>
    <table className="tabla-empresas">
      <thead>
        <tr>
          <th>Nombre Empresa</th>
          <th>NIT</th>
          <th>Representante Legal</th>
          <th>ID Rep. Legal</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {empresas.map((empresa, index) => (
          <tr key={index}>
            <td>{empresa.nombre}</td>
            <td>{empresa.nit}</td>
            <td>{empresa.representante}</td>
            <td>{empresa.idRepresentante}</td>
            <td>{empresa.direccion}</td>
            <td>{empresa.telefono}</td>
            <td>
              <button class="boton-accion">Editar</button>
              <button class="boton-accion boton-eliminar">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
  );
};

export default ListaEmpresas;
