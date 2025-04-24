const filterButtons = document.querySelectorAll(".menu button");
const filterableSections = document.querySelectorAll(".product .pro");

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    document.querySelector(".menu .active")?.classList.remove("active");
    e.target.classList.add("active");

    const selectedType = e.target.getAttribute("data-type");
    filterSections(selectedType);
  });
});

function filterSections(type) {
  filterableSections.forEach((section) => {
    const sectionType = section.getAttribute("data-type");
    const title = section.querySelector(".type");

    if (type === "All") {
      section.style.display = "block";
      if (title) title.style.display = "block"; // Hiện tiêu đề
    } else if (sectionType === type) {
      section.style.display = "block";
      if (title) title.style.display = "none"; // Ẩn tiêu đề
    } else {
      section.style.display = "none";
    }
  });
}

const urlParams = new URLSearchParams(window.location.search);
const filterType = urlParams.get("filter");

if (filterType) {
  filterSections(filterType);

  // Cập nhật nút active tương ứng
  filterButtons.forEach((button) => {
    const btnType = button.getAttribute("data-type");
    if (btnType === filterType) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
