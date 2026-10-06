import { Link } from "react-router-dom";
import ExpGrid from "../components/ExpGrid.jsx";
import FaqGroup from "../components/FaqGroup.jsx";
import CtaBar from "../components/CtaBar.jsx";

const TRUST_CARDS = [
  {
    icon: "bi-phone",
    title: "Tecnología de vanguardia",
    text: "Equipamiento profesional con monitoreo remoto y alertas en tiempo real.",
  },
  {
    icon: "bi-headset",
    title: "Soporte especializado",
    text: "Equipo técnico local para instalación, mantenimiento y respuesta rápida.",
  },
  {
    icon: "bi-shield-check",
    title: "Confianza y respaldo",
    text: "Proyectos a medida con garantías claras y acompañamiento continuo.",
  },
];

const SERVICE_CARDS = [
  {
    icon: "bi-camera-video",
    title: "Cámaras de Seguridad",
    text: "Videovigilancia HD/4K con visión nocturna y acceso desde el celular.",
    to: "/camaras",
  },
  {
    icon: "bi-bell",
    title: "Alarmas",
    text: "Sistemas inteligentes con sensores, sirenas y notificaciones móviles.",
    to: "/alarmas",
  },
  {
    icon: "bi-fingerprint",
    title: "Control de Accesos",
    text: "Biometría, tarjetas RFID y software de gestión para empresas.",
    to: "/accesos",
  },
  {
    icon: "bi-lightning-charge",
    title: "Cercos Eléctricos",
    text: "Perímetros energizados con señalización y activación de alarma.",
    to: "/servicios#cercos",
  },
  {
    icon: "bi-geo-alt",
    title: "Seguimiento Vehicular",
    text: "GPS en tiempo real, geocercas e historial de recorridos.",
    to: "/servicios#gps",
  },
  {
    icon: "bi-fire",
    title: "Sistemas contra Incendios",
    text: "Detección temprana, alarmas visuales y mantenimiento periódico.",
    to: "/servicios#incendios",
  },
];

const DIFERENCIALES = [
  {
    icon: "bi-cpu",
    title: "Tecnología profesional",
    hint: "Marcas líderes del mercado",
    more: "Trabajamos con hardware profesional y configuramos cada equipo según el nivel de riesgo real de tu espacio. Nada de soluciones genéricas: cada sistema se dimensiona para tu caso.",
    tag: "Diferencial SIS",
  },
  {
    icon: "bi-house-lock",
    title: "Seguridad a medida",
    hint: "Diseños 100% personalizados",
    more: "Residencias, comercios, industrias y flotas: analizamos cada escenario y proponemos la combinación justa de cámaras, alarmas, accesos y monitoreo.",
    tag: "Diferencial SIS",
  },
  {
    icon: "bi-people",
    title: "Asesoramiento especializado",
    hint: "Te guiamos paso a paso",
    more: "Un técnico escucha tu necesidad, resuelve tus dudas y te recomienda la alternativa más eficiente en relación costo-beneficio, sin compromiso.",
    tag: "Diferencial SIS",
  },
  {
    icon: "bi-tools",
    title: "Soporte técnico",
    hint: "Asistencia cuando la necesitás",
    more: "Mantenimiento preventivo, revisiones programadas y respuesta rápida ante cualquier inconveniente. Tu sistema siempre operativo.",
    tag: "Diferencial SIS",
  },
];

const METODO = [
  {
    step: "01",
    icon: "bi-chat-dots",
    title: "Asesoramiento",
    hint: "Escuchamos tu necesidad",
    more: "Coordinamos una primera charla para entender qué querés proteger y proponerte la mejor alternativa para tu caso.",
    tag: "Paso 01",
  },
  {
    step: "02",
    icon: "bi-clipboard-check",
    title: "Relevamiento",
    hint: "Analizamos tu espacio",
    more: "Visitamos el sitio, detectamos puntos críticos, accesos y zonas ciegas para definir la cobertura ideal del sistema.",
    tag: "Paso 02",
  },
  {
    step: "03",
    icon: "bi-wrench-adjustable",
    title: "Instalación",
    hint: "Montaje y puesta en marcha",
    more: "Instalamos, configuramos y probamos todo el sistema. Además, te capacitamos para usarlo con confianza desde el primer día.",
    tag: "Paso 03",
  },
  {
    step: "04",
    icon: "bi-life-preserver",
    title: "Soporte",
    hint: "Acompañamiento continuo",
    more: "Soporte postventa, mantenimiento y asistencia técnica permanente para que nunca quedes desprotegido.",
    tag: "Paso 04",
  },
];

const FAQ_LEFT = [
  {
    q: "¿Qué tipo de cámaras necesito?",
    a: "Depende del entorno: interior, exterior, iluminación y cobertura. Te recomendamos el kit ideal tras un relevamiento.",
  },
  {
    q: "¿Las alarmas funcionan sin internet?",
    a: "Sí. Pueden operar de forma local y sumar conectividad para avisos remotos cuando hay red disponible.",
  },
  {
    q: "¿Trabajan con empresas?",
    a: "Sí. Atendemos comercios, industrias y edificios con soluciones de acceso, CCTV y monitoreo.",
  },
];

