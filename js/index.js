$(function(){
    $(document).scroll(function(){
         if($(this).scrollTop() >= $('#ourCompany').offset().top) {
              $(".navbar").addClass("navbar-stuck");
              $(".logo").attr("src", "images/Logo.png");
              $(".search").attr("src", "images/search.png");
              $(".globe").attr("src", "images/world-icon.png");

              
          } else {
              $(".navbar").removeClass("navbar-stuck");
              $(".logo").attr("src", "images/logo-white.png");
              $(".search").attr("src", "images/Search-White.png");
              $(".globe").attr("src", "images/World-white.png");

          }
      });
    });