// display cart bar
let totalPrice = 0;

const addItemToCartBar = function (addItem) {
  const totalPriceDisplay = document.querySelector(".cart-bar-total-price");
  const checkOutBtn = document.querySelector(".cart-bar-checkout");

  addItem.map(() => {});
  console.log(addItem);
  document.querySelector(".cart-bar-item-list").innerHTML = addItem
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
      </div>
      `;
    })
    .join("");
  console.log(totalPrice);

  totalPriceDisplay.classList.remove("hidden");
  checkOutBtn.classList.remove("hidden");
  totalPriceDisplay.innerHTML = `Total: $ ${totalPrice.toLocaleString()}`;
};

export default addItemToCartBar;
