import render from "./renderFunction.js";
import selectItem from "../selectedItem/selectItem.js";
// const filterBNtn = document.querySelectorAll(".filter");
// const filterItems = (category = "All Products", myData) => {
//   const filteredDataWithCategories = myData.filter(
//     (item) => item.categories === category
//   );
//   const filterOther = myData.filter(
//     (item) => item.categories !== "Clothes" && item.categories !== "Electronics"
//   );

//   if (category === "All Products") {
//     render(myData, category);
//   } else if (category === "Clothes" || category === "Electronics") {
//     render(filteredDataWithCategories, category);
//   } else {
//     render(filterOther, category);
//   }
// };
// fetch data
const setUpDataShop = {
  api_url: "https://api.escuelajs.co/api/v1/products",

  fetchItems: async function () {
    try {
      const response = await fetch(this.api_url);
      const data = await response.json();
      this.pushItem(data);

      // render shop
      render(this.myData);
    } catch (err) {
      console.error(`${err} 💥💥💥💥`);
    }
  },

  myData: [],

  pushItem: function (data) {
    data.forEach((data) => {
      const items = {
        id: data.id,
        name: data.title,
        price: data.price,
        image: data.images[0],
        decription: data.description,
        qty: 1,
        categories: data.category.name,
      };
      this.myData.push(items);
    });
    return this.myData;
  },
};

export default setUpDataShop;
