// display cart bar
let totalPrice = 0;
const addItemToCartBar = function (addItem, qty) {
  const cartItemList = document.querySelector(".cart-bar-item-list");
  const totalPriceDisplay = document.querySelector(".cart-bar-total-price");

  const element = document.createElement("div");
  element.classList.add("cart-bar-my-item");
  element.innerHTML = `
            <div class="cart-bar-my-item-img">
              <img class="cart-bar-my-item-display" src="${addItem.image}"  />
            </div>
            <div class="cart-bar-my-item-info">
                <p class="cart-bar-my-item-name">${
                  addItem.name.length > 16
                    ? addItem.name.slice(0, 16) + ".."
                    : addItem.name
                }</p>
                <p class="cart-bar-my-item-qty">Qty: ${addItem.qty}</p>
                <p class="cart-bar-my-item-price">$ ${
                  addItem.price * addItem.qty
                } </p>
            </div>
            `;
  totalPrice += Number(addItem.price * addItem.qty);
  totalPriceDisplay.innerHTML = `Total: $${totalPrice.toLocaleString()}`;
  cartItemList.insertAdjacentElement("beforeend", element);
};

export default addItemToCartBar;
