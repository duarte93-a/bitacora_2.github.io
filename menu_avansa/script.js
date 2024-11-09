// Seleccionamos el botón del menú y el contenedor del menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Cuando se hace clic en el botón del menú, se alterna la clase 'open'
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
