$(document).ready(function(){

    $(function() {
        var button = $('#loginButton');
        var box = $('#loginBox');
        var form = $('#loginForm');
        button.removeAttr('href');
        button.mouseup(function(login) {
            box.toggle();
            button.toggleClass('active');
        });
        form.mouseup(function() { 
            return false;
        });
        $(this).mouseup(function(login) {
            if(!($(login.target).parent('#loginButton').length > 0)) {
                button.removeClass('active');
                box.hide();
            }
        });
    });


    $(function() {
        var entra = $("#login");
        entra.on("click",function() {
            alert('Has clickat a entrar');
        });   
    });

    $(function() {
        var LDAP = $("#LDAP");
        LDAP.on("click",function() {
            alert('Has ckickat a LDAP');
        });
    });


});



