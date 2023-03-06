const banner = document.querySelector(".banner");
const bannerBtnNext = document.querySelector(".banner-button-next");
const bannerBtnPrev = document.querySelector(".banner-button-prev");
// Show Prev Next button when hover
// show next and prev btn to change bg

const renderBg = {
  hoverBtn() {
    banner.addEventListener("mouseover", function () {
      bannerBtnNext.classList.add("show-banner-btn");
      bannerBtnPrev.classList.add("show-banner-btn");
    });
    banner.addEventListener("mouseout", function () {
      bannerBtnNext.classList.remove("show-banner-btn");
      bannerBtnPrev.classList.remove("show-banner-btn");
    });
  },
  backGroundIndex: 0,
  backGround: [
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
  ],
  // showBg home page
  showBg() {
    banner.style.backgroundImage = this.backGround[this.backGroundIndex].url;
  },
  // changeBg home page every x sec
  changeBg() {
    this.showBg();
    this.intervalId = setInterval(() => {
      this.backGroundIndex =
        (this.backGroundIndex + 1) % this.backGround.length;
      this.showBg();
    }, 5000);
  },
  // click next btn to change next bg
  nextBg() {
    bannerBtnNext.addEventListener("click", () => {
      clearInterval(this.intervalId);
      this.backGroundIndex =
        (this.backGroundIndex + 1) % this.backGround.length;
      this.changeBg();
    });
  },
  // click prev btn to change prev bg
  prevBg() {
    bannerBtnPrev.addEventListener("click", () => {
      clearInterval(this.intervalId);
      this.backGroundIndex === 0
        ? (this.backGroundIndex = this.backGround.length - 1)
        : (this.backGroundIndex =
            (this.backGroundIndex - 1) % this.backGround.length);
      this.changeBg();
    });
  },
  // active all function about Bg
  activeBg() {
    this.changeBg();
    this.hoverBtn();
    this.nextBg();
    this.prevBg();
  },
};

export default renderBg;
