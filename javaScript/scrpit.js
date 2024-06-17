var redirigir_resumen = document.querySelector("input[name = 'resumenDeTarjeta']");
 function redirigirAResumen(){
     window.location.href = "verResumenDeTarjeta.html";
 }

redirigir_resumen.addEventListener("click", redirigirAResumen);



var redirigir_inicio_sesion = document.querySelector("input[name= 'inicio-de-sesion']");
function redirigirAInicioDeSesion(){
    window.location.href = "paginaDeInicioDeSesion.html";
}

redirigir_inicio_sesion.addEventListener("click",redirigirAInicioDeSesion);