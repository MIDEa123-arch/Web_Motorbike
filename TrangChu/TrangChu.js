const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next", // Selector cho span next
    prevEl: ".swiper-button-prev", // Selector cho span prev
  },
});

// Lắng nghe sự kiện click vào thẻ card
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("active"); // Thêm hoặc bỏ lớp 'active' khi click
  });
});
