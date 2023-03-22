const addToCartBtn = document.querySelector(".item-detail-add-to-cart-btn");
const cartItem = [];
const add = (x, cate = "All Product(default)") => {
  addToCartBtn.addEventListener("click", () => {
    console.log(x, cate);
  });
};

export default add;
