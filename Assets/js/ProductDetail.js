function selectColor(element) {
  document
    .querySelectorAll(".color-circle")
    .forEach((el) => el.classList.remove("selected"));
  element.classList.add("selected");
}
