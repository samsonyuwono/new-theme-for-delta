//Custom functionality for product pages
$(function() {
  //FUNCTION SCRIPT
  nameSwatch();
  hideShowSection();
  showReviewInHeader();
  makeYoutubeVid();
  fixedMobileBuy();
  globalStyling();
  mobileStyling();
  updateSkuGetQuant();

  //FUNCTION OBJECTS
  //prints name of selected swatch below swatches on load and on click
  function nameSwatch(){
    $('.product__thumbnails').show();
    $('.product__color input.single-option-selector').each(function(){
      var swatchName = $(this).parent().attr('title');
      if ($(this).is(':checked')) {
        $('.product__color label.color-swatch').removeClass('outline-swatch');
        $("<span class='swatch-name'>" + swatchName + "</span>").appendTo($(this).parent().parent());
        $(this).next().addClass('outline-swatch');
        hideVariantImages();
      }

      $(this).click(function(){
        $('.product__color label.color-swatch').removeClass('outline-swatch');
        $('.swatch-name').text(swatchName);
        $(this).next().addClass('outline-swatch');
        hideVariantImages();
      });
    });
  }
  function hideShowSection(){
    $('#section-titles .title').click(function(){
      if($(this).is(':contains("REVIEWS")')){
        $('#section-titles .title').removeClass('active');
        $('#product-info .section-info').hide();
        $('#product-info #reviews').show();
        $(this).addClass('active');
      }
      if($(this).is(':contains("DETAILS")')){
        $('#section-titles .title').removeClass('active');
        $('#product-info .section-info').hide();
        $('#product-info #prod-details').show();
        $(this).addClass('active');
      }
      if($(this).is(':contains("ACCESSORIES")')){
        $('#section-titles .title').removeClass('active');
        $('#product-info .section-info').hide();
        $('#product-info #access-adapt').show();
        $(this).addClass('active');
      }
      if($(this).is(':contains("ASSEMBLY")')){
        $('#section-titles .title').removeClass('active');
        $('#product-info .section-info').hide();
        $('#product-info #ass-instruct').show();
        $(this).addClass('active');
      }
    });
  }
  function hideVariantImages(){
    //gets style code of active swatch
    var test_str = $('.product__available-colors .swatch-name').text();
    var start_pos = test_str.indexOf('(') + 1;
    var end_pos = test_str.indexOf(')',start_pos);
    var text_to_get = test_str.substring(start_pos,end_pos)

    //shows only image variants that match active swatch style code in their alt tags
    var thumbnail = $('.product__thumbnails li.product__thumbnail');
    thumbnail.hide();
    thumbnail.each(function(){
      $(this).children("img[alt*='"+ text_to_get +"']").parent().show();
    });
    $('#access-adapt img').hide()
    $('#access-adapt').find("img[alt*='"+ text_to_get +"']").show();
    $('#access-adapt').find("img[alt='']").show();
  }
  function showReviewInHeader(){
    setTimeout(function(){
      $('.spr-header .spr-summary').clone().appendTo('.product__meta');
      $('.product__meta .spr-summary-actions').hide();
      //takes out the words "Based On" from header reivew preview
      $('.product__meta .spr-summary-actions-togglereviews').filter(function() {
        return $(this).children().length === 0;  // exclude divs with children
      }).text(function(index, text) {
      return text.replace(/Based on/g, '');
      });
    }, 1);
  }

  function makeYoutubeVid(){
  $("#product-video-container #prod-videos img").each(function(){
    $(this).addClass('product-youtube-video');
    youtubeLink = $(this).attr('alt');
    $(this).wrap('<a class="popup-youtube" href="'+ youtubeLink +'"></a>');
    $(this).parent().prependTo('.video-container');
    $("<img class='play-but' src='//cdn.shopify.com/s/files/1/0578/7201/files/play_button-white-01.png'>").prependTo($(this).parent());
    $(this).show();

  });
  $('#prod-videos').children().css('display', 'inline-block').css('padding', '0px 10px 10px 0px' );
  $('.popup-youtube').magnificPopup({

      disableOn: false,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
  });
  //checks to see if there are any product videos for product
  if($("#product-video-container #prod-videos .popup-youtube").length > 0){
    $('#product-video-container').show();
  }
}//end for products with youtube videos
function fixedMobileBuy(){
  //attaches mobile buy button and quantity to fixed div at bottom of screen
  if ($(window).width() < 800) {
  $('#fixed-bottom-mobile-buy').appendTo('body');
  $('#quantity.form__control, .product__payment-container').appendTo('#fixed-bottom-mobile-buy');
  $('#wheretobuywrapper p #test').appendTo('#fixed-bottom-mobile-buy');
  $('#fixed-bottom-mobile-buy').fadeIn("slow");
    //if product isn't dc-shop. If it doens't have "add to cart" button
    if($('#fixed-bottom-mobile-buy #test button').css('display') == 'inline-block'){
      $('#quantity.form__control').hide();
      $('.product__payment-container').hide();
      $('#fixed-bottom-mobile-buy').css('text-align', 'center');
    }
  }
}
function globalStyling(){
  //inserts JPMA image if JPMA is mentioned in the description paragraph
  if($('.product__description.rte').is(':contains("JPMA certified")')){
    $('.product__description.rte img').remove();
    $('<img style="float: right;" src="//cdn.shopify.com/s/files/1/0578/7201/files/delta-jpma-icon_16775bb7-9f74-4009-a659-bab8ed16222a.jpg">').prependTo($('.product__description.rte p:first-child'));
  }
}
function mobileStyling(){
  if ($(window).width() < 800) {
    $('#section-titles .title:nth-child(2)').text('DETAILS');
    $('#section-titles .title:nth-child(3)').text('ACCESSORIES');
    $('#section-titles .title:nth-child(4)').text('ASSEMBLY');
  }
}
function updateSkuGetQuant(){
  //updates SKU and UPC fields in "Product Details" Section with current variant info.
  //Checks quantity of current variant and hides the add to cart button if that quantity is below 9 units
  $('.product__color input.single-option-selector').click(function(){
    var swatchName = $('ul.product__available-colors .swatch-name').text();
    $('.no-js .variant-info option').each(function(){
      if($(this).is(":contains('"+ swatchName +"')")) {
        var sku = $(this).attr('data-sku');
        var upc = $(this).attr('data-upc');
        var quantity = $(this).attr('data-quant');
        $('#prod-details #display_sku').text(sku);
        $('#prod-details #display_upc').text(upc);
        if(quantity < 9){
          $('button.product__add-to-cart').hide();
        }
        else{
          $('button.product__add-to-cart').show();
        }
      }
    });
  });
}

});
