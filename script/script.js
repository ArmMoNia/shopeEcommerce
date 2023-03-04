// sticky Header when scroll

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-container");
  header.classList.toggle("sticky-header", window.scrollY > 0);
});

// Show Prev Next button when hover
const banner = document.querySelector(".banner");
const bannerBtnNext = document.querySelector(".banner-button-next");
const bannerBtnPrev = document.querySelector(".banner-button-prev");

banner.addEventListener("mouseover", function () {
  bannerBtnNext.classList.add("show-banner-btn");
  bannerBtnPrev.classList.add("show-banner-btn");
});

banner.addEventListener("mouseout", function () {
  bannerBtnNext.classList.remove("show-banner-btn");
  bannerBtnPrev.classList.remove("show-banner-btn");
});

// Change BG home page auto
const backGround = [
  {
    id: "bg1",
    url: `url("assets/bg/woman-leather-jacket.jpg")`,
  },
  {
    id: "bg2",
    url: `url("assets/bg/sad-cute-guy-leather-black-jacket.jpg")`,
  },
  {
    id: "bg3",
    url: `url("assets/bg/male-dressed-warm-jacket.jpg")`,
  },
];

let backGroundIndex = 0;
banner.style.backgroundImage = backGround[backGroundIndex].url;

let bgChange = setInterval(() => {
  backGroundIndex = (backGroundIndex + 1) % backGround.length;
  banner.style.backgroundImage = backGround[backGroundIndex].url;
}, 5000);

// Change BG home page when click btn prev or next
// Next
bannerBtnNext.addEventListener("click", function () {
  if (backGroundIndex === 0) {
    backGroundIndex = 1;
    banner.style.backgroundImage = backGround[backGroundIndex].url;
  } else if (backGroundIndex === 1) {
    backGroundIndex = 2;
    banner.style.backgroundImage = backGround[backGroundIndex].url;
  } else {
    backGroundIndex = 0;
    banner.style.backgroundImage = backGround[backGroundIndex].url;
  }
  clearInterval(bgChange);
  bgChange = setInterval(() => {
    backGroundIndex = (backGroundIndex + 1) % backGround.length;
    banner.style.backgroundImage = backGround[backGroundIndex].url;
  }, 5000);
});

// Prev
bannerBtnPrev.addEventListener("click", function () {
  if (backGroundIndex === 0) {
    backGroundIndex = 2;
    banner.style.backgroundImage = backGround[backGroundIndex].url;
  } else if (backGroundIndex === 1) {
    backGroundIndex = 0;
    banner.style.backgroundImage = backGround[backGroundIndex].url;
  } else {
    backGroundIndex = 1;
    banner.style.backgroundImage = backGround[backGroundIndex].url;
  }
  clearInterval(bgChange);
  bgChange = setInterval(() => {
    backGroundIndex = (backGroundIndex + 1) % backGround.length;
    banner.style.backgroundImage = backGround[backGroundIndex].url;
  }, 5000);
});

// Search on Show Product content
const searchItemBtn = document.querySelector(".show-products-search-btn");
const searchItemBar = document.querySelector(".show-products-searchbar-box");
const dropDownArrow = document.querySelector(".show-products-searchbar-arrow");

searchItemBtn.addEventListener("click", function () {
  searchItemBar.classList.toggle("searchBarClick");
  searchItemBtn.classList.toggle("searchBtnClick");
  dropDownArrow.classList.toggle("searchDropClick");
  // ADD clear input value = ""
});

// Search-icon-on-top
// Add More logic
const searchIcon = document.querySelector(".search-icon-on-top");
const searchBarOnTop = document.querySelector(".search-bar-on-top");

searchIcon.addEventListener("click", function () {
  searchIcon.classList.add("disable-search-icon");
  searchBarOnTop.classList.add("show-search-bar-on-top");
});

searchBarOnTop.addEventListener("focusout", function () {
  searchIcon.classList.remove("disable-search-icon");
  searchBarOnTop.classList.remove("show-search-bar-on-top");
});
