const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next", // Selector cho span next
    prevEl: ".swiper-button-prev", // Selector cho span prev
  },
});

var cards = document.querySelectorAll(".card, .card2");

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    var activeCards = document.querySelectorAll(".card.active, .card2.active");

    for (var j = 0; j < activeCards.length; j++) {
      if (activeCards[j] !== this) {
        activeCards[j].classList.remove("active");
      }
    }

    this.classList.toggle("active");
  });
}
