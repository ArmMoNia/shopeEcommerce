import render from "./renderFunction.js";
import showDetailItem from "./showItemDetail.js";
// fetch data
const api_url = "https://fakestoreapi.com/products";
const fetchItems = async function () {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    itemObject(data);
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
fetchItems();

// store All data item
let myData = [];
const itemObject = function (data) {
  data.forEach((data) => {
    const items = {
      name: data.title,
      price: data.price,
      image: data.image,
      decription: data.description,
    };
    myData.push(items);
  });
  render(myData);
  showDetailItem();
};

export default myData;
