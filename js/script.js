console.log("Online")

// PASO 1: Seleccionar elementos

var texto = document.getElementById("texto");
var muestra = document.getElementById("muestra")
// comprobar cvariable siempre q se guarde algo con console. log 

// PASO 2: Texto en vivo
texto.addEventListener("input", function() {
   if (texto.value === ""){
      muestra.textContent = "El veloz murciélago hindú";

   } else {
      muestra.textContent = texto.value; 

   }

})