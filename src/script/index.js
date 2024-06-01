document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  hamburgerBtn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      overlay.classList.toggle('hidden');
  });

  overlay.addEventListener('click', () => {
      sidebar.classList.add('hidden');
      overlay.classList.add('hidden');
  });
});

ScrollReveal().reveal('.card2', {
  delay: 300,
  distance: '50px',
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100,
});
ScrollReveal().reveal('.container', {
  delay: 300,
  distance: '50px',
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100,
});

ScrollReveal().reveal('.sobre', {
  delay: 300,
  distance: '50px',
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100,
});

ScrollReveal().reveal('.inicio', {
  delay: 300,
  distance: '50px',
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100,
});

