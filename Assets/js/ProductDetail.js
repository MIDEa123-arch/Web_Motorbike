function selectColor(element) {
  document
    .querySelectorAll(".color-circle")
    .forEach((el) => el.classList.remove("selected"));
  element.classList.add("selected");
}

function changeImg(picDiv) {
  const clickedImg = picDiv.querySelector("img");
  const mainImage = document.getElementById("mainImg");
  mainImage.src = clickedImg.src;
  mainImage.style.width = "450px";
  mainImage.style.height = "300px";
  mainImage.style.marginLeft = "40px";
}
