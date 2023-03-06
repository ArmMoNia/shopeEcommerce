import renderSelectedItem from "./renderSelectedItem.js";
import popUpHelper from "../helper/popUp.js";
import addItemToCartBar from "../cart/cartBar.js";

const addToCartBtn = document.querySelector(".item-detail-add-to-cart-btn");
const increaseQtyBtn = document.getElementById("increaseQty");
const decreaseQtyBtn = document.getElementById("decreaseQty");
const itemQty = document.getElementById("itemQty");

const selectItem = function (myData) {
  // init data
  let addItem;
  let qty = 1;
  let cartData = [];
  itemQty.innerHTML = qty;

  const productsImg = document.querySelectorAll(".show-products-items-img");
  productsImg.forEach((img, index) => {
    img.addEventListener("click", () => {
      myData.forEach((data) => {
        if (data.id === index + 1) {
          const copyObj = Object.assign({}, myData[index]);
          renderSelectedItem(myData[index]);
          addItem = copyObj;
          console.log(addItem);
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
    qty >= 1 ? qty-- : qty;
    addItem.qty = qty;
    itemQty.innerHTML = qty;
  });
  // add to cart function
  const addToCart = () => {
    cartData.push(addItem);
    console.log(cartData);

    addItemToCartBar(cartData);
    qty = 1;
    itemQty.innerHTML = qty;
    popUpHelper.closeImmediately();
  };

  // Click add to cart
  addToCartBtn.addEventListener("click", addToCart);
};

export default selectItem;