const FAQ_RIGHT = [
  {
    q: "¿Cuánto tarda una instalación?",
    a: "Un proyecto residencial suele resolverse en 1 a 2 jornadas; obras mayores se planifican por etapas.",
  },
  {
    q: "¿Ofrecen mantenimiento?",
    a: "Contamos con planes de mantenimiento preventivo y soporte correctivo a demanda.",
  },
  {
    q: "¿Puedo ver las cámaras desde el celular?",
    a: "Sí. Configuramos apps seguras para visualización remota y notificaciones de eventos.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hero-badge reveal">
                <i className="bi bi-shield-fill-check" aria-hidden="true"></i>
                Líderes en seguridad electrónica · Salta
              </span>
              <h1 id="hero-title" className="reveal d1">
                Seguridad inteligente para{" "}
                <span className="text-gradient">lo que más importa</span>
              </h1>
              <p className="hero-lead reveal d2">
                Diseñamos, instalamos y damos soporte a sistemas de seguridad
                electrónica para hogares, comercios e industrias en toda la
                provincia de Salta.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4 reveal d2">
                <Link className="btn btn-sis" to="/servicios">
                  Conocé nuestros servicios
                </Link>
                <Link className="btn btn-hero-ghost" to="/asesoramiento">
                  Solicitar asesoramiento
                </Link>
              </div>
              <ul className="hero-points reveal d3">
                <li>
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                  Soporte técnico local
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                  Alertas en tiempo real
                </li>
                <li>
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                  Instalación garantizada
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="hero-media reveal reveal-right d2">
                <img
                  src="/imagen/camara.webp"
                  alt="Cámara de seguridad profesional instalada en exteriores"
                />
                <div className="hero-chip hero-chip-top" aria-hidden="true">
                  <i className="bi bi-broadcast"></i>
                  <span>Monitoreo 24/7</span>
                </div>
                <div className="hero-chip hero-chip-bottom" aria-hidden="true">
                  <i className="bi bi-bell-fill"></i>
                  <span>Alertas en tiempo real</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-labelledby="confianza-title">
        <h2 id="confianza-title" className="visually-hidden">
          Por qué confiar en SIS
        </h2>
        <div className="container">
          <div className="row g-3">
            {TRUST_CARDS.map((card, i) => (
              <div
                className={`col-md-4 reveal${i > 0 ? ` d${i}` : ""}`}
                key={card.title}
              >
                <article className="trust-card">
                  <div className="icon-box" aria-hidden="true">
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <h3 className="h5 fw-bold">{card.title}</h3>
                  <p className="lead-muted mb-0">{card.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft" aria-labelledby="servicios-title">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <span className="eyebrow">Nuestros servicios</span>
            <h2 id="servicios-title" className="display-heading h1">
              Soluciones integrales de seguridad
            </h2>
          </div>
          <div className="row g-4">
            {SERVICE_CARDS.map((card, i) => (
              <div
                className={`col-md-6 col-lg-4 reveal${
                  i % 3 > 0 ? ` d${i % 3}` : ""
                }`}
                key={card.title}
              >
                <article className="service-card">
                  <div className="icon-box" aria-hidden="true">
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <h3 className="h5 fw-bold">{card.title}</h3>
                  <p className="lead-muted">{card.text}</p>
                  <Link to={card.to} className="service-link">
                    Ver más <i className="bi bi-arrow-right"></i>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="method" aria-labelledby="metodo-title">
        <div className="container">
          <div className="text-center reveal">
            <span className="eyebrow eyebrow-light">
              Diferenciales &amp; Método
            </span>
            <h2 id="metodo-title" className="display-heading h1 text-white">
              Por qué elegirnos y cómo trabajamos
            </h2>
            <p className="method-lead">
              Combinamos tecnología profesional con un proceso de trabajo claro:
              pasá el mouse sobre cada tarjeta para conocer el detalle.
            </p>
          </div>

          <div className="method-groups">
            <div className="method-group reveal">
              <h3 className="method-sub">
                <span className="method-sub-num">01</span> Nuestros diferenciales
              </h3>
              <ExpGrid cards={DIFERENCIALES} />
            </div>

            <div className="method-group reveal d1">
              <h3 className="method-sub">
                <span className="method-sub-num">02</span> Nuestro método
              </h3>
              <ExpGrid cards={METODO} />
            </div>
          </div>

          <div className="text-center mt-5 reveal">
            <Link className="btn btn-sis" to="/asesoramiento">
              Coordinar una visita técnica
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-7 p-4 p-lg-5">
                <span className="eyebrow eyebrow-light">Sin cargo</span>
                <h2 className="h1 fw-bold text-white mb-3">
                  Tranquilidad que se siente
                </h2>
                <p className="mb-4 cta-muted">
                  Protegé tu hogar, negocio o flota con un sistema pensado para
                  vos. Coordiná una visita técnica sin cargo.
                </p>
                <Link className="btn btn-sis" to="/asesoramiento">
                  Quiero mi asesoramiento
                </Link>
              </div>
              <div className="col-lg-5">
                <div
                  className="cta-banner-media h-100"
                  role="img"
                  aria-label="Cámara de seguridad exterior"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft" aria-labelledby="faq-title">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-title" className="display-heading h1">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="row g-3">
            <div className="col-lg-6 reveal">
              <FaqGroup items={FAQ_LEFT} />
            </div>
            <div className="col-lg-6 reveal d1">
              <FaqGroup items={FAQ_RIGHT} />
            </div>
          </div>
        </div>
      </section>

      <CtaBar
        featured
        title="Protegé lo que más importa"
        subtitle="Estamos listos para asesorarte las 24 horas del día."
      />
    </>
  );
}
