import render from "./renderFunction.js";
import selectItem from "../selectedItem/selectItem.js";
// import renderSelectedItem from "../renderSelectedItem.js";
// fetch dat
const setUpDataShop = {
  api_url: "https://fakestoreapi.com/products",

  fetchItems: function () {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(this.api_url);
        const data = await response.json();
        // console.log(data);
        this.pushItem(data);
        // render shop
        render(this.myData);
        selectItem(this.myData);

        resolve();
      } catch (err) {
        console.error(`${err} 💥💥💥💥`);
        reject(err);
      }
    });
  },

  myData: [],

  pushItem: function (data) {
    data.forEach((data) => {
      const items = {
        id: data.id,
        name: data.title,
        price: data.price,
        image: data.image,
        decription: data.description,
        qty: 1,
      };
      this.myData.push(items);
    });
    return this.myData;
  },

  // filter() {
  //   const filteredItems = this.myData.filter((item) => {
  //     console.log(typeof item.price);
  //     return parseFloat(item.price) > 50;
  //   });
  //   console.log(filteredItems);
  // },
};

export default setUpDataShop;
