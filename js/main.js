const WHATSAPP_NUMBER = "5521984249375";

function whatsappLink(message) {
  const text = encodeURIComponent(message || "Olá, Rodrigo! Vim pelo site e quero saber mais sobre a iGreen Energy.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const customMessage = el.getAttribute("data-whatsapp-message");
    el.setAttribute("href", whatsappLink(customMessage));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownToggle = document.querySelector(".nav-dropdown-toggle");
  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = dropdown.classList.toggle("open");
      dropdownToggle.setAttribute("aria-expanded", String(isOpen));
    });
    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });
    dropdown.querySelectorAll(".dropdown-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        dropdown.classList.remove("open");
        dropdownToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.querySelector("#name").value.trim();
      const cityEl = form.querySelector("#city");
      const city = cityEl ? cityEl.value.trim() : "";
      const plan = form.querySelector("#plan").value;
      const phone = form.querySelector("#phone").value.trim();
      const message = form.querySelector("#message").value.trim();

      const summary = [
        `Olá, Rodrigo! Me chamo ${name}.`,
        city ? `Sou de ${city}.` : "",
        plan ? `Tenho interesse no plano: ${plan}.` : "",
        phone ? `Meu telefone para contato: ${phone}.` : "",
        message ? `Mensagem: ${message}` : "",
      ]
        .filter(Boolean)
        .join(" ");

      window.open(whatsappLink(summary), "_blank", "noopener");
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
