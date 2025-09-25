const hamburger = document.querySelector('.hamburger-menu');
const navItems = document.querySelector('.navbar-items');

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
});