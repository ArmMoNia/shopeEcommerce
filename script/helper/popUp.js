const blackDrop = document.querySelector(".overlay");
const closePopup = document.querySelectorAll(".close-popup");
const cartBar = document.querySelector(".cart-bar");
const showItemDetail = document.querySelector(".popup-item-detail");
const checkout = document.querySelector(".checkout");
const closeCheckout = document.querySelector(".close-checkout");
const popUpHelper = {
  showItemPopUp() {
    if (blackDrop.classList.contains("hidden")) {
      blackDrop.classList.remove("hidden");
    }
  },
  closeHelper() {
    blackDrop.classList.add("hidden");
    cartBar.classList.remove("show-cart-bar");
    showItemDetail.classList.add("hidden");
    checkout.classList.add("hidden");
  },
  // Closed pop up
  closePopUp() {
    const closed = () => this.closeHelper();
    if (!blackDrop.classList.contains("hidden")) {
      closePopup.forEach((close) => {
        close.addEventListener("click", function () {
          closed();
        });
      });

      blackDrop.addEventListener("click", function () {
        closed();
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closed();
        }
      });
    }
  },
  closeImmediately() {
    blackDrop.classList.add("hidden");
    cartBar.classList.remove("show-cart-bar");
    showItemDetail.classList.add("hidden");
  },

  active() {
    this.showItemPopUp();
    this.closePopUp();
  },
};
export default popUpHelper;
