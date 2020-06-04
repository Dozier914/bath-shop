// Navbar hamburger menu
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

// Used to hover over products based on viewport
let target = document.querySelectorAll('#product');
var observer = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            entry.target.firstElementChild.childNodes[1].style.opacity = "0.85";
            entry.target.firstElementChild.childNodes[3].style.opacity = "1";
            entry.target.firstElementChild.childNodes[5].style.opacity = "0.85";
        } else {
            entry.target.firstElementChild.childNodes[1].style.opacity = "0";
            entry.target.firstElementChild.childNodes[3].style.opacity = "0.85";
            entry.target.firstElementChild.childNodes[5].style.opacity = "0";
        }
    });
}, { threshold: [1] });

for (i = 0; i < target.length; i++) {
    observer.observe(target[i]);
}
