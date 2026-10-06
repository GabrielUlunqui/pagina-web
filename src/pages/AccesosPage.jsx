import ServiceDetail from "../components/ServiceDetail.jsx";

export default function AccesosPage() {
  return (
    <ServiceDetail
      title="Control de Accesos"
      subtitle="Gestioná ingresos con biometría, tarjetas RFID y software de administración."
      eyebrow="Accesos"
      heading="Quién entra, cuándo y por dónde"
      lead="Ideal para oficinas, edificios y depósitos. Integramos cerraduras, torniquetes y reportes de asistencia."
      image="/imagen/acceso.webp"
      imageAlt="Lector de control de accesos"
      checklist={[
        "Cerraduras magnéticas",
        "Reconocimiento facial",
        "Software de gestión",
        "Reportes de asistencia",
      ]}
      cta={{
        title: "Pedí una demo de control de accesos",
        primary: { to: "/asesoramiento", label: "Solicitar asesoramiento" },
      }}
    />
  );
}
