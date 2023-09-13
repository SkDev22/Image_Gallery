let gallaryContainer = document.querySelector(".gallary");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

gallaryContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  gallaryContainer.scrollLeft += evt.deltaY;
  gallaryContainer.style.scrollBehavior = "auto";
});

backBtn.addEventListener("click", () => {
  gallaryContainer.style.scrollBehavior = "smooth";
  gallaryContainer.scrollLeft += 900;
});

nextBtn.addEventListener("click", () => {
  gallaryContainer.style.scrollBehavior = "smooth";
  gallaryContainer.scrollLeft -= 900;
});
