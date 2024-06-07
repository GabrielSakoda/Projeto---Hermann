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
  delay: 200,
  distance: '50px',
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100,
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 2500;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

