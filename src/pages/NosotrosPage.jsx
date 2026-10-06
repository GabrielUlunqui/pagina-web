import PageHero from "../components/PageHero.jsx";
import CtaBar from "../components/CtaBar.jsx";

const MISSION_CARDS = [
  {
    icon: "bi-shield",
    title: "Nuestra Misión",
    text: "Brindar soluciones de seguridad electrónica accesibles, confiables y adaptadas a cada entorno, elevando la tranquilidad de nuestros clientes en toda la provincia.",
  },
  {
    icon: "bi-eye",
    title: "Nuestra Visión",
    text: "Ser la empresa de referencia en Salta por calidad de instalación, innovación tecnológica y un servicio postventa cercano y resolutivo.",
  },
];

const VALUES = [
  {
    icon: "bi-heart",
    title: "Compromiso",
    text: "Cumplimos lo prometido en cada etapa del proyecto.",
  },
  {
    icon: "bi-lightbulb",
    title: "Innovación",
    text: "Incorporamos tecnología útil y fácil de usar.",
  },
  {
    icon: "bi-patch-check",
    title: "Confianza",
    text: "Transparencia en presupuestos, plazos y soporte.",
  },
  {
    icon: "bi-star",
    title: "Excelencia",
    text: "Detalle técnico y calidad en cada instalación.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Sobre SIS Seguridad Electrónica"
        subtitle="Líderes en seguridad electrónica en la provincia de Salta, protegiendo hogares, comercios e industrias con excelencia."
      />

      <section className="section-pad">
        <div className="container">
          <div className="row align-items-center g-4 g-xl-5">
            <div className="col-lg-6">
              <span className="eyebrow">Nuestra trayectoria</span>
              <h2 className="display-heading h1 mb-3">
                Llevamos tranquilidad con soluciones de seguridad a medida
              </h2>
              <p className="lead-muted">
                Nacimos en Salta con el objetivo de acercar tecnología de
                seguridad confiable a familias y empresas. Hoy acompañamos
                proyectos residenciales, comerciales e industriales con
                instalación profesional y soporte local.
              </p>
              <p className="lead-muted mb-0">
                Nuestro equipo combina experiencia técnica, asesoramiento claro
                y un compromiso real con la protección de lo que más importa
                para cada cliente.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="rounded-4 w-100"
                src="/imagen/servicio.webp"
                alt="Equipo técnico de seguridad trabajando en laboratorio"
                width="800"
                height="560"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container">
          <div className="row g-3">
            {MISSION_CARDS.map((card, i) => (
              <div
                className={`col-md-6 reveal${i > 0 ? ` d${i}` : ""}`}
                key={card.title}
              >
                <article className="mission-card">
                  <div className="icon-box" aria-hidden="true">
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <h2 className="h4 fw-bold">{card.title}</h2>
                  <p className="lead-muted mb-0">{card.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">Lo que nos define</span>
            <h2 className="display-heading h1">
              Nuestros Valores Fundamentales
            </h2>
          </div>
          <div className="row g-3">
            {VALUES.map((value, i) => (
              <div
                className={`col-md-6 col-lg-3 reveal${i > 0 ? ` d${i}` : ""}`}
                key={value.title}
              >
                <article className="value-item text-center">
                  <div className="icon-circle mx-auto" aria-hidden="true">
                    <i className={`bi ${value.icon}`}></i>
                  </div>
                  <h3 className="h5 fw-bold">{value.title}</h3>
                  <p className="lead-muted mb-0">{value.text}</p>
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
