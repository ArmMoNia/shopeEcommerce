import myData from "./renderItem.js";
import addItemToCartBar from "./cartBar.js";
// Function Click to pop-up item for more detail
const showItemDetail = document.querySelector(".popup-item-detail");
const blackDrop = document.querySelector(".overlay");
const itemPrice = document.querySelector(".item-detail-info-price");
const itemName = document.querySelector(".item-detail-info-name");
const itemImg = document.querySelector(".display-img");
const itemDescription = document.querySelector(".item-detail-info-decription");
const displaynoItemOnCart = document.querySelector(".cart-bar-no-item");
const disPlaynoPriceOnCart = document.querySelector(".cart-bar-total-price");
const disPlaynoBtnOnCart = document.querySelector(".cart-bar-checkout");
const qtyItem = document.querySelector(".item-detail-add-remove-num");
const addRemoveItem = document.querySelectorAll(".item-detail-add-remove-btn");
const myItemCart = [];

// const changeItemQty = function () {
//   addRemoveItem.forEach((click, index) => {
//     if (index === 0 && qty >= 1) {
//       click.addEventListener("click", () => {
//         console.log("Remove");
//         qtyItem.innerHTML = 1;
//       });
//     } else if (index === 1) {
//       click.addEventListener("click", () => {
//         console.log("Add");
//         qty++;
//         qtyItem.innerHTML = qty;
//       });
//     }
//     return qty;
//   });
// };
// changeItemQty(qty);
// Show pop up for sected
let selectedItem;
const showDetailItem = function () {
  const productsImg = document.querySelectorAll(".show-products-items-img");
  productsImg.forEach((img, index) => {
    img.addEventListener("click", () => {
      showItemDetail.classList.toggle("hidden");
      blackDrop.classList.toggle("hidden");
      renderSelectedItem(index);
      // This data to sent cart but it's wrong becuase this sent when click
      selectedItem = renderSelectedItem(index);
      selectedItem = {
        name: selectedItem.name,
        price: selectedItem.price,
        image: selectedItem.image,
        qty: qty,
      };
      // use selectedItem in addQty() then sent it to addItemToCartBar()
      return selectedItem;
    });
  });
};

// Add Remove Qty
let qty = 1;
addRemoveItem[1].addEventListener("click", function () {
  console.log(qty);
  return qty++;
});

// Add To Cart
const addToCartBtn = document.querySelector(".item-detail-add-to-cart-btn");
addToCartBtn.addEventListener("click", () => {
  myItemCart.push(selectedItem);

  addItemToCartBar(selectedItem, qty);
  displaynoItemOnCart.classList.add("hidden");
  disPlaynoPriceOnCart.classList.remove("hidden");
  disPlaynoBtnOnCart.classList.remove("hidden");
  blackDrop.classList.add("hidden");
  showItemDetail.classList.add("hidden");
});

// render item detail
const renderSelectedItem = function (index) {
  for (let i = 0; i < myData.length; i++) {
    if (index === i) {
      itemImg.style.background = `url("${myData[i].image}") no-repeat`;
      itemImg.style.backgroundSize = `55%`;
      itemImg.style.backgroundPosition = `center`;
      itemName.innerHTML = ` ${myData[i].name}`;
      itemPrice.innerHTML = `$ ${myData[i].price}`;
      itemDescription.innerHTML = `<h5>Information:</h5>  ${myData[i].decription}`;
      return myData[i];
    }
  }
};

// Closed pop up
const closeItemDetail = document.querySelector(".close-popup");
// Click X to Close
closeItemDetail.addEventListener("click", function () {
  showItemDetail.classList.toggle("hidden");
  blackDrop.classList.toggle("hidden");
});
// Click outside to Close
blackDrop.addEventListener("click", function () {
  showItemDetail.classList.add("hidden");
  blackDrop.classList.add("hidden");
  cartBar.classList.remove("show-cart-bar");
});
// Presss ESC to Close
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !blackDrop.classList.contains("hidden")) {
    showItemDetail.classList.add("hidden");
    blackDrop.classList.add("hidden");
    cartBar.classList.remove("show-cart-bar");
  }
});

// Cart Bar
const cartIcon = document.getElementById("header-cart-icon");
const cartBar = document.querySelector(".cart-bar");

cartIcon.addEventListener("click", function () {
  cartBar.classList.add("show-cart-bar");
  blackDrop.classList.toggle("hidden");
});

export { myItemCart, showDetailItem as default };
