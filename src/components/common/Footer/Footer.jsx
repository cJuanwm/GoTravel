import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="content-name">
        <h3>GestorApp</h3>
      </div>
      <div className="footer-container">
        <div class="footer-section">
          <h3>Acerca de</h3>
          <ul>
            <li>
              <a href="#">Quienes Somos</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Como Funciona</a>
            </li>
            <li>
              <a href="#">Política de Privacidad</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Soporte</h3>
          <ul>
            <li>
              <a href="#">Centro de ayuda</a>
            </li>
            <li>
              <a href="#">Políticas de reembolso</a>
            </li>
            <li>
              <a href="#">Reportar un problema</a>
            </li>
            <li>
              <a href="#">Contáctanos</a>
            </li>
          </ul>
        </div>
        <div className="footer-section socialMedia">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Todos los derechos reservados. 2025 GestorApp ©</p>
      </div>
    </footer>
  );
}
