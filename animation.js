$('#div-rigister').hide();

setTimeout(function() {
    $('.loadingAnimation').fadeOut(3500);
    setTimeout(function() { 
        $('body').removeAttr('style');
    }, 3500);
    $('#div-rigister').fadeIn(3500);
}, 6000);