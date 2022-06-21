// Swiper JS Code-----

new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
     autoplay: {
       delay:2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
