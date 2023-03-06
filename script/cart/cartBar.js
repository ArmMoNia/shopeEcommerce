import popUpHelper from "../helper/popUp.js";
const closeCart = document.getElementById("closeCart");
closeCart.addEventListener("click", function () {
  popUpHelper.closeHelper();
});

// display cart bar
const addItemToCartBar = function (addItem) {
  let totalPrice = 0;
  const totalPriceDisplay = document.querySelector(".cart-bar-total-price");
  const checkOutBtn = document.querySelector(".cart-bar-checkout");
  const cartItemList = document.querySelector(".cart-bar-item-list");
  // add logic for init
  if (addItem.length === 0) {
    // render if have no item that user add to cart
    totalPriceDisplay.classList.add("hidden");
    checkOutBtn.classList.add("hidden");
    cartItemList.innerHTML = `<div class="cart-bar-no-item">No Item, Let's shop some cloths!!!</div>`;
  } else {
    // render item that user add to cart
    cartItemList.innerHTML = addItem
      .map((item) => {
        totalPrice = totalPrice + item.price * item.qty;
        return `<div class="cart-bar-my-item">
      <div class="cart-bar-my-item-img">
        <img class="cart-bar-my-item-display" src="${item.image}"  />
      </div>
      <div class="cart-bar-my-item-info">
          <p class="cart-bar-my-item-name">${
            item.name.length > 16 ? item.name.slice(0, 16) + ".." : item.name
          }</p>
          <p class="cart-bar-my-item-qty">Qty: ${item.qty}</p>
          <p class="cart-bar-my-item-price">$ ${item.price * item.qty} </p>
      </div>
      <button class="delItem">Del</button>
      </div>
      `;
      })
      .join("");
    totalPriceDisplay.classList.remove("hidden");
    checkOutBtn.classList.remove("hidden");
    totalPriceDisplay.innerHTML = `Total: $ ${totalPrice.toLocaleString()}`;
  }
  // add delItem logic
  if (addItem.length > 0) {
    const delItem = document.querySelectorAll(".delItem");
    delItem.forEach((del, index) => {
      del.addEventListener("click", () => {
        addItem.splice(index, 1);
        addItemToCartBar(addItem);
      });
    });
  }
};

export default addItemToCartBar;
