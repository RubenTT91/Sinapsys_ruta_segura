import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./Home.css";

const Home = () => {
  return (
    <div className="app-container">
      <div className="content">
        <Header />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
