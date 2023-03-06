// Search on Show Product content
const searchItemBtn = document.querySelector(".show-products-search-btn");
const searchItemBar = document.querySelector(".show-products-searchbar-box");
const dropDownArrow = document.querySelector(".show-products-searchbar-arrow");
const searchIcon = document.querySelector(".search-icon-on-top");
const searchBarOnTopHeader = document.querySelector(".search-bar-on-top");

const searchBarOnOverview = function () {
  searchItemBtn.addEventListener("click", function () {
    searchItemBar.classList.toggle("searchBarClick");
    searchItemBtn.classList.toggle("searchBtnClick");
    dropDownArrow.classList.toggle("searchDropClick");
    // ADD clear input value = ""
  });
};

// Search-icon-on-top
// Add More logic
// const searchBarOnTop = function () {
//   searchIcon.addEventListener("click", function () {
//     searchIcon.classList.add("disable-search-icon");
//     searchBarOnTopHeader.classList.add("show-search-bar-on-top");
//   });

//   searchBarOnTop.addEventListener("focusout", function () {
//     searchIcon.classList.remove("disable-search-icon");
//     searchBarOnTopHeader.classList.remove("show-search-bar-on-top");
//   });
// };
export default searchBarOnOverview;
