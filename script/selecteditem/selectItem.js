import renderSelectedItem from "./renderSelectedItem.js";
import popUpHelper from "../helper/popUp.js";
import addItemToCartBar from "../cart/cartBar.js";

const addToCartBtn = document.querySelector(".item-detail-add-to-cart-btn");
const increaseQtyBtn = document.getElementById("increaseQty");
const decreaseQtyBtn = document.getElementById("decreaseQty");
const itemQty = document.getElementById("itemQty");
let cartData = [];
const selectItem = function (myData) {
  // init data
  let addItem;
  let qty = 1;
  itemQty.innerHTML = qty;

  let productsImg = document.querySelectorAll(".show-products-items-img");

  productsImg.forEach((img, index) => {
    img.addEventListener("click", () => {
      myData.forEach((data) => {
        if (myData.indexOf(data) === index) {
          const copyObj = Object.assign({}, myData[index]);
          renderSelectedItem(copyObj);
          console.log(copyObj);
          addItem = copyObj;
        }
      });
    });
  });

  //  increase Qty
  increaseQtyBtn.addEventListener("click", function () {
    qty++;
    addItem.qty = qty;
    itemQty.innerHTML = qty;
  });
  //  decrease Qty
  decreaseQtyBtn.addEventListener("click", function () {
    qty > 1 ? qty-- : qty;
    addItem.qty = qty;
    itemQty.innerHTML = qty;
  });
  // add to cart function
  const addToCart = () => {
    cartData.push(addItem);
    addItemToCartBar(cartData);
    qty = 1;
    itemQty.innerHTML = qty;
    popUpHelper.closeImmediately();
  };
  addToCartBtn.addEventListener("click", () => addToCart());
};

export default selectItem;
