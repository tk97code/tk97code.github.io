var input = document.getElementById('txtUsername');
var input2 = document.getElementById('remoteID');

$('#alertSpace').hide();

$(function() {
    $('#txtUsername').on('keypress', function(evt) {
        var keycode = evt.charCode || evt.keyCode;
        if (keycode == 32) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 33) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 34) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 35) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 36) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 37) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 38) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 39) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 40) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 41) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 42) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 43) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 44) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 45) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 46) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 47) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 58) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 59) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 60) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 61) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 62) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 63) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 64) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 91) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 92) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 93) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 94) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 95) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 96) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 123) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 124) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 125) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 126) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        } else if (keycode == 127) {
            $('#alertSpace').fadeIn('slow');
            setTimeout(function() {
                $('#alertSpace').fadeOut(1000);
            }, 2000);
            return false;
        }
    });
});

input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('btnSignUp').click();
    }
});