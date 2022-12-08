// "use strict";
// burger
const burger = document.querySelector(".menu-burger");
const closeBurger = document.querySelector(".close-icon");
const menu = document.querySelector(".menu-items");
burger.addEventListener("click", function () {
  menu.classList.add("open-menu");
});
closeBurger.addEventListener("click", function () {
  menu.classList.remove("open-menu");
});
// burger

// carousel start
let next = document.querySelector(".comment-right-btn");
let back = document.querySelector(".comment-left-btn");
let carouselWrap = document.querySelector(".comment-carousel-wrap");
let carouselCard = document.querySelectorAll(".comment-carousel-card");
index = 0;
let cardWidth = carouselCard[0].clientWidth;

next.addEventListener("click", function () {
  index++;
  changeDistance();
});

back.addEventListener("click", function () {
  index--;
  changeDistance();
});

function changeDistance() {
  carouselWrap.style.transform = `translateX(${-cardWidth * index}px)`;
  if (index == carouselCard.length) {
    index = 0;
    changeDistance();
  } else if (index < 0) {
    index = carouselCard.length - 1;
    changeDistance();
  }
}

// carousel end

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
