import { useState } from "react";
import { EMAIL } from "../data/site.js";

export function useMailtoForm(defaultService = "Asesoramiento") {
  const [sent, setSent] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    const data = new FormData(form);
    const get = (key) => (data.get(key) || "").toString().trim();
    const subject = `Consulta web: ${get("servicio") || defaultService} — ${get("nombre")}`;
    const lines = [
      `Nombre: ${get("nombre")}`,
      `Teléfono: ${get("telefono")}`,
      `Email: ${get("email")}`,
    ];
    if (get("tipo")) lines.push(`Tipo de propiedad: ${get("tipo")}`);
    lines.push(
      `Servicio de interés: ${get("servicio")}`,
      "",
      "Mensaje:",
      get("mensaje"),
      "",
      "— Enviado desde el sitio web de SIS Seguridad Electrónica"
    );
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
    form.reset();
    form.classList.remove("was-validated");
  };

  return { sent, onSubmit };
}
