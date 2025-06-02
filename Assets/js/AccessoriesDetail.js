// js cho hình ảnh
document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("product-image");
  const thumbnails = document.querySelectorAll(".thumbnail img");
  const thumbnailWrappers = document.querySelectorAll(".thumbnail");
  const prevBtn = document.querySelector(".control-btn.prev");
  const nextBtn = document.querySelector(".control-btn.next");

  let currentIndex = 0;
  const imageSources = Array.from(thumbnails).map((img) => img.src);

  function updateMainImage(index) {
    currentIndex = index;
    mainImage.src = imageSources[currentIndex];

    thumbnailWrappers.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === currentIndex);
    });
  }

  prevBtn.addEventListener("click", function () {
    const newIndex =
      (currentIndex - 1 + imageSources.length) % imageSources.length;
    updateMainImage(newIndex);
  });

  nextBtn.addEventListener("click", function () {
    const newIndex = (currentIndex + 1) % imageSources.length;
    updateMainImage(newIndex);
  });

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", function () {
      updateMainImage(index);
    });
  });
});

//js cho số lượng
document.addEventListener("DOMContentLoaded", function () {
  const qtyInput = document.querySelector(".quantity-selector .amount");
  const btnPlus = document.querySelector(".quantity-selector .qty-btn.plus");
  const btnMinus = document.querySelector(".quantity-selector .qty-btn.minus");

  btnPlus.addEventListener("click", () => {
    let currentValue = parseInt(qtyInput.value) || 1;
    const max = parseInt(qtyInput.max) || 99;
    if (currentValue < max) {
      qtyInput.value = currentValue + 1;
    }
  });

  btnMinus.addEventListener("click", () => {
    let currentValue = parseInt(qtyInput.value) || 1;
    const min = parseInt(qtyInput.min) || 1;
    if (currentValue > min) {
      qtyInput.value = currentValue - 1;
    }
  });

  // Optional: đảm bảo người dùng nhập trực tiếp không vượt quá min/max
  qtyInput.addEventListener("input", () => {
    let value = parseInt(qtyInput.value) || 1;
    const min = parseInt(qtyInput.min) || 1;
    const max = parseInt(qtyInput.max) || 99;
    if (value < min) qtyInput.value = min;
    else if (value > max) qtyInput.value = max;
  });
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

function activateTab(tabId) {
  tabButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId)
  );
  tabPanes.forEach((pane) =>
    pane.classList.toggle("active", pane.id === tabId)
  );
}

// Mặc định bật tab "specs"
activateTab("specs");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.getAttribute("data-tab"));
  });
});
