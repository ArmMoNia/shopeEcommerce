const navigationPage = {
  shopNow: document.querySelectorAll(".to-shop"),
  scroll() {
    this.shopNow.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      });
    });
  },
};

export default navigationPage;
