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

    
    //back to top button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

