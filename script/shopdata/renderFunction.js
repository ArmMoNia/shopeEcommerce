import selectItem from "../selectedItem/selectItem.js";

const render = function (myData) {
  const showItems = document.querySelector(".show-products-items-list");
  showItems.innerHTML = "";
  for (let i = 0; i < 30; i++) {
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
                  <p class="product-desc">${myData[i].name}
                  </p >
        <p class="product-price">$ ${myData[i].price.toLocaleString()}</p>
      </div>
      
      <div>
      <i class="fa-thin fa-sharp fa-regular fa-heart fav"></i>
      </div>
    </div>
    `;
    showItems.insertAdjacentElement("beforeend", element);
  }
  selectItem(myData);
};

export default render;
