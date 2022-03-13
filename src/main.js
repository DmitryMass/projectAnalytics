function slidePlugin(activeSlide) {
  let slides = document.querySelectorAll(".list-item");

  slides[activeSlide].classList.add("active");
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      deleteActiveBtn();
      slide.classList.add("active");
    });
  }

  function deleteActiveBtn() {
    slides.forEach((item) => {
      item.classList.remove("active");
    });
  }
}
slidePlugin(1);
