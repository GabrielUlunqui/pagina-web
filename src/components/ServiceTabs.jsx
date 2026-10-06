import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SERVICES } from "../data/services.js";

export default function ServiceTabs() {
  const { hash } = useLocation();
  const [active, setActive] = useState(() => {
    const id = hash.slice(1);
    return SERVICES.some((s) => s.id === id) ? id : SERVICES[0].id;
  });

  useEffect(() => {
    const id = hash.slice(1);
    if (SERVICES.some((s) => s.id === id)) setActive(id);
  }, [hash]);

  return (
    <div className="svc-tabs">
      <div
        className="svc-list reveal reveal-left"
        role="tablist"
        aria-label="Lista de servicios"
      >
        {SERVICES.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`svc-tab${active === s.id ? " active" : ""}`}
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={active === s.id}
            aria-controls={s.id}
            onMouseEnter={() => setActive(s.id)}
            onClick={() => setActive(s.id)}
            onFocus={() => setActive(s.id)}
          >
            <span className="svc-tab-icon" aria-hidden="true">
              <i className={`bi ${s.icon}`}></i>
            </span>
            <span className="svc-tab-text">{s.label}</span>
            <i className="bi bi-arrow-right svc-tab-arrow" aria-hidden="true"></i>
          </button>
        ))}
      </div>

      <div className="svc-panels reveal reveal-right d1">
        {SERVICES.map((s) => (
          <article
            key={s.id}
            className={`svc-panel${active === s.id ? " active" : ""}`}
            id={s.id}
            role="tabpanel"
            aria-labelledby={`tab-${s.id}`}
          >
            <img className="svc-panel-img" src={s.img} alt={s.alt} />
            <div className="svc-panel-info">
              <span className="svc-panel-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="svc-chips">
                {s.chips.map((chip) => (
                  <li key={chip}>
                    <i className="bi bi-check2"></i>
                    {chip}
                  </li>
                ))}
              </ul>
              <Link className="btn btn-sis btn-sm" to={s.link}>
                Solicitar presupuesto
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
