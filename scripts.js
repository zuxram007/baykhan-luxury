document.getElementById("year").textContent = new Date().getFullYear();
// When cards slide into view, reveal names seductively
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
  setTimeout(() => {
    entry.target.classList.add('show');
  }, Math.random() * 400); // delay 0–400ms for natural staggering
}
  
});
}, { threshold: 0.3 });

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
// simple load reveal
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    setTimeout(()=> el.classList.add('show'), 120 * i);
  });
});
// scripts/scripts.js
(function () {
  const nav = document.querySelector('.site-nav');

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('shrink');
    } else {
      nav.classList.remove('shrink');
    }
    // removed heroImage transform to avoid rendering glitch
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".site-nav");
  if (window.scrollY > 50) {
    nav.classList.add("solid");
  } else {
    nav.classList.remove("solid");
  }
});
