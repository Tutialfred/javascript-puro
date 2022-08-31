//Pedir nombre
let salute = prompt("Hi, whats your name?")
alert("Hi " + salute) //Saluda
console.log(salute + " Esta intentando ingresar")
//OKAY


//Pedir Contraseña
var clave = parseInt(prompt("Your contrseña"))




let password = 46474154;
let resultado = clave === password


//Condicion

if(resultado === true && !false){
    alert("Welcome!")
    console.log(salute + " ingreso a la sala")
} else if ( resultado == false || !true){
    alert("Incorrect")
    console.error(salute + " No pudo acceder")

}

console.log(resultado)


//inputs

var nameInput = document.querySelector(".ingreso") //Seleccionando elemento, etiqueta(imput text)


nameInput.value = salute;

 


