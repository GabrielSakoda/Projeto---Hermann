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

