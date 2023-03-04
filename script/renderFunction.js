const render = function (myData) {
  const showItems = document.querySelector(".show-products-items-list");
  for (let i = 0; i < myData.length; i++) {
    const element = document.createElement("div");
    element.classList.add("show-products-items-card");
    element.innerHTML = `
          <div class="show-products-items-img">
              <img class="product-img"
                     src="${myData[i].image}"
               />

          </div>
          <div class="show-products-items-detail">
              <div>
                  <p class="product-desc">${
                    myData[i].name.length > 20
                      ? myData[i].name.slice(0, 21) + ".."
                      : myData[i].name
                  }
                  </p >
        <p class="product-price">$ ${myData[i].price}</p>
      </div>
      <div>
        <img style="height: 20px" src="assets/Icons/fav.png" />
      </div>
    </div>
    `;
    showItems.insertAdjacentElement("beforeend", element);
  }
};
export default render;
