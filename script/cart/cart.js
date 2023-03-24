import popUpHelper from "../helper/popUp.js";

const cartIcon = document.getElementById("header-cart-icon");
const cartBar = document.querySelector(".cart-bar");
const hamCart = document.querySelector(".li-cart");
const menuLeft = document.querySelector(".header-container-menu-list");
const liCart = document.querySelector(".li-cart");
const hamMenu = document.querySelector(".ham-menu");
const head = document.querySelector(".header-container");
const cart = {
  openCart() {
    cartIcon.addEventListener("click", function () {
      popUpHelper.active();
      cartBar.classList.add("show-cart-bar");
    });
    hamCart.addEventListener("click", function () {
      popUpHelper.active();
      cartBar.classList.add("show-cart-bar");
      menuLeft.className = "header-container-menu-list";
      liCart.className = "li-cart";
      head.classList.remove("whiteBg");
      hamMenu.classList.toggle("change");
    });
  },
};

export default cart;
