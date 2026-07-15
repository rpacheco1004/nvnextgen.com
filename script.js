document.getElementById("year").textContent = new Date().getFullYear();

const button = document.querySelector(".menu-btn");
const mobile = document.querySelector(".mobile-nav");

button.addEventListener("click", () => {
  const open = mobile.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobile.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
