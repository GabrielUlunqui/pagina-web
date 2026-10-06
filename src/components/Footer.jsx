import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme.jsx";
import { LOGO, LOGO_DARK, PHONE, EMAIL } from "../data/site.js";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="sis-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <Link
              className="sis-brand text-white mb-3 d-inline-flex"
              to="/"
            >
              <img
                className="sis-logo-img"
                src={theme === "dark" ? LOGO_DARK : LOGO}
                alt="SIS Seguridad Electrónica"
                width="221"
                height="88"
              />
            </Link>
            <p>
              Soluciones de seguridad electrónica para hogares, comercios e
              industrias en Salta.
            </p>
            <div className="social-links" aria-label="Redes sociales">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <h2 className="footer-title">SERVICIOS</h2>
            <ul>
              <li>
                <Link to="/camaras">Cámaras de Seguridad</Link>
              </li>
              <li>
                <Link to="/alarmas">Alarmas Inteligentes</Link>
              </li>
              <li>
                <Link to="/accesos">Control de Accesos</Link>
              </li>
              <li>
                <Link to="/servicios#cercos">Cercos Eléctricos</Link>
              </li>
              <li>
                <Link to="/servicios#gps">Seguimiento Vehicular</Link>
              </li>
              <li>
                <Link to="/servicios#incendios">
                  Sistemas contra Incendios
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h2 className="footer-title">EMPRESA</h2>
            <ul>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/trabajos">Nuestros trabajos</Link>
              </li>
              <li>
                <Link to="/soluciones">Soluciones</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h2 className="footer-title">CONTACTO</h2>
            <ul>
              <li>
                <i
                  className="bi bi-telephone text-sis me-2"
                  aria-hidden="true"
                ></i>
                {PHONE}
              </li>
              <li>
                <i
                  className="bi bi-envelope text-sis me-2"
                  aria-hidden="true"
                ></i>
                {EMAIL}
              </li>
              <li>
                <i
                  className="bi bi-geo-alt text-sis me-2"
                  aria-hidden="true"
                ></i>
                Salta, Argentina
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center text-md-start">
          © 2026 SIS Seguridad Electrónica. Todos los derechos reservados.
          Salta, Argentina.
        </div>
      </div>
    </footer>
  );
}
