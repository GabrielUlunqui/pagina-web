import { useState } from "react";

export default function FaqGroup({ items }) {
  const [open, setOpen] = useState(-1);

  return (
    <>
      {items.map((item, i) => (
        <div className={`faq-item${open === i ? " open" : ""}`} key={item.q}>
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {item.q}
            <i className="bi bi-plus-lg" aria-hidden="true"></i>
          </button>
          <div className="faq-body">{item.a}</div>
        </div>
      ))}
    </>
  );
}
