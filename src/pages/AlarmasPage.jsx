import ServiceDetail from "../components/ServiceDetail.jsx";

export default function AlarmasPage() {
  return (
    <ServiceDetail
      title="Alarmas Inteligentes"
      subtitle="Detección inmediata, sirenas potentes y avisos al celular ante intrusiones."
      eyebrow="Alarmas"
      heading="Protección activa 24/7"
      lead="Diseñamos el perímetro de sensores según habitaciones, accesos y mascotas. Incluye puesta en marcha y capacitación de uso."
      image="/imagen/alarma.webp"
      imageAlt="Panel de alarma"
      imageFirst={false}
      checklist={[
        "Sensores inmunes a mascotas",
        "Contactos magnéticos",
        "Notificaciones móviles",
        "Sirenas de alta potencia",
      ]}
      cta={{
        title: "Combiná alarma + cámaras para mayor cobertura",
        primary: { to: "/servicios", label: "Ver servicios" },
      }}
    />
  );
}
