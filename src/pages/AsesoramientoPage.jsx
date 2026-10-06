import { WHATSAPP_URL, PHONE, EMAIL } from "../data/site.js";
import { useMailtoForm } from "../hooks/useMailtoForm.js";

const SERVICE_OPTIONS = [
  "Cámaras de Seguridad",
  "Alarmas Inteligentes",
  "Control de Accesos",
  "Cercos Eléctricos",
  "Seguimiento Vehicular",
  "Sistemas contra Incendios",
  "Pack integral",
];

const STEPS = [
  {
    num: "01",
    title: "Recibimos tu pedido",
    text: "Revisamos el caso el mismo día hábil.",
  },
  {
    num: "02",
    title: "Coordinamos visita",
    text: "Un técnico releva el lugar sin cargo.",
  },
  {
    num: "03",
    title: "Propuesta clara",
    text: "Te enviamos presupuesto y plan de obra.",
  },
];

const CONTACT_ROWS = [
  { icon: "bi-whatsapp", label: "WhatsApp", value: PHONE },
  { icon: "bi-telephone", label: "Teléfono", value: "+54 (387) 469-7984" },
  { icon: "bi-envelope", label: "Email", value: EMAIL },
];

export default function AsesoramientoPage() {
  const { sent, onSubmit } = useMailtoForm();

  return (
    <>
      <section className="advise-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#8eb4ff" }}>
            Asesoramiento técnico
          </span>
          <h1>Pedí tu relevamiento sin cargo</h1>
          <p>
            Te escuchamos, visitamos el lugar y armamos una propuesta a medida
            para tu casa, comercio o industria en Salta.
          </p>
          <div className="advise-pills">
            <span className="advise-pill">
              <i className="bi bi-check2-circle" aria-hidden="true"></i> Visita
              técnica gratis
            </span>
            <span className="advise-pill">
              <i className="bi bi-clock" aria-hidden="true"></i> Respuesta en
              24 hs
            </span>
            <span className="advise-pill">
              <i className="bi bi-geo-alt" aria-hidden="true"></i> Capital y
              alrededores
            </span>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container advise-layout">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7 reveal">
              <div className="advise-form-card">
                <h2 className="h3 fw-bold mb-1">Completá tus datos</h2>
                <p className="lead-muted mb-4">
                  Con esta información preparamos el relevamiento y te
                  contactamos para coordinar día y horario.
                </p>
                <div
                  id="form-success"
                  className={`alert alert-success${sent ? "" : " d-none"}`}
                  role="status"
                >
                  ¡Listo! Registramos tu solicitud de asesoramiento.
                </div>
                <form id="contact-form" noValidate onSubmit={onSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="nombre">
                        Nombre completo
                      </label>
                      <input
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Ej. Ana Pérez"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="telefono">
                        Teléfono
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
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="email">
                        Email
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
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="tipo">
                        Tipo de propiedad
                      </label>
                      <select
                        className="form-select"
                        id="tipo"
                        name="tipo"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Seleccioná
                        </option>
                        <option>Residencial</option>
                        <option>Comercial</option>
                        <option>Industrial</option>
                      </select>
                    </div>
                    <div className="col-12">
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
                    <div className="col-12">
                      <label className="form-label" htmlFor="mensaje">
                        Contanos tu necesidad
                      </label>
                      <textarea
                        className="form-control"
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        placeholder="Qué querés proteger, tamaño del lugar o cualquier detalle útil..."
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-sis w-100" type="submit">
                        Enviar solicitud
                      </button>
                    </div>
                  </div>
                </form>
                <div className="advise-steps">
                  {STEPS.map((step) => (
                    <div className="advise-step" key={step.num}>
                      <span>{step.num}</span>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5 reveal d1">
              <aside className="advise-aside">
                <img
                  className="advise-aside-photo"
                  src="/imagen/servicio.webp"
                  alt="Equipo técnico de SIS Seguridad Electrónica"
                  width="640"
                  height="220"
                />
                <div className="advise-aside-body">
                  <h2 className="h5 fw-bold mb-1">¿Preferís hablar ahora?</h2>
                  <p className="lead-muted mb-3">
                    También podés escribirnos o llamarnos. Atendemos consultas
                    de lunes a sábados.
                  </p>
                  {CONTACT_ROWS.map((row) => (
                    <div className="advise-contact-row" key={row.label}>
                      <div className="icon-box mb-0" aria-hidden="true">
                        <i className={`bi ${row.icon}`}></i>
                      </div>
                      <div>
                        <strong>{row.label}</strong>
                        <p className="lead-muted mb-0">{row.value}</p>
                      </div>
                    </div>
                  ))}
                  <a
                    className="btn btn-sis w-100 mt-3"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp me-1" aria-hidden="true"></i>{" "}
                    Abrir WhatsApp
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
