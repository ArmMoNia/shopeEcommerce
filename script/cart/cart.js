import popUpHelper from "../helper/popUp.js";

const cartIcon = document.getElementById("header-cart-icon");
const cartBar = document.querySelector(".cart-bar");

const cart = {
  openCart() {
    cartIcon.addEventListener("click", function () {
      popUpHelper.active();
      cartBar.classList.add("show-cart-bar");
    });
  },
};

export default cart;
