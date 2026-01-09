const counters = document.querySelectorAll(".metric-value");
const observerOptions = { threshold: 0.4 };

const animateCounter = (el) => {
  const target = Number(el.dataset.target || 0);
  const duration = 1200;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value.toLocaleString("pt-BR");
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

counters.forEach((counter) => observer.observe(counter));

const lightboxTrigger = document.querySelector(".image-lightbox-trigger");
const lightbox = document.querySelector("#lightbox");

if (lightboxTrigger && lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");

  const openLightbox = () => {
    const sourceImage = lightboxTrigger.querySelector("img");
    lightboxImage.src = sourceImage.src;
    lightboxImage.alt = sourceImage.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  };

  lightboxTrigger.addEventListener("click", openLightbox);
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
