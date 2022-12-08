// /** @format */

function filterCards(value) {
  let links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (value == link.className) {
      link.classList.add("paint");
    } else {
      link.classList.remove("paint");
    }
    let card = document.querySelectorAll(".our-designs-bottom-card");
    card.forEach((car) => {
      if (car.classList.contains(value)) {
        car.classList.remove("hide");
      } else {
        car.classList.add("hide");
      }
    });
  });
}
