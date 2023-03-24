const checkOutBtn = document.querySelector(".cart-bar-checkout-btn");
const renderCheckout = document.querySelector(".checkout");
const cartBar = document.querySelector(".cart-bar");
const checkout = document.querySelector(".checkout");
const checkoutTable = document.querySelector(".product-sum-table");
const subtotalCheckout = document.getElementById("subtotal-checkout");
const totalCheckout = document.getElementById("total-checkout");
const shipFees = document.getElementById("shipping-checkout");

let itemCheckout = [];
let totalPriceCheckout = 0;
let qtyForFees = 0;
const checkOut = (addItem) => {
  itemCheckout = addItem;
};

checkOutBtn.addEventListener("click", () => {
  // pop up checkout cart
  checkout.classList.remove("hidden");
  renderCheckout.classList.remove("hidden");
  // Keep backdrop
  cartBar.classList.remove("show-cart-bar");
  console.log(itemCheckout);
  renderCheckOut(itemCheckout);
});

const tableHead = `<thead>
                  <tr class="product-sum-head">
                      <th>PRODUCT</th>
                      <th></th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>TOTAL</th>
                  </tr></thead>`;

const renderCheckOut = (itemCheckout) => {
  checkoutTable.innerHTML =
    tableHead +
    "<tbody class='arm'>" +
    itemCheckout
      .map((item) => {
        const total = item.qty * item.price;
        totalPriceCheckout += total;
        qtyForFees += item.qty * 5;
        return `<tr class="product-sum-detail">
    <td>
      <img
        class="testimg"
        src="${item.image}"
      />
    </td>
    <td>${item.name}</td>
    <td>$ ${item.price.toLocaleString()}.00</td>
    <td>${item.qty}</td>
    <td>$ ${total.toLocaleString()}.00</td>
  </tr>
  `;
      })
      .join("") +
    "</tbody>";
  shipFees.innerHTML = "$" + qtyForFees.toLocaleString() + ".00";
  subtotalCheckout.innerHTML =
    "$" + totalPriceCheckout.toLocaleString() + ".00";
  totalCheckout.innerHTML =
    "$" + (totalPriceCheckout + qtyForFees).toLocaleString() + ".00";
};

export default checkOut;
