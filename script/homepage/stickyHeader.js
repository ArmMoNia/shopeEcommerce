// sticky Header when scroll

const header = document.querySelector(".header-container");
const stickyHeader = () => {
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky-header", window.scrollY > 0);
  });
};

export default stickyHeader;
