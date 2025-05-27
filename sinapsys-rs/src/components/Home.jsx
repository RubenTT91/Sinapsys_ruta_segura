import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import EmpresaForm from "./EmpresaForm.jsx";
import EmpresaList from "./EmpresaList.jsx";
import Vehiculo from "./Vehiculos.jsx";
import "../css//Home.css";

const Home = () => {
  return (
    <div className="app-container">
      <div className="content">
        <Header />
        <EmpresaList/>
        <EmpresaForm/>

        <Vehiculo/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
