let navbar = document.querySelector('.navbar');
let logoLight = document.querySelector('.logo-light');
let logoDark = document.querySelector('.logo-dark');
let mMenuToggle = document.querySelector('.mobile-menu-toggle');
let menu = document.querySelector('.mobile-menu');

const lightModeOn = (event) => {
  navbar.classList.add('navbar-light');
  logoLight.classList.add('visualy-hidden');
  logoDark.classList.remove('visualy-hidden');
};

const darkModeOn = (event) => {
  navbar.classList.remove('navbar-light');
  logoLight.classList.remove('visualy-hidden');
  logoDark.classList.add('visualy-hidden');
}

const openMenu = (event) => {
  menu.classList.add('is-open');
  mMenuToggle.classList.add('close-menu');
  document.body.style.overflow = "hidden";
  lightModeOn();
};

const closeMenu = (event) => {
  menu.classList.remove('is-open');
  mMenuToggle.classList.remove('close-menu');
  document.body.style.overflow = "";
  darkModeOn();
};

window.addEventListener('scroll', () => {
  if (this.scrollY > 1) {
    lightModeOn();
  } else {
    darkModeOn();
  }
})

mMenuToggle.addEventListener('click', (event) => {
  event.preventDefault();
  if (menu.classList.contains('is-open')) {
    closeMenu();
  } else {
    openMenu();
  }
})

const swiper = new Swiper('.swiper', {
  speed: 400,
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      centeredSlides: true
    },
    // when window width is >= 480px
    650: {
      slidesPerView: 2,
      centeredSlides: true
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,

    }
  },

});