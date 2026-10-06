import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import CheckList from "../components/CheckList.jsx";
import CtaBar from "../components/CtaBar.jsx";

const SOLUTIONS = [
  {
    img: "/imagen/casa.webp",
    alt: "Casa con sistema de seguridad",
    icon: "bi-house-door",
    title: "Residencial",
    text: "Protección para hogares y countries con monitoreo desde el celular.",
    checklist: [
      "Cámaras interior/exterior",
      "Alarma con sensores",
      "App de visualización",
    ],
    cta: "Cotizar residencial",
  },
  {
    img: "/imagen/comercio.webp",
    alt: "Local comercial con cámaras",
    icon: "bi-shop",
    title: "Comercial",
    text: "Soluciones para locales, oficinas y edificios con control de ingresos.",
    checklist: [
      "CCTV multipunto",
      "Control de accesos",
      "Grabación continua",
    ],
    cta: "Cotizar comercial",
  },
  {
    img: "/imagen/industria.webp",
    alt: "Depósito industrial",
    imgPosition: "center 68%",
    icon: "bi-buildings",
    title: "Industrial",
    text: "Perímetros, flotas y detección para plantas, depósitos y logística.",
    checklist: [
      "Cercos eléctricos",
      "GPS de flota",
      "Sistemas contra incendios",
    ],
    cta: "Cotizar industrial",
  },
];

const STEPS = [
  { title: "Relevamiento", text: "Visita técnica sin cargo." },
  { title: "Propuesta", text: "Presupuesto claro y escalable." },
  { title: "Instalación", text: "Montaje y puesta en marcha." },
  { title: "Soporte", text: "Mantenimiento y asistencia." },
];

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        title="Soluciones a medida"
        subtitle="Armamos paquetes de seguridad según el tipo de propiedad, riesgo y presupuesto."
      />

      <section className="section-pad">
        <div className="container">
          <div className="row g-4">
            {SOLUTIONS.map((sol, i) => (
              <div
                className={`col-lg-4 reveal${i > 0 ? ` d${i}` : ""}`}
                key={sol.title}
              >
                <article className="solution-card">
                  <img
                    className="solution-media"
                    src={sol.img}
                    alt={sol.alt}
                    width="600"
                    height="200"
                    style={
                      sol.imgPosition
                        ? { objectPosition: sol.imgPosition }
                        : undefined
                    }
                  />
                  <div className="solution-body">
                    <div className="icon-box" aria-hidden="true">
                      <i className={`bi ${sol.icon}`}></i>
                    </div>
                    <h2 className="h4 fw-bold">{sol.title}</h2>
                    <p className="lead-muted">{sol.text}</p>
                    <CheckList items={sol.checklist} />
                    <Link className="btn btn-sis" to="/asesoramiento">
                      {sol.cta}
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
          <div className="row align-items-center g-4">
            <div className="col-lg-6 reveal">
              <span className="eyebrow">Cómo elegimos tu pack</span>
              <h2 className="display-heading h1 mb-3">
                Diseño según riesgo real
              </h2>
              <p className="lead-muted mb-0">
                Evaluamos accesos, iluminación, valor de activos y hábitos de
                uso para proponer una solución eficiente, sin sobredimensionar
                ni dejar puntos ciegos.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {STEPS.map((step, i) => (
                  <div
                    className={`col-sm-6 reveal${i > 0 ? ` d${i}` : ""}`}
                    key={step.title}
                  >
                    <article className="value-card">
                      <h3 className="h5 fw-bold">{step.title}</h3>
                      <p className="lead-muted mb-0">{step.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBar
        title="¿No sabés qué solución necesitás?"
        subtitle="Te orientamos sin compromiso."
      />
    </>
  );
}
