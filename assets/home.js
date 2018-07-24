$(function() {
  //lazy loading of home page images
  $('.lazy').Lazy({
   scrollDirection: 'vertical',
   effect: 'fadeIn',
   visibleOnly: true,
   onError: function(element) {
       console.log('error loading ' + element.data('src'));
   }
   });
});
