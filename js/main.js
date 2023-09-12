$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin : 20,
        loop: true ,
        rtl:true,
        nav: true,
        dots: false,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText : [
            "<i class='fas fa-chevron-right'></i>",
            "<i class='fas fa-chevron-left'></i>" 
        ],
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false,
            },
            599:{
                items:2
            },
            769:{
                items:3
            }
        }
    });
  });