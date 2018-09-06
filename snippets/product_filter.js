$(document).ready(function() {


  hidePage()

//hides collection on page to render handlebar results
function hidePage(){
  $('#Brand ul li :checkbox').click(function() {
    if(this.checked){
      $('.list-products').hide()
    }
});

  $('#Type ul li :checkbox').click(function() {
    if(this.checked){
      $('.list-products').hide()
    }
});

$('#Feature ul li :checkbox').click(function() {
  if(this.checked){
    $('.list-products').hide()
  }
});

$('#Price ul li :checkbox').click(function() {
  if(this.checked){
    $('.list-products').hide()
  }
});

$('#Finish ul li :checkbox').click(function() {
  if(this.checked){
    $('.list-products').hide()
  }
});

$('#Character ul li :checkbox').click(function() {
  if(this.checked){
    $('.list-products').hide()
  }
});

$('#Team ul li :checkbox').click(function() {
  if(this.checked){
    $('.list-products').hide()
  }
});

$('#Core ul li :checkbox').click(function() {
  if(this.checked){
    $('.list-products').hide()
  }
});

$('#Product-type ul li :checkbox').click(function() {
  if(this.checked){
    $('.list-products').hide()
  }
});

$('#Material ul li :checkbox').click(function() {
  if(this.checked){
    $('.list-products').hide()
    }
  });
}



    // for new swatches, create url at www.postimg.org

    //Swatch image files used after filters invoked
        var swatch = {

          antique_chestnut: "https://s22.postimg.cc/jv57a2d9t/Antique_Chestnut_2100.png",
          antique_espresso: "https://s22.postimg.cc/sd5bu5kpd/Antique_Espresso_915.png",
          antique_walnut: "https://s27.postimg.cc/hcuurcf1v/Antique_Walnut_267.png",
          antique_white: "https://s28.postimg.cc/td19z1um5/Antique_White_122.png",
          antique_white_grey: "https://s28.postimg.cc/a6z3spyvx/Antique_White_Grey_066.jpg",
          aqua: "https://s12.postimg.cc/6do9ia8d9/Aqua_347.png",
          autumn_berry: "https://s11.postimg.cc/s241gjl2r/Autumn_Berry_608.png",
          beige: "https://s29.postimg.cc/s4rletyif/Beige.jpg",
          beig2: "https://s17.postimg.cc/66q9fq5lb/Beige_250.png",
          beige3: "https://s17.postimg.cc/6vi7s7stb/Beige_276.png",
          beige_ecru_welt: "https://s28.postimg.cc/mluff7kl9/Beige_with_Ecru_Welt_923.png",
          betony_cherry: "https://s21.postimg.cc/5isiyvmnb/Betony_Cherry_627.png",
          bianca: "https://s29.postimg.cc/n8q66x0p3/Bianca_130.jpg",
          bianca_white: "https://s21.postimg.cc/q10cpiduf/Bianca_White_130.jpg",
          bianca_with_animal_motif: "https://s28.postimg.cc/z6a20d1xp/Bianca_with_Animal_Motif_1303.png",
          bianca_with_black: "https://s11.postimg.cc/77pg3oi37/Bianca_with_Black_117.png",
          bianca_with_dark_chocolate: "https://s2.postimg.cc/lyb1a8x3t/Bianca_with_Dark_Chocolate_137.png",
          bianca_with_ebony: "https://s22.postimg.cc/iwmwrj7kx/Bianca_with_Ebony_149.png",
          bianca_with_grey: "https://s27.postimg.cc/wx8kw1n3n/Bianca_with_Grey_166.jpg",
          bianca_with_rustic_ebony: "https://s26.postimg.cc/rfl3lvgpl/Bianca_with_Rustic_Ebony_135.jpg",
          bianca_with_rustic_haze: "https://s12.postimg.cc/szo7dc2y5/Bianca_with_Rustic_Haze_136.png",
          black: "https://s22.postimg.cc/5urj914z5/Black.png",
          black2: "https://s18.postimg.cc/8rxrk0amx/Black_001.png",
          black_cherry: "https://s22.postimg.cc/j4yn3bttd/Black_Cherry_607.png",
          black_cherry_espresso: "https://s4.postimg.cc/uwtl2rmb1/Black_Cherry_Espresso_607.png",
          black_cherry_espresso_taupe: "https://s2.postimg.cc/ob32rll15/Black_Cherry_Espresso_Taupe_607.png",
          black_espresso: "https://s29.postimg.cc/v72yqz9x3/Black_Espresso_907.png",
          black_espresso_beige: "https://s18.postimg.cc/t1my8xwc9/Black_Espresso_Beige_916.jpg",
          black_espresso_white: "https://s28.postimg.cc/5hgvywb9p/Black_Espresso_with_White_918.png",
          blue_velvet: "https://s18.postimg.cc/qgn8y8swp/Blue_Velvet_469.jpg",
          blush: "https://s29.postimg.cc/4f25q5053/Blush_636.jpg",
          blush_velvet: "https://s18.postimg.cc/jdfdim81l/Blush_Velvet_631.jpg",
          cabernet: "https://s27.postimg.cc/lcsv5ahs3/Cabernet_648.png",
          caffe: "https://s29.postimg.cc/hmi5xxpvb/Caffe_247.png",
          caramel: "https://s3.postimg.cc/5wcprlfb7/Caramel_233.png",
          charcoal: "https://s22.postimg.cc/5ir21l3e9/Charcoal_029.png",
          charcoal2: "https://s29.postimg.cc/fsop1canr/Charcoal_931.jpg",
          charcoal3: "https://cdn.shopify.com/s/files/1/0578/7201/files/Charcoal_1323.jpg?13037749762440184685",
          charcoal_grey: "https://s17.postimg.cc/gchwpmsz3/Charcoal_Grey_029.png",
          charcoal_grey2: "https://s18.postimg.cc/av5xe9edl/Charcoal_Grey_931.jpg",
          charcoal_flax_welt: "https://s17.postimg.cc/5ohvvc47j/Charcoal_with_Flax_Welt_1305.png",
          cherry_rose: 'https://s21.postimg.cc/v5g0wtv8n/Cherry_Rose_245.png',
          cherry_taupe: "https://s21.postimg.cc/v5g0wtv8n/Cherry_Rose_245.png",
          chestnut: "https://s4.postimg.cc/45elrj0yl/Chestnut_227.png",
          chestnut2: "https://s29.postimg.cc/lyby6vyiv/Chestnut_601.png",
          chocolate: "https://s29.postimg.cc/j4xxg5ion/Chocolate_204.png",
          chocolate_beige: "https://s11.postimg.cc/4sk740d9f/Chocolate_Beige_249.png",
          classic_grey: "https://s22.postimg.cc/qtul63041/Classic_Grey_028.png",
          classic_grey2: "https://s4.postimg.cc/qc2kuf0el/Classic_Grey_026.png",
          cocoa: "https://s29.postimg.cc/69f07vn5j/Cocoa_258.jpg",
          cocoa_beige_welt: "https://s22.postimg.cc/wj5i1vjap/Cocoa_with_Beige_Welt_911.png",
          cool_grey: "https://s22.postimg.cc/bik1up569/Cool_Grey_063.png",
          cream: "https://s29.postimg.cc/7pqiq0q2f/Cream_743.jpg",
          dark_cherry: "https://s3.postimg.cc/454q17ahv/Dark_Cherry_604.png",
          dark_chocolate: "https://s29.postimg.cc/44dn9y6t3/Dark_Chocolate_207.jpg",
          dark_espresso: "https://s18.postimg.cc/aotaieoc9/Dark_Espresso_958.png",
          dove_grey: "https://s29.postimg.cc/tdfh0gqgn/Dove_Grey_034.jpg",
          dove_grey2: "https://s3.postimg.cc/bj07hskxf/Dove_Grey_036.png",
          dove_grey3: "https://s3.postimg.cc/bj07hskxf/Dove_Grey_036.png",
          dove_grey_soft_grey_welt: "https://s11.postimg.cc/ja6ty5qcj/Dove_Grey_with_Soft_Grey_Welt_036.png",
          ebony: "https://s12.postimg.cc/eye1xgxrx/Ebony_0011.png",
          ecru: "https://s18.postimg.cc/czqafc8ah/Ecru_277.jpg",
          espresso_cherry: "https://s18.postimg.cc/7rs7lwie1/Espresso_Cherry_205.png",
          espresso_java: "https://s28.postimg.cc/bhliie1nh/Espresso_Java_645.png",
          espresso_latte: "https://s12.postimg.cc/e2hu8v765/Espresso_Latte_243.png",
          espresso_truffle: "https://s3.postimg.cc/l2zbvby5f/Espresso_Truffle_208.png",
          flax: "https://s26.postimg.cc/vm5y17gbd/Flax_710.jpg",
          french_grey: "https://s29.postimg.cc/h2r3u4ttj/French_Grey_1304.jpg",
          frozen_blue: "https://s17.postimg.cc/64a8pwpdr/Frozen_Blue_483.png",
          frozen_blue_cream_welt: "https://s26.postimg.cc/4plysvxi1/Frozen_Blue_with_Cream_Welt_499.png",
          fuchsia: "https://s27.postimg.cc/iq68c38bn/Fuchsia.png",
          graphite: "https://s18.postimg.cc/dp92rpvzd/Graphite_018.jpg",
          graphite_dove_grey_welt: "https://s18.postimg.cc/699t5yaux/Graphite_Dove_Welt_944.jpg",
          grey: "https://s12.postimg.cc/lgxxsbj0t/Grey_026.jpg",
          grey2: "https://s21.postimg.cc/vhr3swz6v/Grey_081.png",
          grey3: "https://s17.postimg.cc/d23lw0nn3/Grey_180.png",
          grey_chevron: "https://s17.postimg.cc/qlo2ppr2n/Grey_Chevron_900.png",
          grey_velvet: "https://s29.postimg.cc/jmmqo8hdj/Grey_Velvet_950.jpg",
          heather_grey: "https://s29.postimg.cc/5ub6bx987/Heather_Grey_053.jpg",
          heather_grey2: "https://s26.postimg.cc/p9ee89nx5/Heather_Grey_1304.jpg",
          heather_grey3: "https://s18.postimg.cc/4hgub1js9/Heather_Grey_1304_E.jpg",
          infinity_light_grey: "https://s2.postimg.cc/dff2mmka1/Infinity_Light_Grey_063.png",
          labrosse: "https://s18.postimg.cc/bngeuw6o9/La_Brosse_Cherry_26.png",
          labrosse_cherry2: "https://s29.postimg.cc/g8psa135j/La_Brosse_Cherry_602.png",
          lagoon: "https://s29.postimg.cc/kj0bblurb/Lagoon_428.jpg",
          linen_dark_chocolate: "https://s18.postimg.cc/es26nn3yh/Linen_with_Dark_Chocolate_Frame_1325.jpg",
          merlot: "https://s18.postimg.cc/syhr8o6yh/Merlot_615.png",
          midnight_cherry: "https://s18.postimg.cc/61dry5q8p/Midnight_Cherry_613.png",
          mist_dark_chocolate: "https://s18.postimg.cc/5j00ddag9/Mist_with_Dark_Chocolate_Frame_1326.png",
          molasses: "https://s18.postimg.cc/4c7hlzj9l/Molasses_226.png",
          natural: "https://s17.postimg.cc/trtmkmvmn/Natural_260.png",
          natural_wheat: "https://s30.postimg.cc/v3559eiz5/Natural_Wheat_296.png",
          navy: "https://s4.postimg.cc/d513qg425/Navy_404.png",
          navy2: "https://s29.postimg.cc/fhbu2bjlj/Navy_467.jpg",
          pebble_brown: "https://s18.postimg.cc/699t5vq9l/Pebble_Brown_920.jpg",
          pink: "https://s2.postimg.cc/6p7samg7t/Pink.png",
          purple: "https://s12.postimg.cc/uwpj78u59/Purple.png",
          rustic_bianca: "https://s28.postimg.cc/ltqxonzvx/Rustic_Bianca_170.png",
          rustic_ebony: "https://s31.postimg.cc/gt0ynet8r/Rustic-_Ebony-19352.png",
          rustic_grey: "https://s4.postimg.cc/3plnelmz1/Rustic_Grey_084.png",
          rustic_haze: "https://s22.postimg.cc/tpybkara9/Rustic_Haze_940.png",
          rustic_oak: "https://s28.postimg.cc/697swblz1/Rustic_Oak_229.png",
          rustic_white: "https://s28.postimg.cc/ct7ruv365/Rustic_White_119.png",
          rustic_whitewash: "https://s11.postimg.cc/xwm10smf7/Rustic_Whitewash_112.png",
          rustic_whitewash2: "https://s3.postimg.cc/klrnp0mo3/Rustic_Whitewash_112_ST.png",
          sage_chevron: "https://s18.postimg.cc/fdxjrhlih/Sage_Chevron_316.png",
          sailor_blue: "https://s29.postimg.cc/hfn3e21h3/Sailor_Blue_424.jpg",
          sand: "https://s18.postimg.cc/nh8v2e50p/Sand_274.png",
          sand2: "https://s29.postimg.cc/e3k770kc7/Sand_921.jpg",
          sea_breeze: "https://s22.postimg.cc/z637fc7z5/Sea_Breeze_465.png",
          serta_bianca: "https://s27.postimg.cc/qs2leix4j/Serta_Bianca_130_ST.jpg",
          serta_dark_chocolate: "https://s30.postimg.cc/sv71m90g1/Serta_Dark_Chocolate_207_ST.png",
          serta_rustic_oak: "https://s28.postimg.cc/5vdeghou5/Serta_Rustic_Oak_229_ST.png",
          sisal_dark_chocolate: "https://s18.postimg.cc/x6cpridnd/Sisal_with_Dark_Chocolate_Frame_1327.png",
          spice_cinnamon: "https://s11.postimg.cc/b3kodocfn/Spice_Cinnamon_209.png",
          spiced_cinammon: "https://s2.postimg.cc/imxd171mx/Spiced_Cinnamon_209.png",
          stained_grey: "https://s21.postimg.cc/xyy7ze1xj/Stained_Grey_054.png",
          steel_blue: "https://s4.postimg.cc/evpfg6q4d/Steel_Blue_426.png",
          storm: "https://s28.postimg.cc/q84gx8ynx/Storm_161.png",
          sweet_grey: "https://s18.postimg.cc/w4tjp42e1/Sweet_Grey_3101.jpg",
          taupe: "https://s29.postimg.cc/xlvxuvkzb/Taupe_065.jpg",
          toast_velvet: "https://s17.postimg.cc/htgro8zv3/Toast_Velvet_932.png",
          twilight_grey: "https://s29.postimg.cc/4myze4pvb/Twilight_Grey_076.jpg",
          vintage_cherry: "https://s17.postimg.cc/5qnfifd73/Vintage_Cherry_20.png",
          vintage_cherry2: "https://s12.postimg.cc/su34g92bh/Vintage_Cherry_238.png",
          vintage_espresso: "https://s17.postimg.cc/5qnfifd73/Vintage_Cherry_20.png",
          vintage_espresso2: "https://s11.postimg.cc/jx22cq60z/Vintage_Espresso_915.png",
          vintage_espresso_taupe: "https://s3.postimg.cc/vffmzxner/Vintage_Espresso_Taupe_616.png",
          vintage_white: "https://s28.postimg.cc/51r3jz8zh/Vintage_White_120.png",
          walnut: "https://s22.postimg.cc/liq5nj0ip/Walnut_1316.png",
          walnut_espresso: "https://s18.postimg.cc/l58cdiz49/Walnut_Espresso_1324.jpg",
          warm_honey: "https://s21.postimg.cc/x32rxefdz/Warm_Honey_251.png",
          warm_honey_black: "https://s11.postimg.cc/ymy2cspfn/Warm_Honey_Black_925.png",
          weathered_chestnut: "https://s21.postimg.cc/d8aryyd8n/Weathered_Chestnut_223.png",
          white: "https://s22.postimg.cc/4h1bhcd8h/White_100.png",
          white2: "https://s27.postimg.cc/50f4ythyr/White_114.png",
          white3: "https://s2.postimg.cc/nq351i3nd/White_130.png",
          white_grey: "https://s12.postimg.cc/q95m7ko8t/White_Grey_027.jpg",
          white_grey2: "https://s12.postimg.cc/7rfzokwl9/White_Grey_066.jpg",
          white_ambiance: "https://s27.postimg.cc/wn0z1gjg3/White_Ambiance_108.png",
          white_ambiance2: "https://s4.postimg.cc/i0thhgpkd/White_Ambiance_127.png",
          white_ambiance_dark_chocolate: "https://s17.postimg.cc/bf64siem7/White_Ambiance_Dark_Chocolate_127.png",
          white_toast: "https://cdn.shopify.com/s/files/1/0578/7201/files/White_Toast_100.png",
          white_with_black_espresso: "https://s22.postimg.cc/dfh8crdlt/White_with_Black_Espresso_141.png",
          white_dark_chocolate: "https://s4.postimg.cc/8x21idbe5/White_Dark_Chocolate_141.png",
          white_espresso: "https://s2.postimg.cc/az1z215yh/White_Espresso_145.png",
          white_warm_mist: "https://s11.postimg.cc/pph0qc1bn/White_Warm_Mist_266.png"

        }


        // GLOBAL VARIABLES
        $.first_time = true;
        var firstClicksOn = document.querySelectorAll('.dropDownTitle, #sort-by');
        var $filterBox = $('input[type="checkbox"]');


          // prevent checkboxes & sort from staying activated if user navigates away from collection page, and then hits back button to return
        $(":checkbox").attr("autocomplete", "off");
        $('#sort-by option').attr("autocomplete", "off");

        $('#mainFilterContainer').hide();




        /*--------------------------------------------BEGIN VARYING AJAX CALLS---------------------------------------------------------------------*/
        /*-----------------------------------------------------------------------------------------------------------------------------------------*/

        // assign collection url to variable so can break collection type of in AJAX call
        var url = window.location;


        // AJAX SP. FOR GLIDERS

        var urlsGliders = ['https://www.deltachildren.com/collections/gliders/products.json?limit=250'];

        function getFilterProducts_Gliders() {
          $.each(urlsGliders, function(i,u) {
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide();
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
                  //  console.log(status);
              }
           });
         });
        }


          // AJAX SP. FOR CRIBS

        var urlsCribs = ['https://www.deltachildren.com/collections/cribs/products.json?limit=250'];

        function getFilterProducts_Cribs() {
          $.each(urlsCribs, function(i,u) {
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide();
                  $('#customLoader').css('display', 'none');
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
                  //  console.log(status);
              }
           });
         });
        }

        //  AJAX SP. 'DRESSERS & CHANGERS'

        var urlsChanging = ['https://www.deltachildren.com/collections/dressers-and-changers/products.json?limit=250'];

        function getFilterProducts_Dressers_Changers() {
          // console.log("CHANGING-TABLES AJAX");
          $.each(urlsChanging, function(i,u) {
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide()
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
              }
           });
         });
        }

        // AJAX SP. FOR TODDLER-BEDS

        var urlsToddlerBeds = ['https://www.deltachildren.com/collections/toddler-beds/products.json?limit=250'];

        function getFilterProducts_Toddler_Beds(tag){
          $.each(urlsToddlerBeds, function(i,u) {
            // console.log("TODDLER AJAX");
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide()
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
              }
           });
         });
        }

        // AJAX SP. FOR TOY-STORAGE (listed in left-nav as 'Toy Organizers & Bookshelves')

        var urlsToyStorage = ['https://www.deltachildren.com/collections/toy-storage/products.json?limit=250'];

        function getFilterProducts_Toy_Storage(tag){
          // console.log("TOY-STORAGE AJAX");
          $.each(urlsToyStorage, function(i,u) {
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide()
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
              }
            });
          });
         }

        // AJAX SP. FOR TABLE-CHAIR-SETS (listed in left-nav as 'Tables & Chairs')

        var urlsTableChairs = ['https://www.deltachildren.com/collections/table-chair-sets/products.json?limit=250'];

        function getFilterProducts_Table_Chair_Sets(tag){
          // console.log("TABLE CHAIRS AJAX");
          $.each(urlsTableChairs, function(i,u) {
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide()
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
              }
           });
         });
        }

        // AJAX SP. FOR KIDS-SEATING

        var urlsKidsSeating = ['https://www.deltachildren.com/collections/kids-seating/products.json?limit=250'];

        function getFilterProducts_Kids_Seating(tag){
          // console.log("KIDS SEATING AJAX");
          $.each(urlsKidsSeating, function(i,u) {
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide()
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
              }
           });
         });
        }

        // AJAX SP. FOR STORAGE-DECOR

        var urlsStorageDecor = ['https://www.deltachildren.com/collections/storage-decor/products.json?limit=250'];

        function getFilterProducts_Storage_Decor(tag){
          // console.log("STORAGE-DECOR AJAX");
          $.each(urlsStorageDecor, function(i,u) {
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide()
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
              }
           });
         });
        }

        // AJAX SP. FOR GUARDRAILS

        var urlsGuardrails = ['https://www.deltachildren.com/collections/guardrails/products.json?limit=250'];

        function getFilterProducts_Guardrails(tag){
          // console.log("GUARDRAILS AJAX");
          $.each(urlsGuardrails, function(i,u) {
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide()
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
              }
           });
         });
        }

        // AJAX SP. FOR SHOP-NOW

        var urlsShopNow = ['https://www.deltachildren.com/collections/shop-now/products.json?limit=250'];

        function getFilterProducts_Shop_Now(tag){
          // console.log("GUARDRAILS AJAX");
          $.each(urlsShopNow, function(i,u) {
          $.ajax(u, {
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide()
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
              }
           });
         });
        }

          // AJAX FOR ALL OTHER COLLECTIONS (BASED ON URL FROM THAT SPECIFIC COLLECTION PAGE WITH COLLECTION NAME SPLIT OFF)
        function getAllFilterProducts(){
          $.ajax({
              type: 'GET',
              url: 'https://www.deltachildren.com/collections/'+ url.href.split('/')[4] + '/products.json?limit=250',
              dataType: 'json',
              success: function(res){
                  // console.log("AJAX RESPONDED");
                  allProductsReturn(res.products)
                  $('.filteredProduct').hide()
                  $('#customLoader').css('display', 'none')
                  $('#mainFilterContainer').fadeIn('slow');
               },
              error: function(status){
                   alert(status);
              }
          });
        }


        //  FUNCTIONALITY TO MANIPULATE JSON RESPONSE
        function allProductsReturn(products) {

            // var swatchDiv = $('.ps-image-cont');

            // loop through JSON response
            for (var product in products) {



            var variantTitles_List = products[product].variants;

            // create array of variant titles
            var varTitles = variantTitles_List.map( x => {

              if (x.title.indexOf("/")) {

                return x.title.split("/").join(" ");

              } else {

              return x.title;

              }

            });




            // create array of variant urls
            var variantUrl = variantTitles_List.map(x => {

              var makeVarUrl = "https://www.deltachildren.com/products/" + products[product].handle + "?variant=" + x.id;

              if (makeVarUrl.indexOf("bookcase/hutch")) {
                makeVarUrl = makeVarUrl.replace("bookcase/hutch", "bookcase-and-hutches")
              }

              return makeVarUrl;

            });


            // create array of color with number (extract from variant title and manipulate to match syntax of color_number found in swatch image file)
            var varColor_Num = varTitles.map( x => {
              var split1 = x.split("(");
              var rejoin = split1[0]+split1[1];
              var varTitle = rejoin.split(")")[0];
              var varTitle_split = varTitle.split(" ").join("_");
              var color_num_split = varTitle_split.split("/").join("");
              var color_num_split2 = color_num_split.split("__").join("_");
              var color_num_split3 = color_num_split2.split("__").join("_");
              var color_num = color_num_split2.split("--").join("");



              return color_num;

            });

            // console.log(varColor_Num);

            // take appropriate color_number syntax and combine with general cdn prefix to make new usable image file
            // replicating syntax of img files that make up swatches
            var madeSrc = varColor_Num.map(x => {

              var swatchValue = Object.values(swatch);

              var swatches_src = "";

              for (var i = 0; i < swatchValue.length; i++) {

                var swatchValueLoop = swatchValue[i];
                var splitLoop = swatchValueLoop.split("/");
                var splitLoop2 = splitLoop[4].split(".");
                var colorExtracted = splitLoop2[0];
                // console.log("from url: ", colorExtracted, "from variant: ", x);


                if (x == colorExtracted) {

                  var the_swatch = swatchValue[i];
                  // the_swatch = the_swatch.slice(-1)[0]
                  // // x = swatchValue;

                }

              }

            return the_swatch;


            });


            // create array of variant featured image src strings
            var variantObject = products[product].variants;

            var madeImg = variantObject.map(x => {

              if(x.featured_image == null){


              }
              else{

              var makeImg = x.featured_image.src;

    //           console.log(makeImg);
              return makeImg;
              }

            });





            // get product's tags and convert to array
            function allTagsArray() {

              var allTags = products[product].tags;

                return $(allTags).toArray();

             }


            /*
            MASTER OBJECT MAPPING ATTRIBUTES FOR NEW INDIVIDUAL PRODUCTS TO BE TEMPLATED
            VIA HANDLE BARS IN COLLECTION.LIQUID WHEN PRODUCT FILTERS ARE INVOKED
            */
            productDetails = new Object();
            // main product details
            productDetails['id'] = products[product].id;
            productDetails['img'] = products[product].images[0].src.replace('.jpg', '_large.jpg');
            productDetails['title'] = products[product].title;
            productDetails['vendor'] = products[product].vendor // inserted SY
            productDetails['price'] = products[product].variants[0].price;
            productDetails['compare_at_price'] = products[product].variants[0].compare_at_price;
            productDetails['handle'] = products[product].handle;
            productDetails['product_type'] = products[product].product_type;
            productDetails['allTags'] = allTagsArray();
            // productDetails['product_url'] = makeVarUrl[0];

            // first six variant featured images
            productDetails['img1'] = madeImg[0];
            productDetails['img2'] = madeImg[1];
            productDetails['img3'] = madeImg[2];
            productDetails['img4'] = madeImg[3];
            productDetails['img5'] = madeImg[4];
            productDetails['img6'] = madeImg[5];

            // first six variant titles
            productDetails['varTitle1'] = varTitles[0];
            productDetails['varTitle2'] = varTitles[1];
            productDetails['varTitle3'] = varTitles[2];
            productDetails['varTitle4'] = varTitles[3];
            productDetails['varTitle5'] = varTitles[4];
            productDetails['varTitle6'] = varTitles[5];

            // first six variant colors from srcs converted to image file
            productDetails['color_src1'] = madeSrc[0];
            productDetails['color_src2'] = madeSrc[1];
            productDetails['color_src3'] = madeSrc[2];
            productDetails['color_src4'] = madeSrc[3];
            productDetails['color_src5'] = madeSrc[4];
            productDetails['color_src6'] = madeSrc[5];



            // additional number of swatches (if any) not rendered
            if (products[product].variants.length > 4) {
              productDetails['swatchOverFour']  = products[product].variants.length - 4
            }

            // first four variant urls
            productDetails['var_url1'] = variantUrl[0];
            productDetails['var_url2'] = variantUrl[1];
            productDetails['var_url3'] = variantUrl[2];
            productDetails['var_url4'] = variantUrl[3];
            productDetails['var_url5'] = variantUrl[4];
            productDetails['var_url6'] = variantUrl[5];

          /* ----------------HANDLEBARS TEMPLATING RELATED ---------------------*/
            // Grab the template script
            var source = $('#template-src').html();
            // Compile the template
            var template = Handlebars.compile(source);
            // Add the compiled html to the page via productDetails object
            $('#append').append(template(productDetails));

            var source = $('#template-src').html();
            var template = Handlebars.compile(source);
            $('#append2').append(template(productDetails));
            var source = $('#template-src').html();
            var template = Handlebars.compile(source);
            $('#append3').append(template(productDetails));

          /* ----------------END HANDLEBARS TEMPLATE RELATED ---------------------*/

          }

        }


        /*
        -attach click handler to page onload
        -ensure AJAX call only happens once (note: AJAX function immediately hides rendered product elements)
        */

          var baseUrl = 'https://www.deltachildren.com/collections/'

          $(window).on("load", function() {

            if ($.first_time == true) {

                if (url == baseUrl + 'gliders' || url == baseUrl + 'gliders' + '?page=1' || url == baseUrl + 'gliders' + '?page=2') {

                  getFilterProducts_Gliders();

                } else if (url == baseUrl + 'cribs' || url == baseUrl + 'cribs' + '?page=1' || url == baseUrl + 'cribs' + '?page=2' || url == baseUrl + 'cribs' + '?page=3' || url == baseUrl + 'cribs' + '?page=4') {

                  getFilterProducts_Cribs();

                } else if (url == baseUrl + 'dressers-and-changers' || url == baseUrl + 'dressers-and-changers' + '?page=1' || url == baseUrl + 'dressers-and-changers' + '?page=2' || url == baseUrl + 'dressers-and-changers' + '?page=3' || url == baseUrl + 'dressers-and-changers' + '?page=4') {

                  getFilterProducts_Dressers_Changers();

                } else if (url == baseUrl + 'toddler-beds' || url == baseUrl + 'toddler-beds' + '?page=1' || url == baseUrl + 'toddler-beds' + '?page=2' || url == baseUrl + 'toddler-beds' + '?page=3') {

                  getFilterProducts_Toddler_Beds();

                } else if (url == baseUrl + 'toy-storage' || url == baseUrl + 'toy-storage' + '?page=1' || url == baseUrl + 'toy-storage' + '?page=2' || url == baseUrl + 'toy-storage' + '?page=3' || url == baseUrl + 'toy-storage' + '?page=4') {

                  getFilterProducts_Toy_Storage();

                } else if (url == baseUrl + 'table-chair-sets' || url == baseUrl + 'table-chair-sets' + '?page=1' ||url == baseUrl + 'table-chair-sets' + '?page=2' || url == baseUrl + 'table-chair-sets' + '?page=3') {

                  getFilterProducts_Table_Chair_Sets();

                } else if (url == baseUrl + 'kids-seating' || url == baseUrl + 'kids-seating' + '?page=1' || url == baseUrl + 'kids-seating' + '?page=2' || url == baseUrl + 'kids-seating' + '?page=3') {

                  getFilterProducts_Kids_Seating();

                } else if (url == baseUrl + 'storage-decor' || url == baseUrl + 'storage-decor' + '?page=1' || url == baseUrl + 'storage-decor' + '?page=2') {

                  getFilterProducts_Storage_Decor();

                } else if (url == baseUrl + 'guardrails' || url == baseUrl + 'guardrails' + '?page=1'  || url == baseUrl + 'guardrails' + '?page=2') {

                  getFilterProducts_Guardrails();

                  //fix made to make condition more flexible for any url containing "shop-now"
                } else if (window.location.href.indexOf('shop-now') > -1){

    //             } else if (url == baseUrl + 'shop-now' || url == baseUrl + 'shop-now' + '?page=1'  || url == baseUrl + 'shop-now' + '?page=2' || url == baseUrl + 'shop-now' + '?page=3' || url == baseUrl + 'shop-now' + '?page=4' || url == baseUrl + 'shop-now' + '?page=5' || url == baseUrl + 'shop-now' + '?page=6' || url == baseUrl + 'shop-now' + '?page=7' || url == baseUrl + 'shop-now' + '?page=8' || url == baseUrl + 'shop-now' + '?page=9' || url == baseUrl + 'shop-now' + '?page=10' || url == baseUrl + 'shop-now' + '?page=11' || url == baseUrl + 'shop-now' + '?page=12' ) {

                  getFilterProducts_Shop_Now();

                } else {

                  getAllFilterProducts();

                }

            }

          });



        // FILTER BOX EVENT HANDLING AND FUNCTIONALITY
        $filterBox.on('change', function(e) {

          $('#collectionGrid').hide();
          $('.pagination').hide();

          var selectedFilters = {};

          $filterBox.filter(':checked').each(function() {

            if(!selectedFilters.hasOwnProperty(this.name)) {

              selectedFilters[this.name] = [];

            }

            selectedFilters[this.name].push(this.value);

          });

          var $filteredResults = $('.filteredProduct');

          $.each(selectedFilters, function(name, filterValues) {

            $filteredResults = $filteredResults.filter(function() {

              var matched = false,
                currentFilterValues = $(this)[0].attributes[5].value.split(',');

              $.each(currentFilterValues, function(_, currentFilterValue) {

                if ($.inArray(currentFilterValue, filterValues) != -1) {

                  matched = true;
                  return false;

                }

              });

              return matched;

            });

          });


          $('.filteredProduct').hide().filter($filteredResults).fadeIn(100);


          (function() {

            $('.filteredProduct > .product').css('visibility', 'hidden')

            setTimeout( function(){
              $('.filteredProduct > .product').css('visibility', 'visible')
            }, 10);

          })()

          var checkBoxes = $('.checkBox');
          var allVisibleTagsArray = [];
          var checkBoxTags = [];

          var visibleProducts = $('#append').children(':visible');

          for (var i = 0; i < visibleProducts.length; i++) {

            var visibleProductsLoop = visibleProducts[i];

            allVisibleTagsArray.push(visibleProductsLoop.dataset.alltags);

          }

          for (var i = 0; i < checkBoxes.length; i++) {

           var filterBoxLoop = checkBoxes[i];

           checkBoxTags.push($(filterBoxLoop).attr('value'));

          }

          var updateAllVisible = allVisibleTagsArray.toString().split(",")

          var diff = $(checkBoxTags).not(updateAllVisible).get();

          var thisCheckBox = this;

          var checkLi = $(thisCheckBox).parent();



          //----- swatch functionality and dynamic product image update on collection page / dynamic href udpate  -----

          if ($(window).width() > 1024) {

            $('.filterSwatches div').each(function() {

              $(this).hover(function() {

                  var swatch_src = $('img', this).attr('src');

                  function get_swatch_color(x) {

                    var split1 = x.split("/");
                    var split2 = split1[4].split(".");
                    var split3 = split2[0].split("_").join(" ");
                    var split4 = split3.replace(/\d+/g, '')

                    return split4;

                  };

                  var swatchColor = get_swatch_color(swatch_src);


                  var articlesContainer = $(this).parent().parent().parent();

                  var varImages = $('.varImages', articlesContainer);

                  $(varImages).each(function() {

                    var varImageColor_id = $(this).attr('id');

                    function getImageColor(y) {

                      var removeNum = varImageColor_id.replace(/\d+/g, '');
                      var colorNoParenth = removeNum.replace(/[{()}]/g, '');

                      return colorNoParenth;

                    }

                    var imageColor = getImageColor(varImageColor_id);

                    // compare isolated image color from swatch with isolated image color from product title (taken from id)
                    if (imageColor == swatchColor) {

                      var swatchSelectedImageSrc = $('img', this).attr('src');
                      // debu
                      var swatchSelectedImageHref = $('a', this).attr('href');

                        /*
                         once matched update main image shown for product on collection page according to swatch color
                         udpdate image href and image title href to redirect to appropriate product page according to variant color
                        */
                       $('.mainImg', articlesContainer).attr('src', swatchSelectedImageSrc);
                       $('.mainHref', articlesContainer).attr('href', swatchSelectedImageHref);
                       $('h2 a', articlesContainer).attr('href', swatchSelectedImageHref);
                    }

                  });

                });

             });

           } else {

             $('.filterSwatches div').each(function() {

               $(this).click(function() {

                   var swatch_src = $('img', this).attr('src');

                   function get_swatch_color(x) {

                     var split1 = x.split("/");
                     var split2 = split1[4].split(".");
                     var split3 = split2[0].split("_").join(" ");
                     var split4 = split3.replace(/\d+/g, '')

                     return split4;

                   };

                   var swatchColor = get_swatch_color(swatch_src);


                   var articlesContainer = $(this).parent().parent().parent();

                   var varImages = $('.varImages', articlesContainer);

                   $(varImages).each(function() {

                     var varImageColor_id = $(this).attr('id');

                     function getImageColor(y) {

                       var removeNum = varImageColor_id.replace(/\d+/g, '');
                       var colorNoParenth = removeNum.replace(/[{()}]/g, '');

                       return colorNoParenth;

                     }

                     var imageColor = getImageColor(varImageColor_id);

                     // compare isolated image color from swatch with isolated image color from product title (taken from id)
                     if (imageColor == swatchColor) {

                       var swatchSelectedImageSrc = $('img', this).attr('src');

                       var swatchSelectedImageHref = $('a', this).attr('href');

                         /*
                          once matched update main image shown for product on collection page according to swatch color
                          udpdate image href and image title href to redirect to appropriate product page according to variant color
                         */
                        $('.mainImg', articlesContainer).attr('src', swatchSelectedImageSrc);
                        $('.mainHref', articlesContainer).attr('href', swatchSelectedImageHref);
                        $('h2 a', articlesContainer).attr('href', swatchSelectedImageHref);
                     }

                   });

                 });

               });


           }

             var filterSwatches_img = $('.filterSwatches div img');

             $(filterSwatches_img).each(function() {

               if ($(this).attr('src') == '') {

                $(this).parent().detach();

               }

             });

             /*
              if there's only one product color/style (i.e. only 1 swatch would show)
              hide that swatch (to mimick Swatchify app); also hide the sibling text showing the amount of additional swatches if any
             */
             var filterSwatches = $('.filterSwatches');

             setTimeout(function() {

               for (var i = 0; i < filterSwatches.length; i++) {

                  var filterSwatches_div = $('div', filterSwatches[i]);

                  if (filterSwatches_div.length == 2) {

                    //commented out "display: none" below to allow for one swatch to be shown if a product only has one variant
    //                 $(filterSwatches_div).css('display', 'none');

                    $(filterSwatches_div).parent().siblings().css('display', 'none');

                  }

               }

             }, 200);

             $('.filterSwatches').each(function() {

               if ($('div', this).length == 2 || $('div', this).length < 2 ) {
                 $(this).parent().next().css('margin-top', '58px');
               }

             });

            // look for which products have additional swatches not shown (i.e. text length longer than 6),
            // if less than that, hide text (so doesn't just show 'More' with no number
            // (logic already in place to only show show swatch number if total amount of variants is greater than 4)
            $('.swatchCount p').each(function() {

              if ($(this)[0].innerHTML.length < 6) {
                $(this).css('display', 'none')
              }


            });

            var moreSwatches = $('.moreSwatches')

            $(moreSwatches).each(function() {

              if ($('h1', this).text().length > 0) {

                // $('h1', this).html('<i class="fa fa-plus" aria-hidden="true"></i>');
                $('h1', this).text("+");
                $('h1', this).css({
                  position: 'relative',
                  bottom: '12px'
                });

                $('.swatchCount').css('padding-top', '5px');

              } else {

                $(this).css('display', 'none');

              }

            });

          /* -- end swatch functionality -- */


        }); //-------- END filterBox onChange------------------



          // FUNCTIONALITY TO GET CHECKBOX ACTIONS ON CLICK OF ACCOMPANYING TEXT
       if ($(window).width() > 641) {

        $('.checkBoxText').each(function() {

           $(this).on('click', function() {
             var textTriggerCheckBox = $(this).parent().children()[0];
             $(textTriggerCheckBox).trigger('click')

          });

        });

       }



        // ------------SORT BY INPUT EVENT HANDLING----------------
        $('#sort-by').change(function() {

          if ($filterBox.is(":checked")) {

            sort()

          } else {

              $('#collectionGrid').hide();
              $('.pagination').hide();
              $('.filteredProduct').show();

              // if checkboxes are not checked, trigger 2 checkbox checks (retrieve all products rendered with JSON & their swatch info)
              $('#filterList .checkBox:nth-of-type(1)').trigger('click');
              $('#filterList .checkBox:nth-of-type(1)').trigger('click');

              sort()

          }

        });




        // SORT FUNCTIONALITY
        var sort = function () {

          if ($(':selected')[0].innerHTML == "Price: Low to High") {

            $('ul#append').hide()

            var priceContainer = $('ul#append');
            var price = $(priceContainer).children('li')

            price.sort(function(a,b){

              var a = a.getAttribute('data-price');
              var b = b.getAttribute('data-price');

              return a - b

            });

            $(price).detach()

            $(price).appendTo(priceContainer)

            $('ul#append').show()

          }

          if($(':selected')[0].innerHTML == "Price: High to Low") {

            $('ul#append').hide()

            var priceContainer = $('ul#append');
            var price = $(priceContainer).children('li')

              price.sort(function(a,b){

                var a = a.getAttribute('data-price');
                var b = b.getAttribute('data-price');

                return b - a

              });

              $(price).detach()

              $(price).appendTo(priceContainer)

              $('ul#append').show()

            }

        }

        //if there are no checkbox filter options, move sort to the left margin of page & remove 'Filter' heading

        if($('.js-collection-filter').length == 0){
          $('#sort').css({
            position: 'absolute',
            left: '2px',
            top: '2px',
          });
          $('#collectionGrid').css({
            paddingTop: '30px'
          });
          $('#filtersWrap h3').css('display', 'none');

        }

        // **if in mobile view no hero image, move filter and sort up the screen
        if ($(window).width() < 641) {
            // if no hero image, move filter and sort up the screen
          if ($('#bannerImage').length == 0) {

            $('.hero_image').css('display', 'none');

            $('#filteredProduct').css({
              maxWidth: 'calc(50% - 10px)'
            });

            $('#sort').css({
              position: 'relative',
              top: '-200px',
              left: '-210px'
            });

            $('#sort label').css({
              paddingRight: '90px',
            });

            $('#sort-by').css({
              position: 'relative',
              bottom: '5px'
            });

            // $('#filtersWrap').css({
            //   paddingBottom: '40px'
            // });

            // $('#noFilterMainContainer').css({
            //   position: 'relative',
            //   top: '-350px'
            // });

            $('#append').css({
              position: 'relative',
              bottom: '225px'
            });



          }

            //  adjust product grid because of vertical length of filter options when there are 4
          if ($('#mainFilterContainer > form').length == 4) {

            $('#collectionGrid').css({
              paddingTop: '12%'
            });
            $('#append').css({
              paddingTop: '30%'
            });
            $('#sort').css({
              position: 'relative',
              // top: '-205px'
            });

          }

          //  adjust product grid because of vertical length of filter options when there are 4
          if ($('#mainFilterContainer > form').length == 3) {

              $('#collectionGrid').css({
                position: 'relative',
                top: '3%'
              });
              $('#append').css({
                position: 'relative',
                top: '8px'
              });
              // $('#sort').css({
              //   position: 'relative',
              //   top: '-181px'
              // });

            }
        }

        //  FIX ISSUE CAUSING PRICES IN STROLLERS COLLECTION TO APPEAR IN INCORRECT ORDER
        var rmvStrollerPrice = document.querySelectorAll('#filterList ul#insertStrollerPriceFix');

         for (var i = 0; i < rmvStrollerPrice.length; i++) {

          //  console.log(rmvStrollerPrice[i]);
           var rmv = rmvStrollerPrice[2]
           var rmvThis = $(rmv).detach();

           $(rmvThis).insertAfter('#insertStrollerPriceFix');

         }

        //  FIX ISSUE CAUSING PRICES IN TABLES & CHAIRS COLLECTION TO APPEAR IN INCORRECT ORDER
        var rmvStrollerPrice = document.querySelectorAll('#filterList ul#insertTableChairPriceFix');

         for (var i = 0; i < rmvStrollerPrice.length; i++) {

          //  console.log(rmvStrollerPrice[i]);
           var rmv = rmvStrollerPrice[3]
           var rmvThis = $(rmv).detach();

           $(rmvThis).insertAfter('#insertTableChairPriceFix');

         }


         $('.image-wrap').each(function() {
            // offset title/price to be level with other titles/prices if product has no swatches
            if ($('.panda-swatches-coll-cont', this).length == 0) {

              $(this).siblings().css('margin-top', '67px');

            }

         });

         /*
         TRANSFORMS EXTRA SWATCHES OUTPUT RENDERED VIA SWATCHIFY APP...
         oringially, output shown would be '2 more' (etc.);
         per Hannah's request, transformed into additional swatch with plus sign that
         redirects to product page so user can see all possible variations of product
         */
         $('.panda-swatches-coll-cont').each(function() {

           if ($('.ps-have-more', this).length == 1) {

              $('.ps-have-more', this).css('display', 'none');

              var imgWrap = $(this).parent();
              var productUrl = $('.image > a', imgWrap).attr('href');
              $(imgWrap).siblings().css({
                position: 'relative',
                top: '5px'
              });


              $('<div style="width: 27px; height: 27px; border: 1px solid #aba2a2;"><a href="' + productUrl + '"><h1 style="text-align: center; position: relative; bottom: 8.5px;">+</h1></div></a>').insertAfter($('.panda-swatch-coll:last-of-type', this))

              $(this).css('display', 'flex');
              $(this).children().css({
                marginLeft: '3px',
                marginRight: '3px'
              });

           }

         });

          //  custom code to work created to work with Shopify app to update image href once product image is updated on collection page via swatch
         $('.ps-have-image').each(function() {
           var img_wrap = $(this).parent().parent();

           $(this).hover(function() {

             var updatedVarUrl = $(this).attr('data-variant-url');




             $('.varRedirect', img_wrap).attr('href', updatedVarUrl);

           });

           if($(window).width() < 1025) {

             $(this).click(function(e) {


               var imgUpdateSrc = $(this).attr('data-src');

               var updatedVarUrl = $(this).attr('data-variant-url');


               $('.varRedirect', img_wrap).attr('href', updatedVarUrl);

               $('.prodImgCollPage', img_wrap).attr('src', imgUpdateSrc);


               console.log("ran");

               e.stopPropagation()

             });


           }

         });

          //changes swatches on collections pages before filter

         $('.product-item__info ul li').each(function() {
             $(this).hover(function() {
               //from swatch
                 var url = $('a', this).css('background-image');
                  var swatchLink = url.split(/"/)[1];
                  var swatchColor = swatchLink.split("/")[11].split(".")[0].replace(/[0-9]/g, '').split("-").join(" ").replace(/\b\w/g, l => l.toUpperCase()).strip()
                  //from li
                  var imageColor = $(this).attr("title").replace(/\d+/g, '').replace(/[{()}]/g, '').strip()
                  var imageCap = imageColor.split(" ").map(function(word) { return (word.charAt(0).toUpperCase() + word.slice(1));
                  }).join(' ').replace(/\//g, " ").replace( /\s\s+/g, ' ' )
                  console.log(imageCap === swatchColor)
                  // debugger;
                   // compare isolated image color from swatch with isolated image color from product title (taken from id)
                   if (imageCap == swatchColor) {
                     var productLink = "http://www.deltachildren.com" + $('a', this).attr('href'); // use this variable in varImageSrc
                     var productVariantHref = "https://www.deltachildren.com" + $(this).find('a').attr('href');
                     var varImageSrc =$("a[href='"+productVariantHref+"']").find('.imgHB').attr('src')  // finds specific variant and then the src for it
                     console.log(productVariantHref)
                     console.log(varImageSrc)
                     debugger;

                     var productContainer = $(this).parent().parent().parent();
                     var swatchSelectedImageSrc = $('a', this).css('background-image').split(/"/)[1];
                      $('.product-item__image', productContainer).attr('srcset', varImageSrc);
                      $('product-item__link', productContainer).attr('href', swatchSelectedImageSrc);
                      $('h3 a', productContainer).attr('href', productVariantHref);
                   }
                 })
               })








      }); // end jQuery Document Ready
