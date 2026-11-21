// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Hide images that fail to load (keeps the layout's background tone visible)
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => { img.style.visibility = "hidden"; });
});

// Contact form (front-end only — connect to your backend or form service)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const success = document.getElementById("form-success");
    success.classList.add("show");
    form.reset();
    success.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}
