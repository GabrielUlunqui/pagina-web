import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme.jsx";
import { LOGO, LOGO_DARK } from "../data/site.js";

const NAV_ITEMS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/soluciones", label: "Soluciones" },
  { to: "/contacto", label: "Contacto" },
];

const SERVICIOS_PATHS = ["/servicios", "/camaras", "/alarmas", "/accesos"];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".sis-navbar");
    if (!navbar) return;
    const onScroll = () =>
      navbar.classList.toggle("is-scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg sis-navbar sis-navbar-fused sticky-top"
        aria-label="Navegación principal"
      >
        <div className="container">
          <Link className="navbar-brand sis-brand" to="/">
            <img
              className="sis-logo-img"
              src={theme === "dark" ? LOGO_DARK : LOGO}
              alt="SIS Seguridad Electrónica"
              width="221"
              height="88"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mainNav"
            aria-expanded={navOpen}
            aria-label="Abrir menú"
            onClick={() => setNavOpen((o) => !o)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse${navOpen ? " show" : ""}`}
            id="mainNav"
          >
            <ul className="navbar-nav mx-lg-auto sis-nav mb-3 mb-lg-0">
              {NAV_ITEMS.map(({ to, label, end }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `nav-link${
                        isActive ||
                        (to === "/servicios" &&
                          SERVICIOS_PATHS.includes(pathname))
                          ? " active"
                          : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button
              className="theme-toggle"
              type="button"
              aria-label="Cambiar entre modo claro y oscuro"
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
            >
              <i
                className={theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars"}
                aria-hidden="true"
              ></i>
            </button>
            <Link className="btn btn-sis" to="/asesoramiento">
              Solicitar asesoramiento
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
