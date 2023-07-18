var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  $(document).ready(function () {
    $(".nav-bar").click(function () {
      $(".mobile-menu").addClass("mobile-menu-active")
      
      $(".close-menu").click(function () {
        $(".mobile-menu").removeClass("mobile-menu-active")
      })
  
    })
  
  })