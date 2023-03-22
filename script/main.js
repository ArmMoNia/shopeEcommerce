import setUpDataShop from "./shopdata/fetchDataToShowProducts.js";
import renderBg from "./homepage/renderHomePageBG.js";
import stickyHeader from "./homepage/stickyHeader.js";
import cart from "./cart/cart.js";
import navigationPage from "./helper/scroll.js";

// sticky header when scroll
stickyHeader();
// render background
renderBg.activeBg();
// navigator page
navigationPage.scroll();

// get shopdata
setUpDataShop.fetchItems();

// open cart
cart.openCart();
