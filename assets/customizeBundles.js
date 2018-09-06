//checks if on bundle app page
if (window.location.href.indexOf("productbuilder") > -1) {
  $(function() {
    //lazy loading on main img(".bundle-set-img")
    //lazy loading of thumbnail image ()".bundle-ption-img")
      $('#option_image .lazy.bundle-set-img').lazy();
      $('#step_options_1 .lazy.bundle-option-img').lazy();
  });



  // ***************one-off changes section*************************
  // //adds notice that app is currently only visible on desktop
  // $('<div id="viewmessage">This app is only visible on desktop and screens larger than 1250 pixels.</div>').prependTo('#main-body-container');

  //removes functionality of pop-up for option box
  $('.choices').removeAttr('rel');
  //hides "Add and Build Another" button
  $('#builder_addtocart_button .btn.btn-success:first').hide();

//hides shopify data on load
  $('.for-info-popup').hide();

  //removes dropdown purchase summary
  $("#option_selected").remove();






  //calls bundle set images as 1x1px to save load time, then converts the one on screen back ot orginal size
  $( document ).ready(function() {

    // //checks to see if the crib, dresser, or guardrail in the bundle is out-of-stock, if so, hide bundle builder
    outOfStock();

    function outOfStock(){
     if(window.location.href.indexOf("bundle-29-tivoli-antique-white") > -1) {
       $('.option_inv_msg').remove();
     }
      else{

      $("<div id='outofstock-pop-up'><h2>This nursery set is currently unavailable. Please return to the previous page and select another option.<br><a href='/pages/bundles'><button>< Go Back</button></a></h2></div>").appendTo('#container');
      $('#outofstock-pop-up').hide();
      //removes "Out of Stock" message that slides down over option
      $('.option_inv_msg').remove();

      $('#step_options_1 .choices:not(".bundle-set") .option_stock').each(function(){
        if($(this).text() === '0'){
          console.log("one of the items in this bundle has no inventory");
          // $("<div id='outofstock-pop-up'><h2>This nursery set is currently unavailable. Please return to the previous page and select another option.<br><a href='/pages/bundles'><button>< Go Back</button></a></h2></div>").appendTo('#container');
          $('#background-overlay').show();
          $('#outofstock-pop-up').show();
          $('body').css('overflow', 'hidden');

        }
      });
      }
    }
  });


    // *************script for bundle app adjustments section***************
    globalStyling();
    youSave();
    adjustBundleStep();
    //fix for glitch occuring where the bundle price wans't adding to cart
    $( document ).ready(function() {
      selectBundleOption();
      hideOptions();
    });
    matchInfo();
    optionsPopUp();
    addPurchaseCheck();
    glidersSwatches();
    organizeMatresses();
    organizeAddOns();
    returnPolicy();
    emptyDescriptionforCheckout();


  // jQuery Global Styling Section
  function globalStyling(){

    //adds class to step buttons(header buttons) and "back"/"next buttons" for click event
    $('.navigation_buttons button').addClass('step-change');
    $('.step_header').addClass('step-change');

    //desktop dom injection and class styling for header
    $("<div id='header-container'></div>").prependTo('.shappify_product_builder');
    $("<h2 id='header-text' class='gotham-e-light light-blue'>Build Your <span class='gotham-black'>Dream Nursery</span</h2>").prependTo('#header-container');
    $("<h6 id='sub-header' class='gotham-light light-blue'>Current Nursery Set Price:</h6>").insertAfter('#header-text');
    $("#total_price").insertAfter('#sub-header');

    //desktop dom injection and class styling for navigation
    $(".steps .step_header .number").hide();
    $("<span class='back-arrow'></div>").prependTo('.step_header');

    $('#step_header_1 .back-arrow').hide();
    $('#step_header_6 .arrow').hide();

    $('#step_header_name_1').text('nursery set');
    $('#step_header_name_2').text('glider');
    $('#step_header_name_3').text('crib mattress');
    $('#step_header_name_4').text('add-ons');
    $('#step_header_name_5').text('free gift');
    $('#step_header_name_6').text('review');

    $("#step_header_2").addClass("future-color");

    //text below navigation
    $("<div id='sub-header-text'></div>").insertAfter(".steps");
    $("<h2 id='sub-head-title' class='ultra dark-blue'>Your One-Stop Shop For All Nursery Essentials</h2>").appendTo('#sub-header-text');
    $("<p id='sub-head-p' class='gotham-book dark-blue'>This 5-piece bundle includes a convertible crib, crib mattress, guardrail (to convert your crib to a toddler bed), dresser, and glider. As you continue, you'll have the opportunity to customize, add more items, and save!</p>").appendTo('#sub-header-text');
    $("<div id='you-save' class='gotham-bold'>YOU SAVE: <span class='ultra'>$50</span></div>").insertAfter('#total_price');

    // nav arrow color adjustments
    $('#step_header_1').nextAll().addClass('future-color-step');
    $('#step_header_1').nextAll().children('.arrow').addClass('future-color-step');

    $('.steps_body').css('height', '500px');


    $('.step-change').click(function(){
      setTimeout(function(){
        window.scroll(0,0);

        //hides checkout button (fake-checkout) for all steps except step 6
        $('.fake-checkout').hide();


        if($('#step_1').is(':visible') || $(this).is('#step_header_1')){



        $('#sub-head-title').text("Your One-Stop Shop For All Nursery Essentials");
        $('#sub-head-p').text("This 5 piece bundle includes a convertible crib, crib mattress, guardrail (to convert your crib to a toddler bed), dresser, and glider. As you continue, you'll have the opportunity to customize, add more items, and save!");
        $('#you-save').show();

        //styles "next" button, which will read "Get Started"
        $('.next-btn').text('Get Started >').addClass('gotham-light');
        $('.next-btn').css({
          'background-color': '#407cca',
          'border-radius': '10px',
          'padding-bottom': '4px',
          'border': 'none'
        });
        $('.next-btn').show();
        $('.navigation_buttons').css('position', 'relative').css('text-align', 'center');

        //for step 1, move navigation button up and make main container shorter
        $('#navigation_buttons').css('top', '-20px');
        $('.steps_body').css('height', '500px');
        $('.option_image_pane').css('height', '600px');

        $('.option_image_pane').show();

        // nav arrow color adjustments
        $('#step_header_1').removeClass('future-color-step');
        $('#step_header_1').removeClass('future-color-step');
        $('#step_header_1').nextAll().addClass('future-color-step');
        $('#step_header_1').nextAll().children('.arrow').addClass('future-color-step');

        //hides proceed to checkout button
        $("button:contains('Proceed to Checkout')").hide();

        //appends the bundle-set image to the featured image div(called "image-pane")
        $('#step_options_1 .bundle-set-img').clone().insertAfter('#image_header');
        $('.option_image_pane img').slice(1).remove();


        //adjusts width of .bundle-set-img after being expanded
        $(".option_image_pane img.bundle-set-img").css('width', '80%');

        $('.option_image_pane .lazy.bundle-set-img').lazy();


        //removes class diabled from "Get Started" button in case this class has been applied
        $(".next-btn").removeClass('disabled');

        $('#sub-head-title').hide();
        $('#nursery-set-text').show();

      }
      if($('#step_2').is(':visible') || $(this).is('#step_header_2')){
        //lazy loading of main img and thumbnail images on step 2

        $('#step_options_2 .lazy.bundle-option-img').lazy();


        $('#sub-head-title').text("Customize Your Glider Chair");
        $('#sub-head-p').text("You'll spend hours in this chair feeding, bonding, and rocking your baby to sleep. It's important that it's tailored to fit your needs. Choose from different styles, shapes, and colors to find the perfect one for your home.");
        $('#sub-head-title').show();
        $('#nursery-set-text').hide();
        $('#you-save').hide();
        $('.next-btn').text('Next >');

        //displays first main image - Ava Glider Graphite
        $('#option_image').remove();
        $('.option_image_pane img').remove();
        //on back button, show image of selected option as main image
        if($('#step_options_2 .choices').hasClass('selected')){
          $('#step_options_2 .selected .bundle-option-img').clone().insertAfter('#image_header');
          // $('.option_image_pane img:nth-child(2)').remove();
          // $('.option_image_pane img:nth-child(3)').remove();
          $('.option_image_pane img').slice(1).remove()
          $('.option_image_pane').show();
        }
        else{
          $('#step_options_2 .bundle-option-img').first().clone().insertAfter('#image_header');
          // $('.option_image_pane img:nth-child(2)').remove();
          // $('.option_image_pane img:nth-child(3)').remove();
          $('.option_image_pane img').slice(1).remove();

          $('.option_image_pane').show();
        }
        $('.option_image_pane .lazy.bundle-option-img').lazy();

        //makes the body that holds the options larger
        $('.steps_body').css('height', '750px');
        $('.option_image_pane').css('height', '800px');

        //makes the nav buttons lower down on the page, originally top:-150px
        $('#navigation_buttons').css('top', '0');

        // nav arrow color adjustments
        $('#step_header_2').removeClass('future-color-step');
        $('#step_header_2').removeClass('future-color-step');
        $('#step_header_2').prevAll().removeClass('future-color-step');
        $('#step_header_2').prevAll().children('.arrow').removeClass('future-color-step');
        $('#step_header_2').nextAll().addClass('future-color-step');
        $('#step_header_2').nextAll().children('.arrow').addClass('future-color-step');


        //adds class "disabled" to next button on load of step_2
        if($("#step_options_2 .purchase-text").hasClass('real-select')){
          $(".next-btn").removeClass('disabled');
          }
          else{
            $(".next-btn").addClass('disabled');
          }

      }

      if($('#step_3').is(':visible') || $(this).is('#step_header_3') && !$(this).hasClass('future')){
        //lazy loading of main img and thumbnail images on step 3
        $('.option_image_pane .lazy.bundle-option-img').lazy();

        $('#step_options_3 .lazy.bundle-option-img').lazy();
        $('#step_options_3 .lazy.pop-up-img').lazy();


        $('#sub-head-title').text("Upgrade Your Crib Mattress");
        $('#sub-head-p').html("Feel good about what goes underneath your little one's head. Choose the <span class='gotham-bold'>'Natural'</span> option for a mattress made with materials that create the healthiest sleep environment for your baby. If you're seeking the best night's sleep for the whole family, look no further than the <span class='gotham-bold'>'Luxury'</span> option, which features groundbreaking innovation and the latest in mattress technology.");
        $('#you-save').hide();
        $('#sub-head-title').show();
        $('#nursery-set-text').hide();
        $('.option_image_pane').css('height', '700px');

        //hides option names in step 3
        $('#step_options_3 .option_name').hide();

        //places in "+" icon to allow for feature image to show/change, but user doesn't have to click ""Add"
        enlargeMattress();
        function enlargeMattress(){
          $("<span class='enlarge-img'><img src='//cdn.shopify.com/s/files/1/0578/7201/files/minicons2-33-512.png'></span>").appendTo("#step_options_3 .check-holder");
          // on click of "+", find the /bundle-option-im for this option and place in .option-img-pane
          $(".enlarge-img").click(function(){
            $(this).parent().prev().prev().find('.bundle-option-img').clone().insertAfter('#image_header');
            $('.option_image_pane img').slice(1).remove();
          });
        }
        //displays first main image - Serta Nightstar Super Firm Crib & Toddler Mattress
        //removes image in image_pane first, then adds first img
        $('.option_image_pane img').remove();
        $('#step_options_3 .bundle-option-img').first().clone().insertAfter('#image_header');
        $('.option_image_pane').show();
        $('.option_image_pane .lazy.bundle-option-img').lazy();


        //makes options container smaller bcause of only one row
        $('.steps_body').css('height', '500px');
        //for nav, removes coloring from #step_header_2
        $("#step_header_2").removeClass("future-color");

        // nav arrow color adjustments
        $('#step_header_3').removeClass('future-color-step');
        $('#step_header_3').removeClass('future-color-step');
        $('#step_header_3').prevAll().removeClass('future-color-step');
        $('#step_header_3').prevAll().children('.arrow').removeClass('future-color-step');
        $('#step_header_3').nextAll().addClass('future-color-step');
        $('#step_header_3').nextAll().children('.arrow').addClass('future-color-step');

        //adds class "disabled" to next button on load of step_2
        if($("#step_options_3 .purchase-text").hasClass('real-select')){
          $(".next-btn").removeClass('disabled');
          }
          else{
            $(".next-btn").addClass('disabled');
          }


      }
      if($('#step_4').is(':visible') || $(this).is('#step_header_4') && !$(this).hasClass('future')){
        //lazy loading of main img and thumbnail images on step 4
        $('#step_options_4 .lazy.bundle-set-img').lazy();
        $('#step_options_4 .lazy.bundle-option-img').lazy();


        $('#sub-head-title').text("Select Additional Items and Save");
        $('#sub-head-p').text("Save BIG on all of these new baby essentials.");
        $('#you-save').hide();
        $('#sub-head-title').show();
        $('#nursery-set-text').hide();

        $('.option_image_pane').hide();


        //hides option names in step 4
        $('#step_options_4 .option_name').hide();

        //makes the body that holds the options larger
        $('.steps_body').css('height', '750px');

        //for step 4, move navigation button up and make main container shorter
        $('#navigation_buttons').css('top', '10px');

        //disables navigation blocker that didn't allow user to go on to next step
        $('#step_header_5').removeClass('future');

        // nav arrow color adjustments
        $('#step_header_4').removeClass('future-color-step');
        $('#step_header_4').removeClass('future-color-step');
        $('#step_header_4').prevAll().removeClass('future-color-step');
        $('#step_header_4').prevAll().children('.arrow').removeClass('future-color-step');
        $('#step_header_4').nextAll().addClass('future-color-step');
        $('#step_header_4').nextAll().children('.arrow').addClass('future-color-step');

      }
      if($('#step_5').is(':visible') || $(this).is('#step_header_5') && !$(this).hasClass('future')){
        //lazy loading of main img and thumbnail images on step 5
        $('#step_options_5 .lazy.bundle-set-img').lazy();
        $('#step_options_5 .lazy.bundle-option-img').lazy();

        $('#sub-head-title').text("Select Your Free Gift With Purchase");
        $('#sub-head-p').html("Always stay connected to your baby with your FREE Safe-n-Clear Digital Baby Monitor with Talk Back Feature &amp; Temperature Sensor.");
        $('#you-save').hide();
        $('#sub-head-title').show();
        $('#nursery-set-text').hide();

        //hides option names in step 5
        $('#step_options_5 .option_name').hide();
        $('#step_options_5 .option_price').hide();
        $('.option_image_pane img').remove();
        $('.option_image_pane').hide();

        //for step 5, move navigation button up and make main container shorter
        $('#navigation_buttons').css('top', '-50px');
        $('.steps_body').css('height', '420px');
        //hides checkout button
        $("button.btn.btn-success:contains('Proceed to Checkout >')").hide();

          //adds auto click event on baby monitor as per stakeholder's request 12/12/17
        $('#step_options_5 .purchase-text').click();

        //disables navigation blocker that didn't allow user to go on to next step
        $('#step_header_6').removeClass('future');

        // nav arrow color adjustments
        $('#step_header_5').removeClass('future-color-step');
        $('#step_header_5').removeClass('future-color-step');
        $('#step_header_5').prevAll().removeClass('future-color-step');
        $('#step_header_5').prevAll().children('.arrow').removeClass('future-color-step');
        $('#step_header_5').nextAll().addClass('future-color-step');
        $('#step_header_5').nextAll().children('.arrow').addClass('future-color-step');

      }
      if($('#step_6').is(':visible')|| $(this).is('#step_header_6') && !$(this).hasClass('future')){
        $('#sub-head-title').text("You're Almost Done!");
        $('#sub-head-p').text("Please review the items in your nursery set before proceeding to checkout.");
        $('#you-save').hide();
        $('.option_image_pane').hide();
        $('#sub-head-title').show();
        $('#nursery-set-text').hide();


        $('.steps_body').css('height', '850px');

        buildPurchaseSum();
        function buildPurchaseSum(){
          //empty all purchase summary rows
          $('#purchase_summary .confirm_step').children().empty();
          selectedProd = $('.selected').length;
          purchaseRows = $('.confirm_step').length;
          rowsNeeded = selectedProd - purchaseRows;
          for(i = 0; i < rowsNeeded; i++){
            $('.confirm_step').first().clone().appendTo("#purchase_summary");
          }
          $('.steps_body .selected').each(function(){
              $(".confirm_step_title:empty").first().append($(this).children('.option_image').clone());
              $(".confirm_step_select:empty").first().append($(this).children('.option_name').clone().children().remove().end());
              $(this).children('.option_price').clone().appendTo($(".confirm_step_price:empty").first());
          });
          $("#purchase_summary .option_name").show();
          $("#purchase_summary .option_price").show();
        }//end buildPurchaseSum()

        //hides text in this column in purchase-summary
        $('#purchase_summary .confirm_step .confirm_step_title').css('color', 'transparent');

        //applies text insertion and styling to #purchase_summary
        $('#confirmation_title').text('Your Products');
        $("<span class='ultra'>PRICE</span>").appendTo('#confirmation_title');
        $('#confirmation_title').css({
          'background-color': '#1a3d6e',
          'color': 'white',
          'font-family': 'Gotham Ultra',
          'padding-top': '15px',
          'padding-bottom': '15px',
          'letter-spacing': '.8px'
        });
        $('#confirmation_title span').css({
          'position': 'absolute',
          'right': '20px'
        });

        //appends checkout button to bottom of screen
        $("button.btn.btn-success:contains('Add & Checkout')").insertAfter('#navigation_buttons .next-btn');
        $('#navigation_buttons .btn-success:nth-child(4)').hide();

        $('#navigation_buttons .btn-success:nth-child(3)').text('Proceed to Checkout >').show();
        $('#navigation_buttons .btn-success:nth-child(3)').css({
          'background-color': 'rgb(64, 124, 202)',
          'border-radius': '10px',
          'padding-bottom': '4px',
          'border': 'none',
          'width': '190px',
          'font-family': 'Gotham Light',
          'cursor': 'pointer'
          // 'right': '0',
          // 'position': 'absolute'
        });

        //hides the duplicate of "the proceed to checkout" button
        if($('.btn-success:contains("Proceed")').length > 1){
          $('.btn-success:contains("Proceed")').slice(1).remove();
        }

        //for emptyDescriptionforCheckout() - these methods ensure that the "fake" checkout button is visible on step 6 so ".selected" info(extra copy that was showing up on "Checkout") can be removed before user is brough to checkout
        $('.btn-success:contains("Proceed")').hide();
        $('.fake-checkout').show();

        $('#t-p-holder #total_price').remove();
        $("#total_price").clone().appendTo('#t-p-holder');
        $('#t-p-holder #total_price').css({
          'font-family': 'Gotham Medium'
        });

        // nav arrow color adjustments
        $('#step_header_6').removeClass('future-color-step');
        $('#step_header_6').removeClass('future-color-step');
        $('#step_header_6').prevAll().removeClass('future-color-step');
        $('#step_header_6').prevAll().children('.arrow').removeClass('future-color-step');

      }//end if statement for step_6

    }, 1);//end set timout window scroll

    });//end on click event of nav buttons


  // move feature image -> .option_image_pane to before .steps_body
  $('.option_image_pane').insertAfter('#sub-header-text');
  //hides text details of each step
  $('.step_details .step_container').hide();
  //moves navigation buttons to bottom of screen
  $('#navigation_buttons').insertAfter('.steps_body');

  //////////////////////////////////////
  //////////////Step 1 Styling//////////
  //////////////////////////////////////

  $('.option_image_pane').css('height', '600px');

  //adds "Custoize Your Glider" and "Customize your MAttress" images to step_body in step_1
  $("<div id='custom-g-img'></div>").appendTo('#step_options_1');
  $("<div id='custom-m-img'></div>").appendTo('#step_options_1');

  //adds labels above options in step 1 for 2nd, 3rd, 4th, 5th, and 6th options (1st option(bundle product) is added to cart and hidden on load)
  $("#step_options_1 .choices:nth-child(3)").prepend("<div class='gotham-black dark-grey op-label'>Convertible Crib</div>");
  $("#step_options_1 .choices:nth-child(4)").prepend("<div class='gotham-black dark-grey op-label'>Dresser</div>");
  $("#step_options_1 .choices:nth-child(5)").prepend("<div class='gotham-black dark-grey op-label'>Toddler Guardrail</div>");
  $("#step_options_1 #custom-g-img").prepend("<div class='gotham-black dark-grey op-label'>Glider</div>");
  $("#step_options_1 #custom-m-img").prepend("<div class='gotham-black dark-grey op-label'>Crib Mattress</div>");

  //text below main image for step 1
  // $("<h1 id='nursery-set-text' class='ultra dark-blue'>5-Piece Nursery Set</h1>").prependTo('#step_1');
  // $('div#sub-header-text').insertAfter('h1#nursery-set-text');
  $('div#sub-header-text').prependTo('.steps_body');
  $("<h1 id='nursery-set-text' class='ultra dark-blue'>5-Piece Nursery Set</h1>").prependTo('.steps_body');
  // organizeMatresses();
  // organizeAddOns();

  $("#step_options_5 .choices:nth-child(2)").append("<div class='glider-price gotham-light light-grey'>FREE GIFT</div>");


  //styles "next" button, which will read "Get Started"
  $('.next-btn').text('Get Started >').addClass('gotham-light');
  $('.next-btn').css({
    'background-color': '#407cca',
    'border-radius': '10px',
    'padding-bottom': '4px',
    'border': 'none',
    'width' : '120px'
  });
  //styles "back" button, which will read "< Back"
  $('.back-btn').text('< Back').addClass('gotham-light');
  $('.back-btn').css({
    'background-color': '#407cca',
    'border-radius': '10px',
    'padding-bottom': '4px',
    'border': 'none',
    'margin-right': '250px',
    'width' : '120px'
  });

  $('.navigation_buttons').css('position', 'relative').css('text-align', 'center').css('top', '50px');


  //for step 1, move navigation button up and make main container shorter
  $('#navigation_buttons').css('top', '-70px');


  //step 6
  //styles notice on bottom of purchase summary
  $("<div id='total-p-row' class='gotham-medium'>TOTAL PRICE OF BUNDLE:<span class='gotham-medium' id='t-p-holder'></span></div>").appendTo('#step_6 .verify_pane');

  $("<div id='checkout-notice' class='dark-blue gotham-medium'>Arrives within 3-6 weeks. Carrier will call to set up appointment with delivery window.<br><span class='return-policy'>Return Policy</span></div>").appendTo('#step_6 .verify_pane');
  $("#total_price").clone().appendTo('#t-p-holder');
  $('#t-p-holder #total_price').css({
    'font-family': 'Gotham Medium'
  });


}//end globalStyling()

  //*********function objects section*****************
  //applies info button to all options except the first, aka the "bundle" product (which is automatically added to cart with selectBundleOption(); )
  function adjustBundleStep(){
      $('.choices').each(function(){
        $("<span class='info'><img src='//cdn.shopify.com/s/files/1/0578/7201/files/info-button.png'></span>").insertAfter(this);
      });
  };

  // selects the bundle option(which is the first option in step 1), hides it, and triggers click on it after 1 sec so it adds to cart
  function selectBundleOption(){

    $('#step_options_1 .choices').first().hide();
    //hides first option (bundle product) info button
    $('span.info').first().hide();
    setTimeout(
    function(){
      $('#step_options_1 .choices').slice(1).click();

    }, 1000);


  };

  //creates option pop-up for every option that has an info button
  function optionsPopUp(){
    $("<div id='option-pop-up'></div>").appendTo('#container');
    $("<div id='background-overlay'></div>").appendTo('#container');
    $('span.info').click(function(){
      //function instance that grabs shopify product description for each bundle
      var optionInfo = $(this).prev('.choices').children('.option_name').children().clone();
      $('#option-pop-up').append(optionInfo);
      $('#background-overlay').show();
      $('#option-pop-up').show();
      $('#option-pop-up .for-info-popup').show();
      //lazy loads images in pop-ups
      $('#option-pop-up .for-info-popup .lazy.pop-up-img').lazy();
      $('#option-pop-up .for-info-popup .bundle-option-img').hide();

      $('#option-pop-up .for-info-popup').slice(1).remove();
      $('body').css('overflow', 'hidden');

      $("<span class='exit'>X</span>").prependTo('#option-pop-up');
      $('#background-overlay').click(function(){
        $('#option-pop-up .for-info-popup').remove();
        $('#option-pop-up').empty();
        $("#option-pop-up").animate({ scrollTop: 0 }, "fast");
        $('#option-pop-up').hide();
        $('.for-info-popup').hide();
        $('body').css('overflow', 'auto');

        $(this).hide();
      });
      $('.exit').click(function(){
        $('#option-pop-up .for-info-popup').remove();
        $('#option-pop-up').empty();
        $('#option-pop-up').hide();
        $('#background-overlay').hide();
        $('.for-info-popup').hide();
        $('body').css('overflow', 'auto');
      });
    });
      //old place for step 1 thumbnail


    //adds featured images to Step 2 by matching name
    $('.glider .title-bundle').each(function(){
      productName = $(this).text();
      $(this).parent().children('.bundle-option-img').appendTo($(".option_name:contains('"+productName+"')"));
    });

  };//end optionsPopup();

  //place shopify product data into info pop-up box for bundle and places
  function matchInfo(){
    $('.for-info-popup').each(function(){
      $(this).children('.pop-up-img').prependTo($(this));
      title = $(this).children('.title-bundle').text();
      $(this).appendTo($('.option_name:contains("'+title+'")')).hide();
    });

    //adds thumbnail images to step 1 options, pulls from shopify
    $('#step_options_1 .option_name .for-info-popup').each(function(){
      $(this).parent().prev().children('img').replaceWith($(this).children('.bundle-option-img').first().clone());
    });

    //appends the bundle-set image to the featured image div(called "image-pane")
    $('#step_options_1 .bundle-set .bundle-set-img').clone().appendTo(".option_image_pane #option_image");

    //takes gliders pop-up image and puts it into the option thumbnail image
    $('#step_options_2 .option_name .for-info-popup.glider').each(function(){
      $(this).parent().prev().children('img').replaceWith($(this).children('.bundle-option-img').first().clone());
    });

    //takes step 3 pop-up image, clones it, and places into thumbnail container
    $('#step_options_3 .option_name .for-info-popup').each(function(){
      $(this).parent().prev().children('img').replaceWith($(this).children('.description-bundle').next().children('img').clone());
      $(this).children('.pop-up-img').clone().appendTo($(this).parent().prev());
    });

    //takes step 4 pop-up image, clones it, and places into thumbnail container
    $('#step_options_4 .option_name .for-info-popup').each(function(){
      $(this).parent().prev().children('img').replaceWith($(this).children('.bundle-option-img').first().clone());
    });

    //takes step 5 pop-up image, clones it, and places into thumbnail container
    $('#step_options_5 .option_name .for-info-popup').each(function(){
      $(this).parent().prev().children('img').replaceWith($(this).children('.bundle-option-img').first().clone());
    });

  };//end matchInfo

  //adds a checkbox and text to all "purchase-able" bundle options, aka all options excpet those in step 1
  function addPurchaseCheck(){
    $('.info').not('#step_options_1 .info').each(function(){
      $("<div class='check-holder'><span class='purchase-text gotham-bold'>Add</span></div>").insertAfter(this);
    });
    //places click on option for step 2 options and applies functionality to take click off if another option is selected

    //test for mobile fix
    if ($(window).width() < 667) {
    $('#step_options_2 .choices').first().addClass('selected');
    $('#step_options_3 .choices').first().addClass('selected');


    //these next two steps are option, need to revise
    // $('#step_options_4 .choices').first().addClass('selected');
    // $('#step_options_5 .choices').first().addClass('selected');
  }

  // $(document).on('click', '#step_options_2 .purchase-text', function() {

    $('#step_options_2 .purchase-text').click(function(){

      //removes border around swatch

      $(this).toggleClass('real-select');
      $('#step_options_2 .choices').each(function(){
        if($(this).hasClass('selected')){
          $(this).click();
          $(this).next().next().children('.purchase-text').click();
          $(this).next().next().children('.purchase-text').removeClass('p-text-select');
          $(this).next().next().children('.purchase-text').text('Add');
          $(this).children('.option_image').removeClass('img-select');
          $(this).removeClass('selected');
          //removes this image from main image
          $('.option_image_pane img').remove();
          //addded on 10/16/17 to fix bug in mobile
          $(this).next().next().children('.swatch-g').removeClass('swatch-border');
          // $('.swatch-g').removeClass('swatch-border');

        }
      });
      $(this).parent().prev().prev('.choices').click();
      $(this).parent().prev().prev().addClass('selected');
      $(this).addClass('p-text-select');
      $(this).text('Your Pick');
      $(this).parent().prev().prev().children('.option_image').addClass('img-select');
      $('.option_image_pane img').remove();
      $(this).parent().prev().prev().children('.option_name').find('.bundle-option-img').clone().insertAfter('#image_header');
      $('.option_image_pane img').slice(1).remove();
      //shows next button and enables header nav step-3 if an option has class 'selected'
      // $('.next-btn').show();
      $('.next-btn').removeClass('disabled');

      $("#step_header_3").css('pointer-events', 'auto');



      // $('.option_image_pane img:nth-child(2)').remove();

      //for dropdown screen when product is added to bundle-holder
      $('#option_selected').remove();

    });

    $('#step_options_3 .purchase-text').click(function(){
      //adds class for later image and title info on Step_6 - purchase summary
      $(this).toggleClass('real-select');
      $('#step_options_3 .choices').each(function(){
        if($(this).hasClass('selected')){
          $(this).click();
          $(this).next().next().children('.purchase-text').click();
          $(this).next().next().children('.purchase-text').removeClass('p-text-select');
          $(this).next().next().children('.purchase-text').text('Add');
          $(this).children('.option_image').removeClass('img-select');
          $(this).removeClass('selected');
          //removes this image from main image
          $('.option_image_pane img').remove();
        }
      });
      $(this).parent().prev().prev().click();
      $(this).parent().prev().prev().addClass('selected');
      $(this).addClass('p-text-select');
      $(this).text('Your Pick');
      $(this).parent().prev().prev().children('.option_image').addClass('img-select');
      $('.option_image_pane img').remove();

      $('.next-btn').removeClass('disabled');


      $(this).parent().prev().prev().children('.option_name').find('.bundle-option-img').clone().insertAfter('#image_header');
        //fix for removing duplicate featured images
        if($('.option_image_pane').children('img').length > 1){
          $('.option_image_pane img').slice(1).remove();
        }
    });

    //desktop click event for step 4
    if ( $(window).width() > 667) {
      $('#step_options_4 .purchase-text').click(function(){
        if($(this).parent().prev().prev().hasClass('selected')){
          $(this).parent().prev().prev('.choices').click();
          $(this).parent().prev().prev().removeClass('selected');
          $(this).removeClass('p-text-select');
          $(this).parent().prev().prev().children('.option_image').removeClass('img-select');
          $(this).text('Add');
        }
        else if(!$(this).parent().prev().prev().hasClass('selected')){
          $(this).parent().prev().prev('.choices').click();
          //aded for mobile
          $(this).parent().prev().prev().addClass('selected');


          $(this).addClass('p-text-select');
          $(this).text('Your Pick');
          $(this).parent().prev().prev().children('.option_image').addClass('img-select');
        }
      });
    }

    //mobile click event for step 4
    if ( $(window).width() < 667) {
      $('#step_options_4 .purchase-text').click(function(){

        $(this).toggleClass('real-select');
        $(this).toggleClass('p-text-select');
        $(this).parent().prev().prev().children('.option_image').toggleClass('img-select');
        $(this).parent().prev().prev().toggleClass('selected');


        $(this).parent().prev().prev().click();


        if($(this).parent().prev().prev().hasClass('selected')){
          $(this).parent().prev().prev().click();
          $(this).next().next().children('.purchase-text').text('Your Pick');
        }
        if(!$(this).parent().prev().prev().hasClass('selected')){
          $(this).parent().prev().prev().click();
          $(this).text('Add');

        }
        if($(this).hasClass('p-text-select')){
          $(this).text('Your Pick');
        }
        if(!$(this).hasClass('p-text-select')){
          $(this).text('Add');
        }
      });
    }

    //desktop click event for step 5
    if ( $(window).width() > 667) {
      $('#step_options_5 .purchase-text').click(function(){
        //adds class for later image and title info on Step_6 - purchase summary
        $(this).toggleClass('real-select');
        if($(this).parent().prev().prev().hasClass('selected')){
          $(this).parent().prev().prev().click();
          $(this).parent().prev().prev().removeClass('selected');
          $(this).removeClass('p-text-select');
          $(this).parent().prev().prev().children('.option_image').removeClass('img-select');
          $(this).text('Add');
        }else{
          $(this).parent().prev().prev().click();
          $(this).addClass('p-text-select');
          $(this).text('Your Pick');
          $(this).parent().prev().prev().children('.option_image').addClass('img-select');
        }
      });
    }
    //mobile click event for step 5
      if ( $(window).width() < 667) {
        $('#step_options_5 .purchase-text').click(function(){

          $(this).toggleClass('real-select');
          $(this).toggleClass('p-text-select');
          $(this).parent().prev().prev().children('.option_image').toggleClass('img-select');
          $(this).parent().prev().prev().toggleClass('selected');


          $(this).parent().prev().prev().click();


          if($(this).parent().prev().prev().hasClass('selected')){
            $(this).parent().prev().prev().click();
            $(this).next().next().children('.purchase-text').text('Your Pick');
          }
          if(!$(this).parent().prev().prev().hasClass('selected')){
            $(this).parent().prev().prev().click();
            $(this).text('Add');

          }
          if($(this).hasClass('p-text-select')){
            $(this).text('Your Pick');
          }
          if(!$(this).hasClass('p-text-select')){
            $(this).text('Add');
          }

        });


      }

  };//end addPurchaseCheck

  //Just for Step 2
  function glidersSwatches(){
    // initial functions to hide all styles excpet for one of each glider
    chloeGlider();
    avaGlider();
    epicGlider();
    emmaGlider();
    midGlider();
    rowGlider();
    emRockGlider();
    //click event on swatch to change style
    clickSwatch();

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////// function Objects for color swatches in Glider/////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    // Charlotte and Chloe Gliders (all are named Chloe in Product Builder App) Glider
    function chloeGlider(){
      $('#step_options_2 .choices .option_name:contains("Chloe"), #step_options_2 .choices .option_name:contains("Charlotte")').each(function(){
        //places color swatches on all Ava styles by appending to the "add to bundle" div
        $(this).parent().next().next().append("<div class='swatch-g cc-swatch-sand border'></div>");
        $(this).parent().next().next().append("<div class='swatch-g cc-swatch-charcoal'></div>");
        $(this).parent().next().next().append("<div class='swatch-g cc-swatch-dove-grey'></div>");
        $(this).parent().next().next().append("<div class='swatch-g cc-swatch-frozen-blue'></div>");

        //hides title of option
        $(this).hide();

        //adds price and original price
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$0<br><span class='glider-orig-price ultra'>Originally: $300</span></div>");

        //hides other styles
        if($(this).is(':contains("Sand")')){
        }
        else{
          $(this).parent().hide();
          $(this).parent().next().hide();
          $(this).parent().next().next().hide();
        }
      });
    }

    //Epic Glider
    function epicGlider(){
      $('#step_options_2 .choices .option_name:contains("Epic"), #step_options_2 .choices .option_name:contains("Benbridge")').each(function(){
        //places color swatches on all Epic styles by appending to the "add to bundle" div
        $(this).parent().next().next().append("<div class='swatch-g epic-swatch-taupe border'></div>");
        $(this).parent().next().next().append("<div class='swatch-g epic-swatch-sand'></div>");
        $(this).parent().next().next().append("<div class='swatch-g epic-swatch-charcoal'></div>");
        $(this).parent().next().next().append("<div class='swatch-g epic-swatch-sailor-blue'></div>");
        $(this).parent().next().next().append("<div class='swatch-g epic-swatch-charcoal-flax'></div>");
        $(this).parent().next().next().append("<div class='swatch-g epic-swatch-dove-grey'></div>");
        $(this).parent().next().next().append("<div class='swatch-g epic-swatch-frozen-welt'></div>");
        $(this).parent().next().next().append("<div class='swatch-g epic-swatch-cocoa-welt'></div>");
        //hides title of option
        $(this).hide();

        //adds price and original price
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$39.99<br><span class='glider-orig-price ultra'>Originally: $400</span></div>");

        //hides other styles
        if($(this).is(':contains("Taupe")')){
        }
        else{
          $(this).parent().hide();
          $(this).parent().next().hide();
          $(this).parent().next().next().hide();
        }
      });
    }

    // Rowen Rocking Chairs
    function rowGlider(){
      $('#step_options_2 .choices .option_name:contains("Rowen")').each(function(){
        //places color swatches on all Ava styles by appending to the "add to bundle" div
        $(this).parent().next().next().append("<div class='swatch-g row-swatch-graphite border'></div>");
        $(this).parent().next().next().append("<div class='swatch-g row-swatch-dove-grey'></div>");
        $(this).parent().next().next().append("<div class='swatch-g row-swatch-ecru'></div>");


        //hides title of option
        $(this).hide();

        //adds price and original price
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$59.99<br><span class='glider-orig-price ultra'>Originally: $330</span></div>");

        //hides other styles
        if($(this).is(':contains("Graphite")')){
        }
        else{
          $(this).parent().hide();
          $(this).parent().next().hide();
          $(this).parent().next().next().hide();
        }
      });
    }//end rowGlider

    // Ava Glider and Eva Gliders (Eva Gliders are named "Ava" in Product Builder)
    function avaGlider(){
      $('#step_options_2 .choices .option_name:contains("Ava"), #step_options_2 .choices .option_name:contains("Eva")').each(function(){
        //places color swatches on all Ava styles by appending to the "add to bundle" div
        $(this).parent().next().next().append("<div class='swatch-g ava-swatch-graphite border'></div>");
        $(this).parent().next().next().append("<div class='swatch-g ava-swatch-dove-grey'></div>");
        $(this).parent().next().next().append("<div class='swatch-g ava-swatch-sailor-blue'></div>");
        $(this).parent().next().next().append("<div class='swatch-g ava-swatch-charcoal'></div>");
        $(this).parent().next().next().append("<div class='swatch-g ava-swatch-heather-grey'></div>");
        $(this).parent().next().next().append("<div class='swatch-g ava-swatch-taupe'></div>");

        //test to recognize glider stock
        // if($(this).next().next().next().next().next().text() === '0'){
        //   console.log('no stock');
        // }
        //hides title of option
        $(this).hide();

        //adds price and original price
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$79.99<br><span class='glider-orig-price ultra'>Originally: $400</span></div>");

        //hides other styles
        if($(this).is(':contains("Graphite")')){
        }
        else{
          $(this).parent().hide();
          $(this).parent().next().hide();
          $(this).parent().next().next().hide();
        }
      });
    }//end avaGlider

    //Emma and Emerson Gliders (Labled "Emma" in product Builder)
    function emmaGlider(){
      $('#step_options_2 .choices .option_name:contains("Emerson")').each(function(){
        //places color swatches on all Epic styles by appending to the "add to bundle" div
        $(this).parent().next().next().append("<div class='swatch-g emma-swatch-dove-grey-welt border'></div>");
        $(this).parent().next().next().append("<div class='swatch-g emma-swatch-cocoa-welt'></div>");
        $(this).parent().next().next().append("<div class='swatch-g emma-swatch-beige-welt'></div>");
        //hides title of option
        $(this).hide();

        //adds price and original price
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$79.99<br><span class='glider-orig-price ultra'>Originally: $330</span></div>");

        //hides other styles
        if($(this).is(':contains("Dove Grey with Welt")')){
        }
        else{
          $(this).parent().hide();
          $(this).parent().next().hide();
          $(this).parent().next().next().hide();
        }
      });
    }//end emmaGlider

    // Middleton Gliders
    function midGlider(){
      $('#step_options_2 .choices .option_name:contains("Middleton")').each(function(){
        //places color swatches on all Ava styles by appending to the "add to bundle" div
        $(this).parent().next().next().append("<div class='swatch-g mid-swatch-blush border'></div>");
        $(this).parent().next().next().append("<div class='swatch-g mid-swatch-sea'></div>");

        //hides title of option
        $(this).hide();

        //adds price and original price
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$99.99<br><span class='glider-orig-price ultra'>Originally: $550</span></div>");

        //hides other styles
        if($(this).is(':contains("Blush")')){
        }
        else{
          $(this).parent().hide();
          $(this).parent().next().hide();
          $(this).parent().next().next().hide();
        }
      });
    }//end midGlider

    // Emma Nursery Rocking Chairs
    function emRockGlider(){
      $('#step_options_2 .choices .option_name:contains("Emma")').each(function(){
        //places color swatches on all Ava styles by appending to the "add to bundle" div
        $(this).parent().next().next().append("<div class='swatch-g emrock-swatch-dove-grey border'></div>");
        $(this).parent().next().next().append("<div class='swatch-g emrock-swatch-graphite'></div>");
        $(this).parent().next().next().append("<div class='swatch-g emrock-swatch-ecru'></div>");
        //hides title of option
        $(this).hide();

        //adds price and original price
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$99.99<br><span class='glider-orig-price ultra'>Originally: $300</span></div>");

        //hides other styles
        if($(this).is(':contains("Dove Grey")')){
        }
        else{
          $(this).parent().hide();
          $(this).parent().next().hide();
          $(this).parent().next().next().hide();
        }
      });
    }//end emrockGlider

    function clickSwatch(){
      //test
      $('#step_options_2 .swatch-g').first().addClass('swatch-border');

    $('#step_options_2 .swatch-g').click(function(){

      //fix for proper UX 11/16/17
      //commented this out, was cuasing bug 11/27/17
      // $('.swatch-g').removeClass('swatch-border');
      // $('#step_options_2 .choices').removeClass('selected');
      // $('#step_options_2 .choices .option_image').removeClass('img-select');
      // $('#step_options_2 .purchase-text').removeClass('p-text-select').text('Add');



      $(this).parent().hide();
      $(this).parent().prev().hide();
      $(this).parent().prev().prev().hide();
      // $('.option_image_pane img').appendTo($(this).parent().prev().prev().children('.option_name'));


      //Charlotte/Chloe Swatches
      if($(this).hasClass('cc-swatch-sand')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Charlotte"):contains("Sand")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.cc-swatch-sand').addClass('swatch-border');

      }

      if($(this).hasClass('cc-swatch-charcoal')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Charlotte"):contains("Charcoal")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.cc-swatch-charcoal').addClass('swatch-border');

      }

      if($(this).hasClass('cc-swatch-dove-grey')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Chloe"):contains("Dove Grey")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.cc-swatch-dove-grey').addClass('swatch-border');

      }
      if($(this).hasClass('cc-swatch-frozen-blue')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Chloe"):contains("Frozen Blue")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.cc-swatch-frozen-blue').addClass('swatch-border');

      }

      //Ava/eva Glider Swatches
      if($(this).hasClass('ava-swatch-dove-grey')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Ava"):contains("Dove Grey")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.ava-swatch-dove-grey').addClass('swatch-border');
      }
      if($(this).hasClass('ava-swatch-graphite')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Ava"):contains("Graphite")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.ava-swatch-graphite').addClass('swatch-border');
      }
      if($(this).hasClass('ava-swatch-sailor-blue')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Eva"):contains("Sailor Blue")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.ava-swatch-sailor-blue').addClass('swatch-border');
      }
      if($(this).hasClass('ava-swatch-charcoal')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Eva"):contains("Charcoal")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.ava-swatch-charcoal').addClass('swatch-border');
      }
      if($(this).hasClass('ava-swatch-heather-grey')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Eva"):contains("Heather Grey")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.ava-swatch-heather-grey').addClass('swatch-border');
      }
      if($(this).hasClass('ava-swatch-taupe')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Eva"):contains("Taupe")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.ava-swatch-taupe').addClass('swatch-border');
      }

      //Epic/Benbridge glider
      if($(this).hasClass('epic-swatch-taupe')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Epic"):contains("Taupe")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.epic-swatch-taupe').addClass('swatch-border');
      }
      if($(this).hasClass('epic-swatch-sand')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Epic"):contains("Sand")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.epic-swatch-sand').addClass('swatch-border');
      }
      if($(this).hasClass('epic-swatch-sailor-blue')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Epic"):contains("Sailor Blue")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.epic-swatch-sailor-blue').addClass('swatch-border');
      }
      if($(this).hasClass('epic-swatch-dove-grey')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Benbridge"):contains("Dove Grey")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.epic-swatch-dove-grey').addClass('swatch-border');
      }
      if($(this).hasClass('epic-swatch-frozen-welt')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Benbridge"):contains("with Cream")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.epic-swatch-frozen-welt').addClass('swatch-border');
      }
      if($(this).hasClass('epic-swatch-cocoa-welt')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Benbridge"):contains("Cocoa")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.epic-swatch-cocoa-welt').addClass('swatch-border');
      }
      if($(this).hasClass('epic-swatch-charcoal-flax')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Epic"):contains("Flax")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.epic-swatch-charcoal-flax').addClass('swatch-border');
      }
      if($(this).hasClass('epic-swatch-charcoal')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Epic"):contains("Charcoal")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.epic-swatch-charcoal').addClass('swatch-border');
        // fix for bug on epic charcoal and epic charcoal with flax
        $('#step_options_2 .choices .option_name:contains("Epic Glider (Charcoal with Flax) - bundle")').parent().hide();
        $('#step_options_2 .choices .option_name:contains("Epic Glider (Charcoal with Flax) - bundle")').parent().next().hide();
        $('#step_options_2 .choices .option_name:contains("Epic Glider (Charcoal with Flax) - bundle")').parent().next().next().hide();
      }

      //Emma/Emerson Gliders (Lebeled "Emerson" in Product Builder)
      if($(this).hasClass('emma-swatch-dove-grey-welt')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Emerson"):contains("Dove Grey")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.emma-swatch-dove-grey-welt').addClass('swatch-border');
      }
      if($(this).hasClass('emma-swatch-cocoa-welt')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Emerson"):contains("Cocoa")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.emma-swatch-dove-cocoa-welt').addClass('swatch-border');

      }
      if($(this).hasClass('emma-swatch-beige-welt')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Emerson"):contains("Beige")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.emma-swatch-beige-welt').addClass('swatch-border');
      }

      //Middleton Gliders
      if($(this).hasClass('mid-swatch-sea')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Middleton"):contains("Sea Breeze")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.mid-swatch-sea').addClass('swatch-border');
      }
      if($(this).hasClass('mid-swatch-blush')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Middleton"):contains("Blush")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.mid-swatch-blush').addClass('swatch-border');
      }

      //Rowen Rocking Chair
      if($(this).hasClass('row-swatch-graphite')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Rowen"):contains("Graphite")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.row-swatch-graphite').addClass('swatch-border');
      }
      if($(this).hasClass('row-swatch-dove-grey')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Rowen"):contains("Dove Grey")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.row-swatch-dove-grey').addClass('swatch-border');
      }
      if($(this).hasClass('row-swatch-ecru')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Rowen"):contains("Ecru")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.row-swatch-ecru').addClass('swatch-border');
      }

      //Emma Nursery Rocking Chair
      if($(this).hasClass('emrock-swatch-graphite')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Emma"):contains("Graphite")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.emrock-swatch-graphite').addClass('swatch-border');
      }
      if($(this).hasClass('emrock-swatch-dove-grey')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Emma"):contains("Dove Grey")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.emrock-swatch-dove-grey').addClass('swatch-border');
      }
      if($(this).hasClass('emrock-swatch-ecru')){
        swatchName = $('#step_options_2 .choices .option_name:contains("Emma"):contains("Ecru")');
        showStyle();
        $('#step_options_2 .swatch-g').removeClass('swatch-border');
        $('.swatch-g.emrock-swatch-ecru').addClass('swatch-border');
      }
      if($('.option_image_pane').children('img').length > 1){
        $('.option_image_pane img:nth-child(2)').remove();
      }

    });

    function showStyle(){
      swatchName.parent().show();
      swatchName.parent().next().show();
      swatchName.parent().next().next().show();
      //on click of swatch, take off "selected" from previous glider
      if ( $(window).width() > 667) {

      // $('#step_options_2 .choices.selected').each(function(){
       if($(this).hasClass('selected')){
      $('#step_options_2 .choices').removeClass('selected');
      $('#step_options_2 .purchase-text').removeClass('p-text-select');
      $('#step_options_2 .purchase-text').text("Add");
      $('#step_options_2 .option_image').removeClass('img-select');
        }
      // });
    }

      disableNext();

      //clones feature image and puts in "option_image_pane" -> main image
      $('.option_image_pane img').remove();
      swatchName.find('.lazy.bundle-option-img').clone().insertAfter('#image_header');
      // $('.option_image_pane img:nth-child(2)').remove();
      // //fix for issue of epic charcoal showing two images 6/13/17
      // if($('.option_image_pane').children('img').length > 1){
      //   $('.option_image_pane img').slice(1).remove();
      // }
      //for desktop screensizes
     }
  }//end clickSwatches()

}//end glidersSwatches()

  //for step_3, this fucntion assigns price, label, and original price ot options
  function organizeMatresses(){
    $("#step_options_3 .choices .option_name").each(function(){
      if($(this).is(':contains("Tranquility")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Basic</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$0<br><span class='glider-orig-price ultra'>Originally: $120</span></div>");
      }
      if($(this).is(':contains("Naturally Sleepy")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Natural</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$39.99<br><span class='glider-orig-price ultra'>Originally: $150</span></div>");
      }
      if($(this).is(':contains("iComfort Dawn")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Luxury</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$59.99<br><span class='glider-orig-price ultra'>Originally: $250</span></div>");
      }
    });
  }

  //for Step_4, this function assigns thew price, label, and original price for each option
  function organizeAddOns(){
    $("#step_options_4 .choices .option_name").each(function(){
      if($(this).is(':contains("J is for Jeep")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>3-in-1 Car Seat Compatible Infant-to-Toddler Stroller</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$249.99<br><span class='glider-orig-price ultra'>Originally: $350</span></div>");
        $(this).siblings('.op-label').css('top', '-40px').css('width', '140%').css('left', '-20%');
      }
      if($(this).is(':contains("Contoured Changing Pad")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Pad for Changing Table</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$29.99<br><span class='glider-orig-price ultra'>Originally: $40</span></div>");
      }
      if($(this).is(':contains("Happy Home Storage")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Bookcase</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$119.99<br><span class='glider-orig-price ultra'>Originally: $150</span></div>");
      }

      if($(this).is(':contains("EZ Fold High")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>High Chair</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$39.99<br><span class='glider-orig-price ultra'>Originally: $50</span></div>");
      }

      if($(this).is(':contains("Platform Bed Kit 700850")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Convert Crib to Full-Size Bed</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$149.99<br><span class='glider-orig-price ultra'>Originally: $250</span></div>");
        $(this).siblings('.op-label').css('width', '90%').css('left', '5%');
    }
      if($(this).is(':contains("Full Size Wood")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Convert Crib to Full-Size Bed</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$119.99<br><span class='glider-orig-price ultra'>Originally: $210</span></div>");
        $(this).siblings('.op-label').css('width', '90%').css('left', '5%');
      }
      if($(this).is(':contains("Wood Bed Rails 0050")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Convert Crib to Full-Size Bed</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$99.99<br><span class='glider-orig-price ultra'>Originally: $125</span></div>");
        $(this).siblings('.op-label').css('width', '90%').css('left', '5%');
      }
      if($(this).is(':contains("Wood Bed Rails 0020")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Convert Crib to Full-Size Bed</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$95.99<br><span class='glider-orig-price ultra'>Originally: $120</span></div>");
        $(this).siblings('.op-label').css('width', '90%').css('left', '5%');
      }
      if($(this).is(':contains("Metal Bed Frame")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Convert Crib to Full-Size Bed</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$59.99<br><span class='glider-orig-price ultra'>Originally: $90</span></div>");
        $(this).siblings('.op-label').css('width', '90%').css('left', '5%');
      }
      if($(this).is(':contains("Changing Top (Rustic Grey) - bundle")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Transform Dresser to Changing Table</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$79.99<br><span class='glider-orig-price ultra'>Originally: $100</span></div>");
      }
      if($(this).is(':contains("Changing Top (Rustic Whitewash) - bundle")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Transform Dresser to Changing Table</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$79.99<br><span class='glider-orig-price ultra'>Originally: $100</span></div>");
      }
      if($(this).is(':contains("Changing Top (Rustic Oak) - bundle")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Transform Dresser to Changing Table</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$79.99<br><span class='glider-orig-price ultra'>Originally: $100</span></div>");
      }
      if($(this).is(':contains("Changing Top")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Transform Dresser to Changing Table</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$49.99<br><span class='glider-orig-price ultra'>Originally: $60</span></div>");
      }
      if($(this).is(':contains("Oakmont Changing Tray")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Transform Dresser to Changing Table</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$99.99<br><span class='glider-orig-price ultra'>Originally: $120</span></div>");
      }
      if($(this).is(':contains("Deluxe Changing Tray")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Transform Dresser to Changing Table</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$99.99<br><span class='glider-orig-price ultra'>Originally: $120</span></div>");
      }
      if($(this).is(':contains("Ravello Changing Tray")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Transform Dresser to Changing Table</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$99.99<br><span class='glider-orig-price ultra'>Originally: $130</span></div>");
      }
      if($(this).is(':contains("Tivoli Changing Tray")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Transform Dresser to Changing Table</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$99.99<br><span class='glider-orig-price ultra'>Originally: $130</span></div>");
      }

      if($(this).is(':contains("Gateway Ladder Shelf")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Ladder Shelf</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$109.99<br><span class='glider-orig-price ultra'>Originally: $130</span></div>");
      }

      if($(this).is(':contains("Oakmont 4 Drawer Chest")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>4 Drawer Chest</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$599.99<br><span class='glider-orig-price ultra'>Originally: $800</span></div>");
      }
      if($(this).is(':contains("Peyton 4 Drawer Chest")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>4 Drawer Chest</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$499.99<br><span class='glider-orig-price ultra'>Originally: $600</span></div>");
      }
      if($(this).is(':contains("Ravello 4 Drawer")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>4 Drawer Chest</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$599.99<br><span class='glider-orig-price ultra'>Originally: $750</span></div>");
      }
      if($(this).is(':contains("Tivoli 4 Drawer Chest")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>4 Drawer Chest</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$499.99<br><span class='glider-orig-price ultra'>Originally: $700</span></div>");
      }
      if($(this).is(':contains("Langley 4 Drawer Chest")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>4 Drawer Chest</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$599.99<br><span class='glider-orig-price ultra'>Originally: $800</span></div>");
      }
      if($(this).is(':contains("48 Piece Nursery Storage Set")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>48 Piece Nursery Storage Set</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$29.99<br><span class='glider-orig-price ultra'>Originally: $40</span></div>");
      }
      if($(this).is(':contains("Avery 5 Drawer Chest")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Avery 5 Drawer Chest</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$499.99<br><span class='glider-orig-price ultra'>Originally: $600</span></div>");
      }
      if($(this).is(':contains("Avery Changing Tray")')){
        $(this).parent().prepend("<div class='gotham-black dark-grey op-label'>Avery Changing Tray</div>");
        $(this).parent().append("<div class='glider-price gotham-light light-grey'>$79.99<br><span class='glider-orig-price ultra'>Originally: $100</span></div>");
      }

        //fix for any options that are assigned > 1 label
        $(this).parent().children('.glider-price').slice(1).remove();
    });

    //for step 4, storage sets
  storageSet();
  // addOnClick();




      // 48 Nursery Storage Set swatches
      function storageSet(){
        $('#step_options_4 .choices .option_name:contains("48 Piece")').each(function(){
          //places color swatches on all Ava styles by appending to the "add to bundle" div
          $(this).parent().next().next().append("<div class='swatch-g storage-swatch-barely-pink border'></div>");
          $(this).parent().next().next().append("<div class='swatch-g storage-swatch-beige'></div>");
          $(this).parent().next().next().append("<div class='swatch-g storage-swatch-dove-grey'></div>");
          $(this).parent().next().next().append("<div class='swatch-g storage-swatch-grey'></div>");
          $(this).parent().next().next().append("<div class='swatch-g storage-swatch-infinity-pink'></div>");
          $(this).parent().next().next().append("<div class='swatch-g storage-swatch-navy'></div>");
          $(this).parent('.choices').addClass('add-swatch');
          $(this).parent('.choices').next().next().children('.purchase-text').addClass('swatch-purchase');

          //hides title of option
          $(this).hide();
        });

        //styling for second row of storage set
        if ($(window).width() < 552) {
          $('#step_options_4 .choices .option_variant:contains("2398289526808")').parent().next().next().children('.purchase-text').css('top', '25px');
        }
        else{
          $('#step_options_4 .choices .option_variant:contains("2398289526808")').parent().next().next().children('.purchase-text').css('top', '0');
          $('#step_options_4 .choices .option_variant:contains("256918224920")').parent().next().next().children('.purchase-text').css('top', '0');

        }

        addOnClick();

      }//end storageSet
      function addOnClick(){
        hideAllSwatchProducts();

        function hideAllSwatchProducts(){
          $('#step_options_4 .choices.add-swatch').hide();
          $('#step_options_4 .choices.add-swatch').next().hide();
          $('#step_options_4 .choices.add-swatch').next().next().hide();
        }
        //show first style
        $('#step_options_4 .choices .option_variant:contains("3373885390872")').parent().show();
        $('#step_options_4 .choices .option_variant:contains("3373885390872")').parent().next().show();
        $('#step_options_4 .choices .option_variant:contains("3373885390872")').parent().next().next().show();

      $('#step_options_4 .swatch-g').click(function(){

        hideAllSwatchProducts();


        //step 4, nursery storage set
        if($(this).hasClass('storage-swatch-barely-pink')){
          swatchName = $('#step_options_4 .choices .option_variant:contains("3373889257496")');
          showStyleAddOn();
          $('#step_options_4 .swatch-g').removeClass('swatch-border');
          $('.swatch-g.storage-swatch-barely-pink').addClass('swatch-border');
        }
        if($(this).hasClass('storage-swatch-beige')){
          swatchName = $('#step_options_4 .choices .option_variant:contains("3373887258648")');
          showStyleAddOn();
          $('#step_options_4 .swatch-g').removeClass('swatch-border');
          $('.swatch-g.storage-swatch-beige').addClass('swatch-border');

        }
        if($(this).hasClass('storage-swatch-dove-grey')){
          swatchName = $('#step_options_4 .choices .option_variant:contains("3373884047384")');
          showStyleAddOn();
          $('#step_options_4 .swatch-g').removeClass('swatch-border');
          $('.swatch-g.storage-swatch-dove-grey').addClass('swatch-border');
        }
        if($(this).hasClass('storage-swatch-grey')){
          swatchName = $('#step_options_4 .choices .option_variant:contains("3373885390872")');
          showStyleAddOn();
          $('#step_options_4 .swatch-g').removeClass('swatch-border');
          $('.swatch-g.storage-swatch-grey').addClass('swatch-border');
        }
        if($(this).hasClass('storage-swatch-infinity-pink')){
          swatchName = $('#step_options_4 .choices .option_variant:contains("3373890535448")');
          showStyleAddOn();
          $('#step_options_4 .swatch-g').removeClass('swatch-border');
          $('.swatch-g.storage-swatch-infinity-pink').addClass('swatch-border');
        }
        if($(this).hasClass('storage-swatch-navy')){
          swatchName = $('#step_options_4 .choices .option_variant:contains("3373887914008")');
          showStyleAddOn();
          $('#step_options_4 .swatch-g').removeClass('swatch-border');
          $('.swatch-g.storage-swatch-navy').addClass('swatch-border');
        }

        function showStyleAddOn(){
          swatchName.parent().show();
          swatchName.parent().next().show();
          swatchName.parent().next().next().show();
        }


        $('.swatch-purchase').click(function(){
          $('.add-swatch').each(function(){
            if($(this).hasClass('selected')){
              $(this).click();
            }
          });
          $('.add-swatch').removeClass('selected');
          $('.add-swatch .option_image').removeClass('img-select');
          $('.add-swatch').next().next('.check-holder').children('.swatch-purchase').removeClass('p-text-select');
          $('.add-swatch').next().next('.check-holder').children('.swatch-purchase').text('Add');
          $(this).parent().prev().prev('.add-swatch').addClass('selected');
          $(this).parent().prev().prev('.add-swatch').children('.option_image').addClass('img-select');
          $(this).addClass('p-text-select');
          $(this).text('Your Pick');
          $(this).parent().prev().prev().click();

        });


      });


    }


  }//end organzieAddOns


  //depending on url, change the "YOU SAVE" amount(text) on step 1
  function youSave(){
    if(window.location.href.indexOf("mid-century-modern-lifestyle-bianca") > -1) {
      $('#you-save span').text('$148');
      $('#nursery-set-text').text('Mid-Century Modern Lifestyle in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("mid-century-modern-lifestyle-grey") > -1) {
      $('#you-save span').text('$148');
      $('#nursery-set-text').text('Mid-Century Modern Lifestyle in Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("mid-century-modern-lifestyle-walnut-espre") > -1) {
      $('#you-save span').text('$148');
      $('#nursery-set-text').text('Mid-Century Modern Lifestyle in Walnut Espresso 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("archer-bianca") > -1) {
      $('#you-save span').text('$268');
      $('#nursery-set-text').text('Archer in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("archer-dark-chocolate") > -1) {
      $('#you-save span').text('$268');
      $('#nursery-set-text').text('Archer in Dark Chocolate 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("archer-grey") > -1) {
      $('#you-save span').text('$268');
      $('#nursery-set-text').text('Archer in Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("ashland-bianca") > -1) {
      $('#you-save span').text('$298');
      $('#nursery-set-text').text('Ashland in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("ashland-grey") > -1) {
      $('#you-save span').text('$298');
      $('#nursery-set-text').text('Ashland in Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("ashland-dark-chocolate") > -1) {
      $('#you-save span').text('$298');
      $('#nursery-set-text').text('Ashland in Dark Chocolate 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("canton-grey") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Canton in Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("canton-bianca") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Canton in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("fall-river-bianca") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Fall River in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("fall-river-dark-chocolate") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Fall River in Dark Chocolate 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("fall-river-grey") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Fall River in Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("fremont-bianca-with-aqua") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Fremont in Bianca White with Aqua 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("fremont-bianca-with-ebony") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Fremont in Bianca White with Ebony 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("fremont-bianca-with-grey") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Fremont in Bianca White with Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("new-haven-aqua") > -1) {
      $('#you-save span').text('$108');
      $('#nursery-set-text').text('New Haven in Aqua 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("new-haven-ebony") > -1) {
      $('#you-save span').text('$108');
      $('#nursery-set-text').text('New Haven in Ebony 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("new-haven-charcoal") > -1) {
      $('#you-save span').text('$108');
      $('#nursery-set-text').text('New Haven in Charcoal 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("new-haven-grey") > -1) {
      $('#you-save span').text('$108');
      $('#nursery-set-text').text('New Haven in Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("new-haven-bianca") > -1) {
      $('#you-save span').text('$108');
      $('#nursery-set-text').text('New Haven in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("oakmont-rustic-bianca") > -1) {
      $('#you-save span').text('$498');
      $('#nursery-set-text').text('Oakmont in Rustic Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("oakmont-rustic-haze") > -1) {
      $('#you-save span').text('$498');
      $('#nursery-set-text').text('Oakmont in Rustic Haze 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("peyton-bianca") > -1) {
      $('#you-save span').text('$608');
      $('#nursery-set-text').text('Peyton in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("peyton-ebony") > -1) {
      $('#you-save span').text('$608');
      $('#nursery-set-text').text('Peyton in Ebony 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("ravello-antique-white") > -1) {
      $('#you-save span').text('$598');
      $('#nursery-set-text').text('Ravello in Antique White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("ravello-storm") > -1) {
      $('#you-save span').text('$598');
      $('#nursery-set-text').text('Ravello in Storm 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("tivoli-antique-white") > -1) {
      $('#you-save span').text('$708');
      $('#nursery-set-text').text('Tivoli in Antique White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("tivoli-antique-chestnut") > -1) {
      $('#you-save span').text('$708');
      $('#nursery-set-text').text('Tivoli in Antique Chestnut 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("bellevue-bianca-with-grey") > -1) {
      $('#you-save span').text('$218');
      $('#nursery-set-text').text('Bellevue in Bianca White with Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("bellevue-bianca-with-ebony") > -1) {
      $('#you-save span').text('$218');
      $('#nursery-set-text').text('Bellevue in Bianca White with Ebony 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("aster-bianca-with-grey") > -1) {
      $('#you-save span').text('$58');
      $('#nursery-set-text').text('Aster in Bianca White with Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("aster-bianca-with-ebony") > -1) {
      $('#you-save span').text('$58');
      $('#nursery-set-text').text('Aster in Bianca White with Ebony 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("ava-white") > -1) {
      $('#you-save span').text('$178');
      $('#nursery-set-text').text('Ava in White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("emery-white") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Emery in White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("emery-grey") > -1) {
      $('#you-save span').text('$148');
      $('#nursery-set-text').text('Emery in Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("emery-dark-chocolate") > -1) {
      $('#you-save span').text('$148');
      $('#nursery-set-text').text('Emery in Dark Chocolate 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("barrett-bianca") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Barrett in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("barrett-dark-chocolate") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Barrett in Dark Chocolate 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("barrett-grey") > -1) {
      $('#you-save span').text('$198');
      $('#nursery-set-text').text('Barrett in Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("banbury-bianca") > -1) {
      $('#you-save span').text('$278');
      $('#nursery-set-text').text('Banbury in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("banbury-grey") > -1) {
      $('#you-save span').text('$278');
      $('#nursery-set-text').text('Banbury in Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("langley-rustic-grey") > -1) {
      $('#you-save span').text('$668');
      $('#nursery-set-text').text('Langley in Rustic Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("langley-rustic-whitewash") > -1) {
      $('#you-save span').text('$668');
      $('#nursery-set-text').text('Langley in Rustic Whitewash 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("langley-rustic-oak") > -1) {
      $('#you-save span').text('$668');
      $('#nursery-set-text').text('Langley in Rustic Oak 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("tribeca") > -1) {
      $('#you-save span').text('$308');
      $('#nursery-set-text').text('Tribeca in White with Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("avery-bianca-white") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Avery in Bianca White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("avery-charcoal-grey") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Avery in Charcoal Grey 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("ainsworth-storm") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Ainsworth in Storm 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("ainsworth-antique-white") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Ainsworth in Antique White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("ainsworth-antique-chestnut") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Ainsworth in Antique Chestnut 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("bedford-antique-white") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Bedford in Antique White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("bedford-storm") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Beford in Storm 5-Piece Nursery Set');
    }
     if(window.location.href.indexOf("bedford-antique-chestnut") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Beford in Antique Chestnut 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("fontana-antique-white") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Fontana in Antique White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("fontana-storm") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Fontana in Storm 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("fontana-antique-chestnut") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Fontana in Antique Chestnut 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("franklin-antique-white") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Franklin in Antique White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("franklin-storm") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Franklin in Storm 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("franklin-antique-white") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Franklin in Antique White 5-Piece Nursery Set');
    }
     if(window.location.href.indexOf("franklin-antique-chestnut") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Franklin in Antique Chestnut 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("aden-antique-white") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Aden in Antique White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("aden-storm") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Aden in Storm 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("aden-antique-chestnut") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Aden in Antique Chestnut 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("bristol-antique-white") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Briston in Antique White 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("bristol-storm") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Bristol in Storm 5-Piece Nursery Set');
    }
    if(window.location.href.indexOf("bristol-antique-chestnut") > -1) {
      $('#you-save span').text('$349');
      $('#nursery-set-text').text('Bristol in Antique Chestnut 5-Piece Nursery Set');
    }
  }


  //empties .option_name div in order to hide all of the exta copy that was displaying on the checkout page
  function emptyDescriptionforCheckout(){
    //fake-checkout implemented in ordr to fix exta copy that was displaying on "Checkout" page
    $("<div class='fake-checkout'>Proceed to Checkout ></div>").appendTo('#navigation_buttons');
    $('.fake-checkout').hide();

    $('.fake-checkout').one("click", function(){
      $('.selected .for-info-popup').remove();
      console.log("fake checkout clicked!");
      $('button.btn-success:contains("Proceed")').click();
    });
  };

  //return policy link and pop-up
  function returnPolicy(){
    $('.return-policy').css('text-decoration', 'underline').css('cursor', 'pointer');
    $('<div id="return-popup">Returns & Refunds<br><br><br>1. Damaged or Defective Items:<br>We do everything we can to ensure your products are delivered safely to your doorstep. However, if your items arrive damaged or defective, we are happy to arrange for a prompt replacement. When you sign for delivery, please thoroughly inspect the package and if it looks significantly damaged, you may refuse delivery. If you have already accepted the package and notice missing or damaged parts, please contact our Consumer Support team at +1 (877)-660-3777 within 14 days of receiving your order and we will replace the item and cover the cost of shipping.<br><br>2. Returns and Refunds:<br>All items that are not damaged must be returned within 30 days and will be subject to a 10% restocking fee. Returned items must be shipped back in its original packaging, with no signs of use, wear or damage.<br><br>3. Delivery Failures:<br>If you provide an incorrect shipping address and the items is returned to us, the fee will be charged to the customer. This also includes refusing a package.<br><br>4. Damaged Returns:<br>If an item comes back to us damaged in anyway and cannot be resold as new, there will be a 50% restocking fee.</div>').appendTo('#container');
    $('#return-popup').hide();
    $("<span class='exit'>X</span>").prependTo('#return-popup');
    $('.return-policy').click(function(){
      $('#background-overlay').show();
      $('#return-popup').show();
      $('body').css('overflow', 'hidden');
      $('#background-overlay').click(function(){
        $('#return-popup').hide();
        $(this).hide();
        $('body').css('overflow', 'auto');

      });
      $('.exit').click(function(){
        $('#return-popup').hide();
        $('#background-overlay').hide();
        $('body').css('overflow', 'auto');

      });
    });
  }

  //hides next button if no option in step two has class "selected", function called in showStyle()
  function disableNext(){
    if(!$('#step_options_2 .choices').hasClass('selected')){
      $('.next-btn').addClass('disabled');
      $("#step_header_3").css('pointer-events', 'none');
    }
    else{
        $('.next-btn').removeClass('disabled');
        $("#step_header_3").css('pointer-events','all');
    }
  }

  //hides out of stock options for step 2 (gliders), step 3(Mattresses), and step 4(Add Ons)
  // hideOptions();
  function hideOptions(){
   $('#step_options_2 .purchase-text').text('Add').css('color', 'red').css('border-color', 'red').css('pointer-events', 'all');
   $('.swatch-g').click(function(){

     $('#step_options_2 .bundle-option .option_stock').each(function(){
      if($(this).text() === '0'){
        $(this).parent().next().next().children('.purchase-text').text('Out of Stock');
        $(this).parent().next().next().children('.purchase-text').css('color', 'black').css('border-color', 'black').css('pointer-events', 'none');
      }
    });
     $('#step_options_2 .purchase-text').each(function(){

       if($(this).is(':contains("Out of Stock")') && $(this).is(':visible') && !$(this).siblings('.swatch-g').hasClass('swatch-border')){
         $(this).text('Add').css('color', 'red').css('border-color', 'red').css('pointer-events', 'all');
       }
     });

   });
    //Disabled as per request from marketing, 3/13/18
   //mattresses
//     $('#step_options_3 .bundle-option .option_stock').each(function(){
//       if($(this).text() === '0'){
//         $(this).parent().hide();
//         $(this).parent().next().hide();
//         $(this).parent().next().next().hide();
//       }
//     });
    // Add ons
    $('#step_options_4 .bundle-option .option_stock').each(function(){
      if($(this).text() === '0'){
        console.log('out of stock!');
        $(this).parent().hide();
        $(this).parent().next().hide();
        $(this).parent().next().next().hide();
      }
    });
    $('#step_4 .swatch-g').click(function(){
          $('#step_options_4 .add-swatch .option_stock').each(function(){
            if($(this).text() === '0'){
        console.log('out of stock!');
            $(this).parent().next().next().children('.purchase-text').text('Out of Stock');
        $(this).parent().next().next().children('.purchase-text').css('color', 'black').css('border-color', 'black').css('pointer-events', 'none');
      		}
             $('#step_options_4 .purchase-text').each(function(){

       if($(this).is(':contains("Out of Stock")') && $(this).is(':visible') && !$(this).siblings('.swatch-g').hasClass('swatch-border')){
         $(this).text('Add').css('color', 'red').css('border-color', 'red').css('pointer-events', 'all');
       }
     });

          });


    })

//     fixes guardrail img that needs to be centered
    if(window.location.href.indexOf("avery-charcoal-grey") > -1 || window.location.href.indexOf("avery-bianca-white") > -1 ) {
        $("#step_1 img.bundle-option-img[alt*='Guardrail']").css('position', 'relative');
		$("#step_1 img.bundle-option-img[alt*='Guardrail']").css('top', '20px');
    }
  }

};
//end if on bundle app page
