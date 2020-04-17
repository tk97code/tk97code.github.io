$('#div-rigister').hide();

setTimeout(function() {
    $('.loadingAnimation').fadeOut(1500);
    setTimeout(function() { 
        $('body').removeAttr('style');
    }, 1500);
    $('#div-rigister').fadeIn(1500);
}, 4500);