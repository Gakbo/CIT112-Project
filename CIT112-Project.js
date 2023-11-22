//Feras 202220214
//2023/11/1

const navbarToggle = navbar.querySelector("#menu-icones");
const navbarMenu = document.querySelector("#menu-icones");
const navbarLinksContainer = navbarMenu.querySelector("#navbar");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);












const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menu = document.querySelector('#menu-icones');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    menu.classList.toggle('bx bx-menu');
    navbar.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx bx-menu');
    navbar.classList.remove('open')
};
