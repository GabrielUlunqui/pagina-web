import { WHATSAPP_URL } from "../data/site.js";

export default function WhatsAppFab() {
  return (
    <a
      className="whatsapp-fab"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <i className="bi bi-whatsapp" aria-hidden="true"></i>
    </a>
  );
}
