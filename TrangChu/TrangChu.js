const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next", // Selector cho span next
    prevEl: ".swiper-button-prev", // Selector cho span prev
  },
});

document.querySelectorAll(".card, .card2").forEach((card) => {
  card.addEventListener("click", function () {
    // Đóng tất cả các card đang mở, trừ card đang được click
    document
      .querySelectorAll(".card.active, .card2.active")
      .forEach((activeCard) => {
        if (activeCard !== this) {
          activeCard.classList.remove("active");
        }
      });

    // Toggle card đang được click
    this.classList.toggle("active");
  });
});
