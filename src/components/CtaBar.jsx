import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "../data/site.js";

export default function CtaBar({
  title,
  subtitle,
  featured = false,
  primary = { to: "/asesoramiento", label: "Solicitar asesoramiento" },
  whatsappLabel = "Escribinos por WhatsApp",
}) {
  if (!featured) {
    return (
      <section className="cta-bar">
        <div className="container d-flex flex-wrap gap-2 justify-content-between align-items-center">
          <div>
            <h2 className="h4 fw-bold text-white mb-0">{title}</h2>
            {subtitle && (
              <p className="mb-0" style={{ color: "#94a3b8" }}>
                {subtitle}
              </p>
            )}
          </div>
          <Link className="btn btn-sis" to={primary.to}>
            {primary.label}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cta-bar">
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-lg-7 d-flex align-items-start gap-3">
            <div
              className="icon-circle mb-0 bg-sis text-white"
              aria-hidden="true"
            >
              <i className="bi bi-shield-fill-check"></i>
            </div>
            <div>
              <h2 className="h4 fw-bold text-white mb-1">{title}</h2>
              <p className="mb-0 cta-muted">{subtitle}</p>
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-wrap gap-2 justify-content-lg-end">
            <Link className="btn btn-sis" to={primary.to}>
              {primary.label}
            </Link>
            <a
              className="btn btn-sis-ghost"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
