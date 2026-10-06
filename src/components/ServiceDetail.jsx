import { Link } from "react-router-dom";
import PageHero from "./PageHero.jsx";
import CheckList from "./CheckList.jsx";
import CtaBar from "./CtaBar.jsx";

export default function ServiceDetail({
  title,
  subtitle,
  eyebrow,
  heading,
  lead,
  image,
  imageAlt,
  checklist,
  imageFirst = true,
  cta,
}) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />

      <section className="section-pad">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className={`col-lg-6${imageFirst ? "" : " order-lg-2"}`}>
              <div
                className="service-media"
                style={{ backgroundImage: `url('${image}')` }}
                role="img"
                aria-label={imageAlt}
              ></div>
            </div>
            <div className={`col-lg-6${imageFirst ? "" : " order-lg-1"}`}>
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="display-heading h2">{heading}</h2>
              <p className="lead-muted">{lead}</p>
              <CheckList items={checklist} />
              <Link className="btn btn-sis" to="/asesoramiento">
                Solicitar presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBar title={cta.title} primary={cta.primary} />
    </>
  );
}
