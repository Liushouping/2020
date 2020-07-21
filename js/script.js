/**/
new WOW().init();
/**/
$('body').scrollspy({ 
    target: '#navbar-example' 
});
/**/
$(document).on("click", 'a[href^="#"]', function() {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
});
/**/
$(function(){
    $('#Gotop').click(function(){ 
        $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ){
            $('#Gotop').fadeIn(222);
        } else {
            $('#Gotop').stop().fadeOut(222);
        }
    }).scroll();
});
