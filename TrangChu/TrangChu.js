const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next", // Selector cho span next
    prevEl: ".swiper-button-prev", // Selector cho span prev
  },
  // ... các cấu hình khác của bạn
});
