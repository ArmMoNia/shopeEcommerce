const productsImg = document.querySelectorAll(".show-products-items-card");
const showItemDetail = document.querySelector(".popup-item-detail");
const blackDrop = document.querySelector(".overlay");

productsImg.forEach((img, index) => {
  img.addEventListener("click", () => {
    console.log(`This is img No. ${index + 1}`);
    showItemDetail.classList.toggle("hidden");
    blackDrop.classList.toggle("hidden");
  });
});

// Closed pop up
const closeItemDetail = document.querySelector(".close-popup");
closeItemDetail.addEventListener("click", function () {
  showItemDetail.classList.toggle("hidden");
  blackDrop.classList.toggle("hidden");
});

blackDrop.addEventListener("click", function () {
  showItemDetail.classList.toggle("hidden");
  blackDrop.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !blackDrop.classList.contains("hidden")) {
    showItemDetail.classList.toggle("hidden");
    blackDrop.classList.toggle("hidden");
  }
});
