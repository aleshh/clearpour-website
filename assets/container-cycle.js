const drinkMarkImages = document.querySelectorAll(".hero-drink-mark img");

if (drinkMarkImages.length > 1) {
  let activeIndex = 0;

  const showNextImage = () => {
    drinkMarkImages[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % drinkMarkImages.length;
    drinkMarkImages[activeIndex].classList.add("is-active");

    window.setTimeout(showNextImage, 3000);
  };

  window.setTimeout(showNextImage, 2500);
}
