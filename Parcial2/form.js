$(document).ready(function(){
    $("form").submit(function(event){
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#nombre").val();
        if(regex.test(currentValue) == false){
            $("#result").html('<p class="error">No es válido</p>').show().fadeOut(1000);
            
            event.preventDefault();
        }
    $("form").submit(function(){
        alert("Formulario fué enviado con exito.");
          });
    });
});