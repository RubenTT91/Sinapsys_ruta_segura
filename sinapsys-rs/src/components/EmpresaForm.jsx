import "../css/Empresas.css";
import { useState } from "react";

const EmpresaForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    nit: "",
    direccion: "",
    ciudad: "",
    departamento: "",
    representante: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="empresa-form-container">
  <h2>Nueva Empresa</h2>

  <input
    type="text"
    name="nombre"
    placeholder="Nombre"
    value={formData.nombre}
    onChange={handleChange}
  />

  <input
    type="text"
    name="nit"
    placeholder="NIT"
    value={formData.nit}
    onChange={handleChange}
  />

  <input
    type="text"
    name="direccion"
    placeholder="Dirección"
    value={formData.direccion}
    onChange={handleChange}
  />

  <div className="empresa-form-row">
    <input
      type="text"
      name="ciudad"
      placeholder="Ciudad"
      value={formData.ciudad}
      onChange={handleChange}
    />
    <input
      type="text"
      name="departamento"
      placeholder="Departamento"
      value={formData.departamento}
      onChange={handleChange}
    />
  </div>

  <select
    name="representante"
    value={formData.representante}
    onChange={handleChange}
  >
    <option value="">Estandar</option>
    <option value="">Premium</option>
    <option value="">Representante Legal</option>
    <option value="">Administrador</option>
    <option value="">Conductor</option>
    
  </select>

  <div className="empresa-form-buttons">
    <button type="button" onClick={onCancel}>Atrás</button>
    <button type="submit">Guardar</button>
  </div>
</form>

  );
};

export default EmpresaForm;
