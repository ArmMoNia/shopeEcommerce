import popUpHelper from "../helper/popUp.js";
// import addToCart from "./addToCartBtn.js";
// render item detail for selected Item

const itemPrice = document.querySelector(".item-detail-info-price");
const itemName = document.querySelector(".item-detail-info-name");
const itemImg = document.querySelector(".display-img");
const itemDescription = document.querySelector(".item-detail-info-decription");
const showItemDetail = document.querySelector(".popup-item-detail");

const renderSelectedItem = function (myData) {
  popUpHelper.active(showItemDetail);
  showItemDetail.classList.remove("hidden");
  itemImg.style.background = `url("${myData.image}") no-repeat`;
  itemImg.style.backgroundSize = `55%`;
  itemImg.style.backgroundPosition = `center`;
  itemName.innerHTML = ` ${myData.name}`;
  itemPrice.innerHTML = `$ ${myData.price}`;
  itemDescription.innerHTML = `<h5>Information:</h5>  ${myData.decription}`;
};
// console.log(index);

export default renderSelectedItem;
