import setUpDataShop from "./shopdata/fetchDataToShowProducts.js";
import renderBg from "./homepage/renderHomePageBG.js";
import stickyHeader from "./homepage/stickyHeader.js";
import cart from "./cart/cart.js";
import navigationPage from "./helper/scroll.js";

// sticky header when scroll
stickyHeader();
// render background
renderBg.activeBg();
// navigator page
navigationPage.scroll();

// get shopdata
setUpDataShop.fetchItems();

// open cart
cart.openCart();

const menuLeft = document.querySelector(".header-container-menu-list");
const liCart = document.querySelector(".li-cart");
const hamMenu = document.querySelector(".ham-menu");
const head = document.querySelector(".header-container");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("change");
  console.log(menuLeft.className);
  if (menuLeft.className === "header-container-menu-list") {
    menuLeft.className += " menu-active";
    liCart.className += " menu-active";
    head.classList.add("whiteBg");
  } else {
    menuLeft.className = "header-container-menu-list";
    liCart.className = "li-cart";
    head.classList.remove("whiteBg");
  }
});
