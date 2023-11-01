function init() {
  const to_top = document.querySelector(".to-top");
  function handleToTop() {
    if (window.scrollY > 50) {
      to_top.classList.add("visible");
    } else {
      to_top.classList.remove("visible");
    }
  }

  handleToTop();

  to_top && window.addEventListener("scroll", handleToTop);
}

document.addEventListener("DOMContentLoaded", init);
