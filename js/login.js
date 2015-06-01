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
           // function LDAP(dades){
                $.ajax
                ({  url: 'PHP/Ldap01.php',
                    dataType: 'json',
                    type: 'Post',
                    cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
                    success: function(data) {presentaDades(data);} 
                });
          //  }
        });
    });
    function presentaDades(data){
        $("#result").html("");
        $("#result").append(
            $.each(data, function(index){
                var nom = data[index].nombres;
                var ciutat = data[index].ciudad;
                var telf = data[index].telefono;
                var idClient=data[index].id;
                $("#bar").append('<p>Id    : '+idClient+'</p>');
            //Proposta 1. Crear enllaços dinàmics amb href 
            $("#bar").append('<a href=modificar.php?id='+idClient+'>Editar | ');
            $("#bar").append('<a href=eliminar.php?id='+idClient+'>Eliminar');
            //Proposta 2. Crear botó o imatge que invoqui una funció amb paràmetre
            //$cadena="<button name='"+ idClient + "' onclick='f2("+idClient +");'>Eliminar</button>";
            //$("#resultats").append($cadena);
            //$("#resultats").append('<p>Nom    : '+nom+'\t Telefon  :'+telf+'\t Ciutat : '+ciutat+'</p><br>');
            })
        );
    }

});



