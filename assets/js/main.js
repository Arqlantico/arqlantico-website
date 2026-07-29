// ===== Hero carousel (slow crossfade) =====
const heroImgs = document.querySelectorAll('#heroCarousel .hero__img');
if (heroImgs.length > 1) {
  let heroIndex = 0;
  const HERO_INTERVAL = 7000; // ms each image stays fully visible before crossfading
  setInterval(() => {
    heroImgs[heroIndex].classList.remove('is-active');
    heroIndex = (heroIndex + 1) % heroImgs.length;
    heroImgs[heroIndex].classList.add('is-active');
  }, HERO_INTERVAL);
}

// ===== Year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Nav scroll state =====
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile menu =====
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ===== Scroll reveal =====
const revealItems = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealItems.forEach(el => revealObserver.observe(el));

// ===== Process line draw-on-scroll =====
const processLine = document.getElementById('processLine');
if (processLine) {
  const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        processLine.classList.add('is-drawn');
        lineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  lineObserver.observe(processLine);
}
