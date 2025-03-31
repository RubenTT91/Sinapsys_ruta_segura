import React, {useState} from "react";
import FromTo from "./FromTo";
import NavBar from "./Main_Function"; 
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

import "./Header.css";

const Header = () => {

  
  const navigate = useNavigate();
  const HandleNavigation = () => {
    navigate("/enterprise");
  };

  const [mainCompoentActive, setMainComponentActive] = useState(<FromTo />);

  return (
    <header>
      <img src="/sinapsys-logo.png" alt="Logo de Sinapsys" width="200" />
      <div>{mainCompoentActive}</div>
      <button className="header-user-icon" onClick={HandleNavigation}>
        <FaRegUserCircle />
      </button>
    </header>
  );
};

export default Header;
