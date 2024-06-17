


var ingresar = document.querySelector("input[name = 'ingresar']");


function obtenerResumen(){
    let dni = document.querySelector("input[name='dni']").value;
    dni= dni.toString();

    if(dni === "38461763"){
      window.location.href = "resumen.html";  
    } else{
        let error = document.getElementById('mensajeDeError');
        
        error.innerHTML=" ERROR <br>EL DNI INGRESADO  NO SE <br>ENCUENTRA REGISTRADO"
        error.style.fontSize ="1.5em "
        error.style.color = "red";
        error.style.padding = "2em"
    }
}

ingresar.addEventListener("click",obtenerResumen);







var redirigir_inicio_sesion = document.querySelector("input[name= 'inicio-de-sesion']");
function redirigirAInicioDeSesion(){
     window.location.href = "paginaDeInicioDeSesion.html";
 }

 redirigir_inicio_sesion.addEventListener("click",redirigirAInicioDeSesion);


