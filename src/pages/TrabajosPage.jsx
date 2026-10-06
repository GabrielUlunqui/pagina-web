import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import CtaBar from "../components/CtaBar.jsx";

const PROJECTS = [
  {
    img: "/imagen/casa.webp",
    alt: "Residencia con sistema de seguridad",
    title: "Seguridad Residencial Tres Cerritos",
    text: "CCTV 4K, alarma perimetral y app de monitoreo para una vivienda familiar.",
  },
  {
    img: "/imagen/comercio.webp",
    alt: "Local comercial",
    title: "Monitoreo Comercial Centro",
    text: "Cámaras IP, DVR y alertas móviles para un local de alto tránsito.",
  },
  {
    img: "/imagen/cerco-barrio.webp",
    alt: "Cerco eléctrico perimetral",
    title: "Cerco Perimetral Industrial",
    text: "Cerco electrificado con integración a central de alarma y señalización.",
  },
  {
    img: "/imagen/acceso.webp",
    alt: "Oficina moderna",
    title: "Control de Accesos Corporativo",
    text: "Biometría, tarjetas RFID y reportes de ingreso para oficinas.",
  },
  {
    img: "/imagen/fuego.webp",
    alt: "Depósito industrial",
    title: "Detección contra Incendios",
    text: "Detectores, estaciones manuales y sirenas en depósito logístico.",
  },
  {
    img: "/imagen/flota.webp",
    alt: "Flota de vehículos",
    title: "Monitoreo de Flota",
    text: "GPS en tiempo real, geocercas e historial para 18 vehículos.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Excelente asesoramiento e instalación impecable. Ahora veo las cámaras desde el celular.",
    name: "Carlos Mendoza",
    detail: "Local Comercial Salta",
  },
  {
    quote:
      "El equipo fue claro con el presupuesto y cumplió los plazos. Muy recomendables.",
    name: "Laura Ríos",
    detail: "Residencia Tres Cerritos",
  },
  {
    quote:
      "Nos resolvieron el control de accesos de la oficina y el soporte sigue impecable.",
    name: "Martín Acosta",
    detail: "Empresa de servicios",
  },
];

export default function TrabajosPage() {
  return (
    <>
      <PageHero
        title="Nuestros Trabajos"
        subtitle="Casos reales y proyectos de seguridad que respaldan nuestro servicio."
      />

      <section className="section-pad">
        <div className="container">
          <div className="row g-4">
            {PROJECTS.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <article className="project-card">
                  <img
                    src={project.img}
                    alt={project.alt}
                    width="600"
                    height="190"
                  />
                  <div className="card-body">
                    <p className="location-badge">
                      <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>{" "}
                      Salta, Argentina
                    </p>
                    <h2 className="h5 fw-bold">{project.title}</h2>
                    <p className="lead-muted">{project.text}</p>
                    <Link to="/contacto" className="text-sis fw-bold">
                      Ver detalles del proyecto{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">Testimonios reales</span>
            <h2 className="display-heading h1">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="row g-3">
            {TESTIMONIALS.map((t) => (
              <div className="col-md-4" key={t.name}>
                <article className="testimonial-card">
                  <div className="stars" aria-label="5 de 5 estrellas">
                    ★★★★★
                  </div>
                  <p className="lead-muted">“{t.quote}”</p>
                  <strong>{t.name}</strong>
                  <div className="lead-muted">{t.detail}</div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBar
        featured
        title="Protegé lo que más importa"
        subtitle="Estamos listos para asesorarte las 24 horas del día."
        whatsappLabel="O escribinos por WhatsApp"
      />
    </>
  );
}
