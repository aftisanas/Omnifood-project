// nav bar menu event

let barBtn = document.querySelector('.nav-item-menu');

barBtn.addEventListener('click', displayNav);

function displayNav() {

    const navBar = document.querySelector('.nav-bar');
    const faClose = document.querySelector('.fa-close');
    const faBar = document.querySelector('.fa-bars');

    navBar.classList.toggle('responsive-nav-bar');
    faClose.classList.toggle('d-block');
    faBar.classList.toggle('d-none');
}
