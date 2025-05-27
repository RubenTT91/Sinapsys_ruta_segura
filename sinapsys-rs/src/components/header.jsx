import React, { useState } from "react";
import FromTo from "./FromTo";
import NavBar from "./Main_Function";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";


import "../css/Header.css";

const Header = () => {
  const [mainComponentActive, setMainComponentActive] = useState(<FromTo />);
  const navigate = useNavigate();
  const HandleNavigation = () => {
    navigate("/enterprise");
  };

  function setNavBar() {
    setMainComponentActive(<NavBar />);
  }
  function setFromTo() {
    setMainComponentActive(<FromTo />);
  }

  return (
    <header>
      <img src="/sinapsys-logo.png" alt="Logo de Sinapsys" width="200" />
      <div className="main-component">{mainComponentActive}</div>
     
      <button
        className="header-user-icon"
        onClick={() => {
          HandleNavigation();
          setNavBar();
        }}
      >
        <FaRegUserCircle />
      </button>
      
      <button
        className="header-user-icon"
        onClick={() => {setFromTo();}}      >
      <IoMdCloseCircleOutline />
      </button>
    </header>
  );
};

export default Header;
