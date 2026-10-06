import PageHero from "../components/PageHero.jsx";
import { useMailtoForm } from "../hooks/useMailtoForm.js";

const INFO_CARDS = [
  {
    icon: "bi-geo-alt",
    eyebrow: "Nuestra dirección",
    title: "Salta, Argentina",
    text: "Oficina comercial y despacho técnico",
  },
  {
    icon: "bi-telephone",
    eyebrow: "Teléfono de soporte",
    title: "+54 (387) 469-7984",
    text: "Atención técnica de lunes a sábados",
  },
  {
    icon: "bi-envelope",
    eyebrow: "Correo electrónico",
    title: "gabrielulunqui@gmail.com",
    text: "Consultas comerciales y cotizaciones",
  },
  {
    icon: "bi-clock",
    eyebrow: "Horarios de atención",
    title: "Lunes a Viernes 8:00 - 18:00",
    text: "Sábados de 9:00 a 13:00",
  },
];

const SERVICE_OPTIONS = [
  "Cámaras de Seguridad",
  "Alarmas Inteligentes",
  "Control de Accesos",
  "Cercos Eléctricos",
  "Seguimiento Vehicular",
  "Sistemas contra Incendios",
];

export default function ContactoPage() {
  const { sent, onSubmit } = useMailtoForm();

  return (
    <>
      <PageHero
        title="Contactanos"
        subtitle="Escribinos o coordiná un asesoramiento técnico para tu propiedad sin costo."
      />

      <section className="section-pad">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7 reveal">
              <div className="contact-form">
                <h2 className="h3 fw-bold mb-4">Enviar un mensaje</h2>
                <div
                  id="form-success"
                  className={`alert alert-success${sent ? "" : " d-none"}`}
                  role="status"
                >
                  ¡Gracias! Recibimos tu mensaje. Te contactaremos a la
                  brevedad.
                </div>
                <form id="contact-form" noValidate onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="nombre">
                      Nombre completo
                    </label>
                    <input
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Ingresá tu nombre"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email de contacto
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="telefono">
                      Teléfono / Celular
                    </label>
                    <input
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+54 387 1234567"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="servicio">
                      Servicio de interés
                    </label>
                    <select
                      className="form-select"
                      id="servicio"
                      name="servicio"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleccioná un servicio
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="mensaje">
                      Mensaje o consulta
                    </label>
                    <textarea
                      className="form-control"
                      id="mensaje"
                      name="mensaje"
                      rows="5"
                      placeholder="Contanos brevemente qué necesitás proteger..."
                      required
                    ></textarea>
                  </div>
                  <button className="btn btn-sis w-100" type="submit">
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-3">
                {INFO_CARDS.map((card, i) => (
                  <article
                    className={`info-card d-flex gap-3 reveal${
                      i > 0 ? ` d${i}` : ""
                    }`}
                    key={card.eyebrow}
                  >
                    <div className="icon-circle mb-0" aria-hidden="true">
                      <i className={`bi ${card.icon}`}></i>
                    </div>
                    <div>
                      <div className="eyebrow mb-1">{card.eyebrow}</div>
                      <strong>{card.title}</strong>
                      <p className="lead-muted mb-0">{card.text}</p>
                    </div>
                  </article>
                ))}
                <div
                  className="map-placeholder reveal d3"
                  role="img"
                  aria-label="Mapa de ubicación en Salta, Argentina"
                >
                  <span className="map-badge">SALTA, ARGENTINA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
