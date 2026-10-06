export default function PageHero({ title, subtitle, center = false }) {
  return (
    <section
      className={`page-hero page-hero-fade${center ? " text-center" : ""}`}
    >
      <div className="container">
        <h1 className={center ? "reveal" : undefined}>{title}</h1>
        <p className={center ? "mx-auto reveal d1" : undefined}>{subtitle}</p>
      </div>
    </section>
  );
}
