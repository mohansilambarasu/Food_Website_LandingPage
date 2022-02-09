// AOS Library
AOS.init();
//Loader function
$(window).on("load",function() {
  $(".loader-wrapper").fadeOut("slow");
})

$(".additionalmenus").hide();
$(document).ready(function(){
  $(this).scrollTop(0);
});


//HOME CONTAINER
$(".navContainer").hide();
$(".navbar-brand").hide();
// navbar Scroll
$(window).on('scroll', function() {
    $(".navContainer").show();
    $(".nav-link").fadeIn("slow");
    $(".navbar-brand").fadeIn("slow");
});

//Show more Menu

$('.vmore').click(function(){
  $('.vmore').hide();
  $(".additionalmenus").fadeIn("slow");
});


// mob version collapse navbar on click
$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});

$('#carouselExampleFade').hide();

function aboutCarousel() {
  $('.abouts').hide();
  $('#carouselExampleFade').show();

}
