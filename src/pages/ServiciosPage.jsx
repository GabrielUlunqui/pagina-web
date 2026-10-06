import PageHero from "../components/PageHero.jsx";
import ServiceTabs from "../components/ServiceTabs.jsx";
import CtaBar from "../components/CtaBar.jsx";

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        center
        title="Nuestros Servicios"
        subtitle="Soluciones profesionales de seguridad electrónica con tecnología avanzada."
      />

      <section className="section-pad" aria-labelledby="showcase-title">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <span className="eyebrow">Showcase</span>
            <h2 id="showcase-title" className="display-heading h1">
              Explorá cada solución
            </h2>
            <p className="lead-muted mx-auto" style={{ maxWidth: "40rem" }}>
              Pasá el mouse o tocá cada servicio para ver el detalle.
            </p>
          </div>

          <ServiceTabs />
        </div>
      </section>

      <CtaBar
        featured
        title="Protegé lo que más importa"
        subtitle="Estamos listos para asesorarte las 24 horas del día."
        whatsappLabel="Consultanos por WhatsApp"
      />
    </>
  );
}
