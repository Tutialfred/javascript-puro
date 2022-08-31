// Bucles o ciclos, sloop









//⬜ for
 
// var numero = 1

// for(numero; numero <= 30;numero++){
//     if(numero >= 16){
//         break;
//     }
//     if(numero % 2 ===0){
//         console.log( numero + " This is a par")
//         continue
//     } 
//     console.log(numero)
// }

















// ⬜ While


// var i = 1

// while (i < 31){
    
//     console.log(i)
//     i++


//     if(i >= 15){
//        break
//     }
    

//     if(i % 2 === 0){
//         console.log(i + " this is par")
//         i++   
//     }
// }

















// ⬜ Confeccionar un programa que le permita al docente cargar el nombre y las 5 notas de un alumno
// de esa información : calcular promedio, 
// nota máxima, nota minima, saber si está o no aprobado



//     const nombre = prompt("Ingrese el nombre de su alumno");

//     const Notas = []
//     let total = 0

//     for (let index = 1; index <= 5; index++) {
        
//         const Note1 = parseInt(prompt(`Ingresa la nota Numero ${index} del alumno → ${nombre}`))
        
//         Notas.push(Note1)
//         total = total + Note1; 

//     }
//     const promedio = total / Notas.length
//     const maxima = Math.max(...Notas) //NOTA MAXIMA
//     const minima = Math.min(...Notas) //NOTA MINIMA
//     // console.log(total)
//     // console.log(Notas)

//     console.log(`El promedio del alumno ${nombre} es de ${promedio}`) //

//     promedio >= 7 ? console.log(`${nombre} Aprobo la materia, Gracias a que tu promedio fue de ${promedio}`) : console.error(`${nombre} no pudo aprobar la materia, por que tu promedio fue de ${promedio}`)


//     console.log(`Tu nota maxima fue de : ${maxima} 
// y tu nota minima fue de : ${minima}`)

























// Agregar al arary 10 numeros aleatorios del 1 al 100 (dependiendo de lo que le pasemos por parametros. el primero es el minimo y el segundo hasta donde (y agregar uno más))


// function numeroAleatorio (min, max){
//     return (Math.floor(Math.random() * (max - min) + min));
//  }



//  const arreglo = []

//     for (let index = 1; index <= 10; index++) {
//         arreglo.push(numeroAleatorio(1, 101))
//     }

// console.log(arreglo)
























// // la misma palabra si es igual, dandola vuelta

// const tuti = "somos"

// let result = tuti.split("").reverse().join("")



// console.log(tuti)
// console.log(result)


// tuti === result ? console.log("al reves es lo mismo") : console.log("Its not the same")
 











































// Juego adivinar





// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const guessField = document.querySelector('.guessField');
// const guessSubmit = document.querySelector('.guessSubmit');

// let guessCount = 1;
// let resetButton;
// guessField.focus();



// function checkGuess() {
//     let userGuess = Number(guessField.value);
//     if (guessCount === 1) {
//       guesses.textContent = 'Intentos anteriores: ';
//     }
//     guesses.textContent += userGuess + ' ';
  
//     if (userGuess === randomNumber) {
//       lastResult.textContent = '¡Felicidades! ¡Lo adivinaste!';
//       lastResult.style.backgroundColor = 'green';
//       lowOrHi.textContent = '';
//       setGameOver();
//     } else if (guessCount === 10) {
//       lastResult.textContent = '¡¡¡Fin del juego!!!';
//       setGameOver();
//     } else {
//       lastResult.textContent = '¡Incorrecto!';
//       lastResult.style.backgroundColor = 'red';
//       if(userGuess < randomNumber) {
//         lowOrHi.textContent = '¡El número es muy bajo!';
//       } else if(userGuess > randomNumber) {
//         lowOrHi.textContent = '¡El número es muy grande!';
//       }
//     }
  
//     guessCount++;
//     guessField.value = '';
//     guessField.focus();
   
//   }
//   guessSubmit.addEventListener('click', checkGuess);



//   function setGameOver() {
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'Iniciar nuevo juego';
//     document.body.append(resetButton);
//     resetButton.addEventListener('click', resetGame);
//   }



//   function resetGame() {
//     guessCount = 1;
  
//     const resetParas = document.querySelectorAll('.resultParas p');
//     for (let i = 0 ; i < resetParas.length ; i++) {
//       resetParas[i].textContent = '';
//     }
  
//     resetButton.parentNode.removeChild(resetButton);
  
//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = '';
//     guessField.focus();
  
//     lastResult.style.backgroundColor = 'white';
  
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//   }




//   guesses.style.backgroundColor = 'yellow';
//   guesses.style.fontSize = '120%';
//   guesses.style.padding = '10px';
//   guesses.style.boxShadow = '3px 3px 6px black';



// // NUMERO A ADIVINAR
// console.log(randomNumber)















// Una funcion que como parametro reciba un vector y muestre todos los elementos pares que tiene


// const pares = (vector) => {

//     vector = [1,2,3,4,5,6,7,8,9,10]
    
    
//     for (const iterator of vector) {
//         if(iterator % 2 ==0){
//             console.log(`${iterator} → This is a par number !⬜`)
//         } else{
//             console.log(`${iterator} → Its normal `)
//         }
//     }

// }
// pares()
















// // Pedir datos al usuario e ir agregandolo al array , despues mostrarlo, Por parametro le indicamos las  veces que se va repetir 
// // este promp , sino tambien podriamos hacer, un while con confirm , para elegir a decidir al cliente las veces que quiera agregar un elemento al array (promp)

// const loadNumbers = (repeat) =>{
    
//     const numbers = []

//     for (let index = 0; index < repeat; index++) {
        
//         const cliente = parseInt(prompt("Give your number"))
       
//         numbers.push(cliente)
      
//     }

//     return numbers //Exporta archivo , deja de ser local y se puede usar afuera
// }
// // --------------------------------------------------------------------------------------------------------
// // UNIENDO DOS FUNCIONES
// // --------------------------------------------------------------------------------------------------------
// const solution = loadNumbers(2) //Añadiendo lo que esta retornando la funcion (loadNumbers) a una variable (solution) === numbers = [] ←Lo que le pasamos por promp , queda en el arreglo, only numbers


// console.log(solution)


// // --------------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------------
// const pares = () => {
 
    
//     for (const iterator of solution) {
//         if(iterator % 2 == 0){
//             console.log(`${iterator} → This is a par number !⬜`)
//         } else if(iterator % 2 == 1){
//             console.log(`${iterator} → Its normal `)
//         } else{
//             console.error("Tuviste que ingresar un numero")
//         }
//     }
// }
// pares()




























// // OTHER EXAMPLE:  

// //Gurdando un return de una funcion en una variable , para despues poder usarla como global (mesaggeConfirm)...

// function Mayor(edad){
      
//     if(edad >= 18){
      
//         console.warn("✅")
//         return "el usuario si es mayor"
    
//     } else{

//         console.error("⛔")
//         return "el usuario si es menor"
//     }
// }
// const mesaggeConfirm = Mayor(prompt("tell me you age"))
// console.log(mesaggeConfirm)



























