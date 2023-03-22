import setUpDataShop from "./shopdata/fetchDataToShowProducts.js";
import renderBg from "./homepage/renderHomePageBG.js";
import stickyHeader from "./homepage/stickyHeader.js";
// import searchBarOnOverview from "./helper/searchBar.js";
import cart from "./cart/cart.js";
import navigationPage from "./helper/scroll.js";

// sticky header when scroll
stickyHeader();

// get shopdata
setUpDataShop.fetchItems();

// render background
renderBg.activeBg();

// open cart
cart.openCart();

// navigator page
navigationPage.scroll();
