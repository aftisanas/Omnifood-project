// nav bar menu event
let barBtn = document.querySelector(".nav-item-menu");

barBtn.addEventListener("click", displayNav);

function displayNav() {
  const navBar = document.querySelector(".nav-bar");
  const faClose = document.querySelector(".fa-close");
  const faBar = document.querySelector(".fa-bars");

  navBar.classList.toggle("responsive-nav-bar");
  faClose.classList.toggle("close-humburger");
  faBar.classList.toggle("d-none");
}

// sticky nav bar
const stickyNav = () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky-header', window.scrollY > 0);
  });
}

stickyNav();