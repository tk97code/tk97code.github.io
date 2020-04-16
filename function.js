$('#alertSpace').hide();

$(function() {
    $('#txtUsername').on('keypress', function(e) {
        if (e.which == 32){
            $('#alertSpace').show();
            return false;
        }
    });
});

