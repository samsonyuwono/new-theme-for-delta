//dynamically changes variant sku and upc, lotaced in "Product Details" section
$(function() {
  var variantInfo =[];
    // {% for variant in product.variants %}
    //
    //   var infoHash = {};
    //   infoHash['sku'] = "{{variant.sku}}";
    //   infoHash['UPC'] = "{{variant.barcode}}";
    //   infoHash['id'] = "{{variant.id}}";
    //   {% assign discontinued = variant.metafields.discontinued %}
    //   {% assign key = 'tof' %}
    //   infoHash['discontinued'] = "{{discontinued[key]}}";
    //   infoHash['forsale'] = "{{variant.metafields.forsale.sell}}";
    //   variantInfo.push(infoHash);
    // {% endfor %}


    $(window).on('change', function () {
      for (var i = 0; i < variantInfo.length; i++) {
        var selectedVariantSKU = variantInfo[i].sku ? variantInfo[i].sku : "";
        var selectedVariantUPC = variantInfo[i].UPC ? variantInfo[i].UPC : "";
        var selectedDiscontinued = variantInfo[i].discontinued ? variantInfo[i].discontinued : "";
        var selectedForsale = variantInfo[i].forsale ? variantInfo[i].forsale : "";

        if (document.URL.split('variant=')[1] == variantInfo[i].id) {
          if (selectedVariantSKU != false) {
              $('#display_sku').text(variantInfo[i].sku);

          }
          if (selectedVariantUPC != false) {
            $('#display_upc').text(variantInfo[i].UPC);
          }
              if (selectedVariantUPC == false) {
            $('#display_upc').text("");
          }
              if (selectedVariantSKU == false) {
            $('#display_upc').text("");
          }
          if (selectedDiscontinued != false) {
            if (variantInfo[i].discontinued == 'true'){
              $('.discontinued-notice p').text("This style has been discontinued.");
            }
            else {
              $('.discontinued-notice p').text("");
            }
          }
          if (selectedForsale != false) {
            if (selectedForsale == 'no') {
              console.log('no');
              $('.form-actions, .selector-qty, .pricing').hide();
              $('.not-sold-notice p').text("This style is not for sale on our website");

            }
            else {
              $('.form-actions, .selector-qty, .pricing').show();
              $('.not-sold-notice p').text("");
            }
          }
          if (selectedDiscontinued == false) {
            $('.discontinued-notice').text("");
          }

        };
      }
    });

});
