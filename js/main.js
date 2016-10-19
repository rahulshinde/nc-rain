$(document).ready(function () {

    $('.switch').mouseenter(function() {
      $('#two').fadeToggle();
    })

    $('.switch').mouseleave(function() {
      $('#two').fadeToggle();
    })

    $('.switch').click(function() {
      video.play();
      
      video.onended = function(e) {
        video.currentTime = 0;
        video.load();
      };
      
    })


});