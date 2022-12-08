// "use strict";
const burger = document.querySelector(".menu-burger");
const closeBurger = document.querySelector(".close-icon");
const menu = document.querySelector(".menu-items");
burger.addEventListener("click", function () {
  menu.classList.add("open-menu");
});
closeBurger.addEventListener("click", function () {
  menu.classList.remove("open-menu");
});

// accordion
let accordionWrap = document.querySelectorAll(".questions-right-accordion_item"
);
let accordionTitle = document.querySelectorAll(".accordion-label");
accordionTitle.forEach((title, index) => {
  title.addEventListener("click", () => {
    accordionWrap[index].classList.toggle("height");
  });
});
// accordion