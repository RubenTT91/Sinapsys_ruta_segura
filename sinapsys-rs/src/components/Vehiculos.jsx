import React, { useState } from 'react';
import '../css/vehiculo.css';

const NuevoVehiculo = () => {
  const [formData, setFormData] = useState({
    placa: '',
    modelo: '',
    soat: '',
    tecnomecanica: '',
    empresa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del vehículo:', formData);
    // Aquí puedes hacer el POST a tu backend
  };

  return (
    <div className="form-container">
      <h2>Nuevo Vehículo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="placa"
          placeholder="placa"
          value={formData.placa}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="modelo"
          placeholder="modelo"
          value={formData.modelo}
          onChange={handleChange}
          required
        />

        <label htmlFor="soat">SOAT</label>
        <input
          type="date"
          name="soat"
          value={formData.soat}
          onChange={handleChange}
          required
        />

        <label htmlFor="tecnomecanica">Tecnomecánica</label>
        <input
          type="date"
          name="tecnomecanica"
          value={formData.tecnomecanica}
          onChange={handleChange}
          required
        />

        <select
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          required
        >
          <option value="">Empresa Vinculada</option>
          <option value="empresa1">Empresa 1</option>
          <option value="empresa2">Empresa 2</option>
          {/* Carga dinámica de empresas si lo necesitas */}
        </select>

        <div className="form-buttons">
          <button type="button" className="btn btn-secondary">Atrás</button>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default NuevoVehiculo;
