import popUpHelper from "../helper/popUp.js";

const itemPrice = document.querySelector(".item-detail-info-price");
const itemName = document.querySelector(".item-detail-info-name");
const itemImg = document.querySelector(".display-img");
const itemDescription = document.querySelector(".item-detail-info-decription");
const showItemDetail = document.querySelector(".popup-item-detail");

const renderSelectedItem = function (myData) {
  popUpHelper.active(showItemDetail);
  showItemDetail.classList.remove("hidden");
  itemImg.style.background = `url("${myData.image}") no-repeat`;
  itemImg.style.backgroundSize = `cover`;
  itemImg.style.backgroundPosition = `center`;
  itemName.innerHTML = ` ${myData.name}`;
  itemPrice.innerHTML = `$ ${myData.price.toLocaleString()}.00`;
  itemDescription.innerHTML = `<h5>Information:</h5>  ${myData.decription}`;
};

export default renderSelectedItem;
