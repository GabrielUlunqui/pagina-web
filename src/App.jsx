import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import { PAGE_META } from "./data/site.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFab from "./components/WhatsAppFab.jsx";
import HomePage from "./pages/HomePage.jsx";
import NosotrosPage from "./pages/NosotrosPage.jsx";
import ServiciosPage from "./pages/ServiciosPage.jsx";
import SolucionesPage from "./pages/SolucionesPage.jsx";
import ContactoPage from "./pages/ContactoPage.jsx";
import AsesoramientoPage from "./pages/AsesoramientoPage.jsx";
import TrabajosPage from "./pages/TrabajosPage.jsx";
import CamarasPage from "./pages/CamarasPage.jsx";
import AlarmasPage from "./pages/AlarmasPage.jsx";
import AccesosPage from "./pages/AccesosPage.jsx";

function PageEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] || PAGE_META["/"];
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);

    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }

    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/soluciones" element={<SolucionesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/asesoramiento" element={<AsesoramientoPage />} />
          <Route path="/trabajos" element={<TrabajosPage />} />
          <Route path="/camaras" element={<CamarasPage />} />
          <Route path="/alarmas" element={<AlarmasPage />} />
          <Route path="/accesos" element={<AccesosPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
      <PageEffects />
    </ThemeProvider>
  );
}
