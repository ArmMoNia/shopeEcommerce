import setUpDataShop from "./shopdata/fetchDataToShowProducts.js";
import renderBg from "./homepage/renderHomePageBG.js";
import stickyHeader from "./homepage/stickyHeader.js";
import searchBarOnOverview from "./helper/searchBar.js";
import cart from "./cart/cart.js";

// sticky header when scroll
stickyHeader();

// get shopdata
setUpDataShop.fetchItems();
setUpDataShop.myData.adEven;
console.log(setUpDataShop.myData);

// render background
renderBg.activeBg();

// Show search bar when clcik search bar on porduct overview apge
searchBarOnOverview();

cart.openCart();
