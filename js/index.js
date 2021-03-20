$(function(){
    $(document).scroll(function(){
         if($(this).scrollTop() >= $('.sticky').offset().top) {
              $(".navbar").addClass("navbar-stuck");
              $(".logo").attr("src", "images/Logo.png");
              $(".search").attr("src", "images/search.png");
              $(".globe").attr("src", "images/world-icon.png");
              $(".menu__btn").addClass("menu__btn-black");
       
          } else {
              $(".navbar").removeClass("navbar-stuck");
              $(".logo").attr("src", "images/logo-white.png");
              $(".search").attr("src", "images/Search-White.png");
              $(".globe").attr("src", "images/World-white.png");
              $(".menu__btn").removeClass("menu__btn-black");

          }
      });
    });