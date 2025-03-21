import React from "react";

import "./header.css";

const Header = () => {
  return (
    <header>
      <img src="/sinapsys-logo.png" alt="Logo de Sinapsys" width="200" />
      <button className="header-user-icon">👤</button>
    </header>
  );
};

export default Header;
