document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      item.parentElement
        .querySelectorAll(".faq-item")
        .forEach((faq) => faq.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }
      const data = new FormData(form);
      const get = (key) => (data.get(key) || "").toString().trim();
      const subject = `Consulta web: ${get("servicio") || "Asesoramiento"} — ${get("nombre")}`;
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
      window.location.href = `mailto:gabrielulunqui@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(lines.join("\n"))}`;
      const alertBox = document.getElementById("form-success");
      if (alertBox) {
        alertBox.classList.remove("d-none");
        form.reset();
        form.classList.remove("was-validated");
      }
    });
  }

  // Navbar: sombra al hacer scroll
  const navbar = document.querySelector(".sis-navbar");
  if (navbar) {
    const onScroll = () =>
      navbar.classList.toggle("is-scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Modo oscuro: toggle en navbar + persistencia en localStorage
  const themeToggle = document.querySelector(".theme-toggle");
  const setTheme = (theme, persist = true) => {
    document.documentElement.dataset.theme = theme;
    if (persist) localStorage.setItem("sis-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
      const icon = themeToggle.querySelector("i");
      if (icon)
        icon.className =
          theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
    }
    document
      .querySelectorAll(".sis-logo-img")
      .forEach((img) => {
        img.src =
          theme === "dark"
            ? "imagen/SIS-Seguridad-Electronica-logo-dark.svg"
            : "imagen/SIS-Seguridad-Electronica-logo.svg";
      });
  };
  setTheme(document.documentElement.dataset.theme || "light", false);
  if (themeToggle) {
    themeToggle.addEventListener("click", () =>
      setTheme(
        document.documentElement.dataset.theme === "dark" ? "light" : "dark"
      )
    );
  }

  // Aparición suave al hacer scroll (fade-in / slide-up)
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Tarjetas expandibles: en táctil se abren con tap (un acordeón por fila)
  document.querySelectorAll(".exp-grid").forEach((grid) => {
    grid.querySelectorAll(".exp-card").forEach((card) => {
      card.addEventListener("click", () => {
        const isOpen = card.classList.contains("is-open");
        grid
          .querySelectorAll(".exp-card")
          .forEach((c) => c.classList.remove("is-open"));
        if (!isOpen) card.classList.add("is-open");
      });
    });
  });

  // Servicios: pestañas interactivas (hover, clic o foco de teclado)
  const svcTabs = document.querySelectorAll(".svc-tab");
  if (svcTabs.length) {
    const svcPanels = document.querySelectorAll(".svc-panel");
    const activateTab = (tab) => {
      svcTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("active", active);
        t.setAttribute("aria-selected", String(active));
      });
      svcPanels.forEach((panel) =>
        panel.classList.toggle("active", panel.id === tab.dataset.panel)
      );
    };
    svcTabs.forEach((tab) => {
      tab.addEventListener("mouseenter", () => activateTab(tab));
      tab.addEventListener("click", () => activateTab(tab));
      tab.addEventListener("focus", () => activateTab(tab));
    });

    // Deep-link: servicios.html#gps activa la pestaña correspondiente
    const activateFromHash = () => {
      const target = document.querySelector(
        `.svc-tab[data-panel="${location.hash.slice(1)}"]`
      );
      if (target) activateTab(target);
    };
    activateFromHash();
    window.addEventListener("hashchange", activateFromHash);
  }
});
