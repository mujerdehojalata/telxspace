// $(function() {  
//     var header = $("#mainNav");
//     var services = $("#services").outerHeight();
//     var footer = $("footer").outerHeight() + services;
//     $(window).scroll(function(event) {
//         height = $(event.target).scrollTop();
//         if (height > -1 && height < services -200) {
//             header.addClass("nav-transparent").removeClass("nav-black");
//         } else {
//             header.addClass("nav-black").removeClass("nav-transparent");
//         }
//     });
// });

// ANOTHER JS SCROLL
// function scrollNav() {
//   $('#mainNav a').click(function(){  
//     //Toggle Class
//     $(".active").removeClass("active");      
//     $(this).closest('li').addClass("active");
//     var theClass = $(this).attr("class");
//     $('.'+theClass).parent('li').addClass('active');
//     //Animate
//     $('html, body').stop().animate({
//         scrollTop: $( $(this).attr('href') ).offset().top + 50
//     }, 400);
//     return false;
//   });
// }
// scrollNav();

$(document).ready(function () {
    $('.responsive').slick({
      dots: true,
      infinite: false,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});