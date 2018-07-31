$(function() {
  //Global Function Instances for home page
  lazyLoad();
  jeepCarousel();
  replaceBanner();

  function lazyLoad(){
    //lazy loading of home page images
    $('.lazy').Lazy({
     scrollDirection: 'vertical',
     effect: 'fadeIn',
     visibleOnly: true,
     onError: function(element) {
         console.log('error loading ' + element.data('src'));
     }
     });
   }

  function jeepCarousel(){
   //slick-intializer function
   if ( $(window).width() > 1300) {
     $('.m6-container-2').slick({
     infinite: true,
     speed: 1000,
     slidesToShow: 5,
     slidesToScroll: 5
     });
   }
   if ( $(window).width() < 1300) {
     $('.m6-container-2').slick({
     infinite: true,
     speed: 1000,
     slidesToShow: 4,
     slidesToScroll: 4
     });
   }


   //click events to use arrow images for slick
   $('.arrow-container-right').click(function(){
   //clicks the hidden slick button
   $(this).nextAll('.slick-slider').children('.slick-next').click();
   });

   $('.arrow-container-left').click(function(){
   //clicks the hidden slick button
   $(this).nextAll('.slick-slider').children('.slick-prev').click();
   });
  }

  function replaceBanner(){
    //on load, if window is < 1300 put in 1300 px banner image. If greater, put in 1600px img.
    $( window ).load(function(){
      if ( $(window).width() < 1300) {
        $('#module_1 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-1300x700.jpg?14706016953290747106')
        $('#module_8 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/Charity-1330x700.jpg?8524417848302725016')

      }
      if ( $(window).width() > 1300 && $(window).width() < 1900 ) {
        $('#module_1 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-1600x700.jpeg?13491975798892725116')
        $('#module_8 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/Charity-1600x700.jpg?8524417848302725016')
      }
      if ( $(window).width() > 1900) {
        $('#module_1 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-2000x700-logos.jpg?11215943449077199441')
        $('#module_8 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/Charity-1600x700.jpg?8524417848302725016')
      }
    });
    //on window resize, if window is < 1300 and it has the 1600px img, put in 1300 px banner image. If greater and has 1300px img, put in 1600px img.
    $( window ).resize(function() {
      if ( $(window).width() < 1300 && $('#module_1 img.background').attr('src') == 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-1600x700_04a7e618-4f78-44f0-bdc0-8478966b4871.jpg?13491975798892725116' ) {
        // console.log(' less than 1300px and 1600px img');
        $('#module_1 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-1330x700.jpg?5282621772418169206');
        $('#module_8 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/Charity-1330x700.jpg?8524417848302725016')

      }
      if ( $(window).width() > 1300 && $(window).width() < 1900 && $('#module_1 img.background').attr('src') == 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-1300x700.jpg?9529061808133360917' || $('#module_1 img.background').attr('src') == 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-2000x700-logos.jpg?11215943449077199441' ) {
        // console.log(' greater than 1300px and 1300px img')
        $('#module_1 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-1600x700_04a7e618-4f78-44f0-bdc0-8478966b4871.jpg?9529061808133360917')
        $('#module_8 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/Charity-1600x700.jpg?8524417848302725016')

      }
      if ( $(window).width() > 1900 && $('#module_1 img.background').attr('src') == 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-1600x700_04a7e618-4f78-44f0-bdc0-8478966b4871.jpg?9529061808133360917' ) {
        // console.log(' greater than 1300px and 1300px img')
        $('#module_1 img.background').attr('src', 'https://cdn.shopify.com/s/files/1/0578/7201/files/header-2000x700-logos.jpg?11215943449077199441')
      }
    });
  }

});//end onload fuction
