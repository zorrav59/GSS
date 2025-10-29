const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const gabron = document.querySelector("#mobile-menu");
const dayat = document.querySelector(".navbar__menu");

document.addEventListener("click", function (e) {
  if (!gabron.contains(e.target) && !dayat.contains(e.target) ) {
    gabron.classList.remove("is-active");
    dayat.classList.remove("active");
  }
});
