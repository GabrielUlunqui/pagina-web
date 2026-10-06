import ServiceDetail from "../components/ServiceDetail.jsx";

export default function CamarasPage() {
  return (
    <ServiceDetail
      title="Cámaras de Seguridad"
      subtitle="Videovigilancia profesional con visión nocturna, detección de eventos y acceso remoto."
      eyebrow="CCTV"
      heading="Monitoreo claro, día y noche"
      lead="Instalamos cámaras domo, bullet e IP según el entorno. Configuramos NVR/DVR y apps seguras para ver en vivo desde el celular."
      image="/imagen/camara.webp"
      imageAlt="Cámara de seguridad"
      checklist={[
        "Resolución HD / 4K",
        "Visión nocturna",
        "Detección de movimiento",
        "Grabación local o cloud",
      ]}
      cta={{
        title: "¿Querés un relevamiento sin cargo?",
        primary: { to: "/contacto", label: "Ir a contacto" },
      }}
    />
  );
}
