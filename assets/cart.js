//functionality for ensuring bundle products are deleted if the "crib" bundle product is deleted
$(function() {

  deleteWholeBundle();
   hidePriceforZero();
     putCribFirst();
});


//this function basically disallows a customer from adding a bunch of bundles, then deleting the crib of one bundle(which has the total bundle price), and still being able to purchase the associated bundle products that are at a highly reduced cost.
function deleteWholeBundle(){
  $(".ex-info-holder").hide();
  //wraps function in an if statement so function doesn't run and take up performance time if there are no bundle products in cart
  if($(".cart-item .cart-item__title a:contains('Dresser'):contains('bundle'), .cart-item .cart-item__title a:contains('Dresser'):contains('Bundle')").is(':visible')){
    //looks for a "Dresser" "bundle" in cart and grabs the _builder_ID from it
    $(".cart-item .cart-item__title a:contains('Dresser'):contains('bundle'), .cart-item .cart-item__title a:contains('Dresser'):contains('Bundle')").each(function(){
      bundleId = $(this).parent().siblings('cart-item__properties').children("li:contains('_builder_id')").text();
        //if an item in the cart is a "Bundle Crib", then apply these customizations for security of bundle sale, if not, then make all associated bundle products, with that particular bundle, unpurchasable.
        if($('.cart-item .cart-item__property:contains("'+bundleId+'")').parent().siblings('cart-item__title').children('a:not(:contains("Mattress")):contains("Crib"):contains("bundle")').is(':visible')){
          //for all line_items in cart that contain the "_builder_ID" do this
          $(".cart-item .cart-item__property:contains('"+bundleId+"')").each(function(){
            // $(this).parent().parent().next().children('.bundle-option-hidden').css('display', 'none');
            $(this).parent().parent().parent().next().next().children('.quantity-selector').children('quantity-selector__current-quantity').val(1);
            $(this).parent().parent().next().next().children('.quantity-selector').children('quantity-selector__current-quantity').prop('readonly', true);
            $(this).parent().parent().next().children('.add-bundle-msg').hide();
            // $(this).parent().siblings(".title:not(:contains('Mattress')):contains('Crib'):contains('bundle')").parent().next().children('.bundle-option-hidden').show();
          });
        console.log('crib is visible');
        }
      else{
        //for all line_items in cart that contain the "_builder_ID", but don't have a crib in their associated bundle, do this
        $(".cart-item .cart-item__property:contains('"+bundleId+"')").each(function(){
          // $(this).parent().parent().next().children('.bundle-option-hidden').css('display', 'none');
          $(this).parent().parent().parent().next().next().children('.quantity-selector').children('quantity-selector__current-quantity').val(0);
          $(this).parent().parent().next().next().children('.quantity-selector').children('quantity-selector__current-quantity').prop('readonly', true);
          // $(this).parent().parent().next().children('.add-bundle-msg').show();
        });
        // $('.checkout-actions input#update-cart').click();
      }
    });
    //turns off the links to product pages for all bundle products
    $(".cart-item .cart-item__title a:contains('bundle')").each(function(){
      $(this).removeAttr("href");
    });
    $(".cart-item .cart-item__title a:contains('Bundle')").each(function(){
      $(this).removeAttr("href");
    });
  }
}
function hidePriceforZero(){
  $(".cart-item .cart-item__title a:contains('bundle'), .cart-item .cart-item__title a:contains('Bundle')").each(function(){
    priceSection = $(this).parent().parent().parent().next().children('.cart-item__price');
    price = priceSection.text();
    if(price === '$ 0.00'){
      priceSection.hide();
    }
  });
}
function putCribFirst(){
  $(".cart-item .cart-item__title a:not(:contains('Mattress')):contains('Crib'):contains('bundle')").closest('.cart-item').prependTo('.cart__headings tbody');
}
