$(function() {


    // function instances for pop-ups on home page
    decalPopUp();
//     headerPopUp();
    footerPopUp();
    styleFooterTitle();

    // function objects for pop ups on home page
  function decalPopUp(){
      //free car detail functionality
      $('#free-gift-click').click(function(){
        $('#twenty-off-overlay').appendTo('body');
        $("#decal-wrapper").appendTo('body');
        $('#twenty-off-overlay').show();
        $("#decal-wrapper").show();
        $('#twenty-off-overlay').addClass('decal');
        $("#free-decal-img").attr('src', '//cdn.shopify.com/s/files/1/0578/7201/files/free-precious-cargo-car-decal-small.jpg');
        $("#decal-wrapper").show().removeClass('slideOutLeft').addClass('animated slideInLeft');
        $('#hide-decal-x').show();
        $('#img-x-wrap').show();
        $('#twenty-off-overlay.decal').click(function(){
          $('#decal-wrapper').removeClass('slideInLeft').addClass('slideOutLeft');
          $('#twenty-off-overlay').hide();
          $('#twenty-off-overlay').removeClass('decal');
          $("#decal-wrapper").hide();
                  $('#img-x-wrap').hide();

        });
        $('#hide-decal-x').click(function(){
          $('#decal-wrapper').removeClass('slideInLeft').addClass('slideOutLeft');
          $('#twenty-off-overlay').hide();
          $('#twenty-off-overlay').removeClass('decal');
          $("#decal-wrapper").hide();
                  $('#img-x-wrap').hide();

        });
      });
    }



  function headerPopUp(){

    if ($(window).width() > 642) {
    //patch for adding in nav-item for "10% off" button
    $('<li class="nav-item"><a class="nav-title head">Get 10% Off</a></li>').insertAfter($('.nav-title:contains("About Us")').parent());
    $('.nav-title:contains("Get 10% Off")').css('padding-right', '15px').css('color', 'red');
    $('.nav-title:contains("Get 10% Off")').parent().css('padding-left', '5px').css('position', 'relative');
    }
    else{
      $('<li class="nav-item"><span class="dropdownMSpan"><a class="nav-title" style="color: red;">Get 10% Off</a></span></li>').insertAfter($('.nav-item a:contains("About Us")').parent().parent());

    }

    //show and hide functionality for "20% off form" for header
    $('.nav-title:contains("Get 10% Off")').click(function(){

      //makes fields visible again if user fills out form again without page re-load
      $('.mc-field-group').css('visibility', 'visible');
      $('input#mc-embedded-subscribe').css('visibility', 'visible');
      $('.form-title').show();

      //patch removing styling for footer pop-up
      $('#twenty-off-form-header').removeClass('footer-style slideOutDown');
      $('#twenty-off-form-header .mc-field-group.email').show();
      if ($(window).width() > 642) {
      $('#twenty-off-overlay').appendTo($('section#site-body'));
      $('#twenty-off-form-header').appendTo($('.nav-title:contains("Get 10% Off")').parent());
    }
    else{
      $('#twenty-off-overlay').appendTo($('.scotch-panel-wrapper'));
      $('#twenty-off-form-header').appendTo($('.scotch-panel-wrapper'));
    }
      $('#twenty-off-overlay').show();
      $('#twenty-off-overlay').addClass('header-form');
      $('#twenty-off-form-header').show();
      $('#twenty-off-form-header').removeClass('slideOutUp').addClass('animated slideInDown');
      $('.nav-item a:not(:contains("Get 10% Off"))').css('visibility', 'hidden');
      textBoxHeaderPopUp();
      $('#twenty-off-form-header input#mce-MMERGE4').val('Header');
      $('#mce-responses').insertBefore($('.form-title'));

      //show "x" element to close form
      $('#hide-form-x').show();

      //patch for making sure "delta" logo is hidden
      $('#site-body').css('z-index', '2');

      hideFormOnSubmit();


      //hide form and overlay if a user clicks on overlay or on "x"
      $('#twenty-off-overlay.header-form, #hide-form-x').click(function(){
        $('#twenty-off-form-header').removeClass('slideInDown').addClass('slideOutUp');
        $('#twenty-off-form-header').hide();
        $('#twenty-off-overlay').hide();
        $('#twenty-off-overlay').removeClass('header-form');
        $('.nav-item a:not(:contains("Get 10% Off"))').css('visibility', 'visible');

        //patch for bug that was keeping submit button displayed
        $('.hf input#mc-embedded-subscribe').css('visibility', 'hidden');

        //hide "x" element
        $('#hide-form-x').hide();

        // patch for delta logo, puts z-index back to original value
        $('#site-body').css('z-index', '1');
      });
    });
  };

  function textBoxHeaderPopUp(){
    //functionality for text answers in "How did you hear about us":
    //how-other
    $('.hf #mce-MMERGE1-4').click(function(){
      $('.hf #how-other').show().css('display','inline');
      $('.hf .how input').not($(this)).not(".hf #how-other input").click(function(){
        $('.hf #how-other').hide();
      });
    });
    //how-in-store
    $('.hf #mce-MMERGE1-0').click(function(){
      $('.hf #how-store').show().css('display','inline');
      $('.hf .how input').not($(this)).not(".hf #how-store input").click(function(){
        $('.hf #how-store').hide();
       });
     });
  }

  function footerPopUp(){
    //hides submit button on original footer newsletter form and replaces with div
    $('#site-ui-footer button:contains("Go")').replaceWith($('<div class="button postfix radius" id="show-footer-pop-up">Go</div>'));

    hitEnter();
    $('#show-footer-pop-up').click(function(){

      //makes fields visible again if user fills out form again without page re-load
      $('.mc-field-group').css('visibility', 'visible');
      $('.hf input#mc-embedded-subscribe').css('visibility', 'visible');
      $('.form-title').show();

      $('.hf #mce-responses').hide();

      // puts z-index to higher value to hide delta logo
      $('#site-body').css('z-index', '2');

      //patch for removing header styling of pop-up
      $('#twenty-off-form-header').removeClass('slideOutUp');
      $('#twenty-off-overlay').appendTo('#container');
      $('#twenty-off-overlay').addClass('footer-exit');
      $('#twenty-off-form-header').addClass('footer-style').appendTo('#container');

      //hides email field and pop-ulates field with user entered email before pop-up
      $('#twenty-off-form-header.footer-style input#mce-EMAIL').val($('#site-ui-footer input.email').val());
      $('#twenty-off-form-header.footer-style .mc-field-group.email').hide();

      $('#twenty-off-overlay').show();
      $('#twenty-off-form-header').removeClass('slideOutUp').show().addClass('animated slideInUp');
      textBoxHeaderPopUp();
      $('#twenty-off-form-header.footer-style input#mce-MMERGE4').val('Footer');

      //show "x" element to close form
      $('#hide-form-x').show();
      //inserts responses of form submission to top of form
      $('.hf #mce-responses').insertBefore($('.form-title'));


      //onsubmit show show message
      $('.hf #mc-embedded-subscribe-form').submit(function(){
        $('.hf #mce-responses').show();

      });
      hideFormOnSubmit();

      //hides overlay and footer form
      $('#twenty-off-overlay.footer-exit, #hide-form-x').click(function(){
        $('#twenty-off-form-header.footer-style input#mc-embedded-subscribe').click();
        $('#twenty-off-form-header').removeClass('slideOutUp slideInUp');
        $('#twenty-off-form-header').hide();
        $('#twenty-off-overlay').hide();
        $('#twenty-off-overlay').removeClass('footer-exit');
        //hide "x" element
        $('#hide-form-x').hide();
        // patch for delta logo, puts z-index back to original value
        $('#site-body').css('z-index', '1');



      });

    });
  }

  function styleFooterTitle(){
    $('.widget-header h2:contains("Newsletter")').text('Subscribe for 10% Off!');
    $('.widget-inner p:contains("Sign")').text('Sign up for our newsletter for 10% off your next order and member-only deals delivered straight to your inbox.');
  }

  function hideFormOnSubmit(){
    //changes form height back to original height
    $('#mc_embed_signup.hf').css('height', 'auto');

    $('.hf #mc-embedded-subscribe-form').submit(function(){
      $('.hf #mce-error-response').css('color', 'white');
      $('.hf .mc-field-group').css('visibility', 'hidden');
      $('.form-title').hide();
      $('.hf input#mc-embedded-subscribe').css('visibility', 'hidden');
      setTimeout(function () {
        if($('.hf #mce-error-response:contains("already subscribed")').css('display') === 'block'){
          $('.hf #mce-error-response').text('This email address has already been registered. Check your email for your 10% off discount code.');
          $('.hf #mce-error-response').css('color', 'red');
          $('.hf #mce-error-response').show();
        }
        if($('.hf #mce-error-response:contains("Recipient")').css('display') === 'block'){
          $('.hf #mce-error-response').text('This email address has already been registered. Check your email for your 10% off discount code.');
          $('.hf #mce-error-response').css('color', 'red');
          $('.hf #mce-error-response').show();
        }
      }, 500);
      $('#mc_embed_signup.hf').css('height', '120px');


    });

  }

  //edge-case function, if user hits "Enter" after filling out their email in the footer
  function hitEnter(){
    $.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
      })
    }
    $("input.email").enterKey(function () {
      event.preventDefault();
      $('#show-footer-pop-up').click();
    })
  }

});
