let navbar = document.querySelector('.navbar');
let logoLight = document.querySelector('.logo-light');
let logoDark = document.querySelector('.logo-dark');
let mMenuToggle = document.querySelector('.mobile-menu-toggle');
let menu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  if (this.scrollY > 1) {
    navbar.classList.add('navbar-light');
    logoLight.classList.add('visualy-hidden');
    logoDark.classList.remove('visualy-hidden');
  } else {
    navbar.classList.remove('navbar-light');
    logoLight.classList.remove('visualy-hidden');
    logoDark.classList.add('visualy-hidden');
  }
})

mMenuToggle.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.toggle('is-open')
})