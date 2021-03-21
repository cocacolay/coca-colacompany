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


//secondary navigation - Soda
$(document).ready(function () {
    $('.soda').click(function () {
        $('#soda').animate({width:'toggle', height:'toggle'}, 500);
        $('#soda').show(); 
        $('.viewall-container').show();
        $('#brands').hide();
        $('#water').hide();   
        $('#juice').hide();
        $('#coffee').hide();
        $('#tea').hide();
        $('.exploremore').hide();        
    });
});

//secondary navigation - water
$(document).ready(function () {
    $('.water').click(function () {
        $('#water').animate({width:'toggle', height:'toggle'}, 500);
        $('#water').show(); 
        $('.viewall-container').show();
        $('#brands').hide();
        $('#soda').hide();   
        $('#juice').hide();
        $('#coffee').hide();
        $('#tea').hide();
        $('.exploremore').hide();     
    });
});

//secondary navigation - juice
$(document).ready(function () {
    $('.juice').click(function () {
        $('#juice').animate({width:'toggle', height:'toggle'}, 500);
        $('#juice').show(); 
        $('.viewall-container').show();
        $('#brands').hide();
        $('#soda').hide();   
        $('#water').hide();
        $('#coffee').hide();
        $('#tea').hide();
        $('.exploremore').hide();     
    });
});


//secondary navigation - coffee
$(document).ready(function () {
    $('.coffee').click(function () {
        $('#coffee').animate({width:'toggle', height:'toggle'}, 500);
        $('#coffee').show(); 
        $('.viewall-container').show();
        $('#brands').hide();
        $('#soda').hide();   
        $('#water').hide();
        $('#juice').hide();
        $('#tea').hide();
        $('.exploremore').hide();     
    });
});

//secondary navigation - tea
$(document).ready(function () {
    $('.tea').click(function () {
        $('#tea').animate({width:'toggle', height:'toggle'}, 500);
        $('#tea').show(); 
        $('.viewall-container').show();
        $('#brands').hide();
        $('#soda').hide();   
        $('#water').hide();
        $('#juice').hide();
        $('#coffee').hide();
        $('.exploremore').hide();     
    });
});


// view all button
$(document).ready(function () {
    $('.viewall-container').click(function () {
        $('#brands').animate({width:'toggle', height:'toggle'}, 500);
        $('#soda').hide();
        $('#water').hide();   
        $('#juice').hide();
        $('#coffee').hide();
        $('#tea').hide();
        $('.viewall-container').hide();
        $('#brands').show();
        $('.exploremore').show();        // HIDE THE DIV.
    });
});

//explore more button
$(document).ready(function () {
    $('.exploremore').click(function () {
        // Animate the div element. A duration is set to 500 milliseconds.
        $('.more').animate({}, 500);
        $('.more').show(); 
        $('.exploremore').hide();         // Also show the div element.
    });

    // REVERSE ANIMATE.
    $('.exploreless').click(function () {
        $('.more').animate({}, 500);
        $('.more').hide('fast');
        $('.exploremore').show();        // HIDE THE DIV.
    });
});

