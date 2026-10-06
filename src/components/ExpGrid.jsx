import { useState } from "react";

export default function ExpGrid({ cards }) {
  const [open, setOpen] = useState(-1);

  return (
    <div className="exp-grid" role="list">
      {cards.map((card, i) => (
        <article
          key={card.title}
          className={`exp-card${open === i ? " is-open" : ""}`}
          role="listitem"
          tabIndex={0}
          onClick={() => setOpen(open === i ? -1 : i)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen(open === i ? -1 : i);
            }
          }}
        >
          {card.step && (
            <span className="exp-card-step" aria-hidden="true">
              {card.step}
            </span>
          )}
          <div className="exp-card-icon" aria-hidden="true">
            <i className={`bi ${card.icon}`}></i>
          </div>
          <h4 className="exp-card-title">{card.title}</h4>
          <p className="exp-card-hint">{card.hint}</p>
          <div className="exp-card-more">
            <p>{card.more}</p>
            <span className="exp-card-tag">{card.tag}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
