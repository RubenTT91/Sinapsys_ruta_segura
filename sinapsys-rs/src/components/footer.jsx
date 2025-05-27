import { CiLinkedin } from "react-icons/ci";
import {FaGithub } from "react-icons/fa";

import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>Sinapsys - Ruta Segura</h2>
        <p className="slogan">Tu ruta a tu tiempo, a tu tiempo.</p>

        <div className="footer-links">
          <a href="#">Sobre Nosotros</a>
          <a href="#">Contacto</a>
          <a href="#">Términos y Condiciones</a>
        </div>

        <div className="footer-social icons">
          <a href="#"><CiLinkedin /></a> 
          <a href="#"><FaGithub/>  </a>           
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Sinapsys. Todos los derechos reservados..
        </p>
      </div>
    </footer>
  );
};

export default Footer;