const blackDrop = document.querySelector(".overlay");
const closeItemDetail = document.querySelector(".close-popup");
const cartBar = document.querySelector(".cart-bar");
const showItemDetail = document.querySelector(".popup-item-detail");
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
  },
  // Closed pop up
  closePopUp() {
    const closed = () => this.closeHelper();
    if (!blackDrop.classList.contains("hidden")) {
      closeItemDetail.addEventListener("click", function () {
        closed();
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
