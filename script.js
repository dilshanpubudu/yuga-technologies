const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) menuButton.textContent = "☰";
}));

document.getElementById("projectForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    "Hello YUGA Technologies, I would like to discuss a project.",
    "",
    `Service: ${data.get("service")}`,
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone") || "Not provided"}`,
    `Company: ${data.get("company") || "Not provided"}`,
    `Budget: ${data.get("budget")}`,
    `Timeline: ${data.get("timeline")}`,
    `Project details: ${data.get("details")}`
  ].join("\n");
  window.open(`https://wa.me/94789651154?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});