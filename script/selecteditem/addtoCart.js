const addToCartBtn = document.querySelector(".item-detail-add-to-cart-btn");
const itemName = document.querySelector(".item-detail-info-name");
const itemPrice = document.querySelector(".item-detail-info-price");
const itemQty = document.getElementById("itemQty");
const cartItem = [];
const add = () => {
  addToCartBtn.addEventListener("click", () => {
    console.log(itemName.innerHTML, itemPrice.innerHTML, itemQty.innerHTML);
  });
};

export default add;
