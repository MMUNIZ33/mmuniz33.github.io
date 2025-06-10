document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(sec => observer.observe(sec));
  document.getElementById('current-year').textContent = new Date().getFullYear();
});
