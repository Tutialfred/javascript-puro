// Bluuweb! Javacript







// // Utilizando backticks en un console.log y el prompt ${} para llamar a la variable
// let nombre = "Tuti";
// console.log(`Really.
// No problem,
// its okay! ${nombre.toUpperCase()}
// `); 

// // toUpperCase() // es un metodo que hace todo el texto en mayuscula









// // Operador ternario
// // otro tipo de condicion

// let cash = true

// console.log(`
// ${cash ? "Excellent ✅" : "Not good 💔"}
// `
// )







// // Agregando elementos a un array
// const frutas = []
// frutas[0] = "Oscar"
// frutas[1] = "Tuti"

// console.log(frutas) //Un array con 2 elementos
// console.log(frutas[1]) //Muestra "Tuti"

 








// //Eliminar el ultimo elemento de un array y devolverlo!

// const mujeres = ["rubia", "flaca", "morocha", "PETISA"]


// const mujeresCrazy = mujeres.pop();
// console.log(mujeres);
// console.log(mujeresCrazy);









// // Confirmar algo == confirm("Quieres ir?")
// // Parecido al prompt pero con un "aceptar" o "cancelar" == recibe valor booleano

// let puchy = confirm("do you want to smoke?")

// if(puchy === true){
//     console.log("Toma... fuma")
// } else{
//     console.log("Esta bien, no fumes")
// }










// Tienda de frutas 
// const frutas = []

// const fruta = prompt("🍏 Welcome to El cuca, Que fruta desea comprar?🍉")
// frutas.push(fruta);


// while(confirm("Desea agregar otro producto al 🛒")){
//     const fruta = prompt("Que otra fruta desea agregar?")
//     frutas.push(fruta);
// }

// console.log("Compraste: ")
// for(const allFruta of frutas){
//     console.log(allFruta)
// }














// // Funcion declarativa 
// // Numero aleatorio del 1 al 10 (recibe como minimo y maximo)
// // Algoritmo


// function numeroAleatorio (min, max){
//    return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(numeroAleatorio(1, 11))










// //Funcion expresada o (anonimas)
// //La funcion guardarla en una variable, despues directamente llamar a la variable

// const numAzar = function(min, max){
//    return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(numAzar(10, 101))










// //Funciones flecha
// //Lo que esta al lado de la flecha(en la misma linea(opcional), sin llaves ni return), directamente se retorna 

// const flechaAzar = (min, max) =>{
//     return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(flechaAzar(100, 201))











// // Creando un objeto "gato"
// // En un objeto ↓(estatico) pueden ir todos tipos de datos, REMINDERS
// // Un objeto, en sus propiedades pueden tener como valores, un string, numbers, booleans, arrays and other objects
// const gato = {
//     nombre :"Jimi",
//     color : "black",
//     age : 1,
//     duerme: true,
//     enemies: ["agua", "perros"],
//     others: {
//         friends: ["Happy", "Angry"],
//         favoritos: {
//             comida : {
//                 frio : "Salmon",
//                 caliente : "Pollo"
//             }
//         }
//     },
//     comer (food){
//         console.log("The cat is eating: " + food + " And you name is " + this.nombre + ", el pequeño de " +  gato.age + " age")
//     },
//     get nameMayuscula (){
//         return this.nombre.toUpperCase();
//     }   
// }


// // Leer los objetos
// // Formas de llamar a los valores de las propiedades↓

// console.log(gato);
// console.log(gato.duerme);
// console.log(gato.nombre);
// console.log(gato["color"]);
// console.log(gato["enemies"]);
// console.log(gato["enemies"][1]);
// console.log(gato.enemies[0]);

// var gatoDolar = gato.hasOwnProperty("age"); //Preguntamos si tiene esa propiedad, y recibimos como resultado un booleans

// console.log(gatoDolar)
// console.log(gato.others.favoritos.comida.caliente); //Accediento a la propiedad de objeto de un objeto de otro objeto, == Pollo
// gato.comer("Fish"); //Invocando la funcion que esta dentro del objeto 
// console.log(gato.nameMayuscula) //Conviertiendo el valor





//      CRUD    ↓ (BASE DE DATOS???????)
// Create - Read - Update - Delete
// Crear - Leer - Actualizar - Eliminar

// gato.colorNew = "WHITE"   // Creando una propiedad y valor
// gato.age = 2            // Reemplazando el valor de una propiedad(Actualizando)
// delete gato.duerme      // Eliminando la propiedad de un objeto
// gato.hasOwnProperty("age"); // Verifica si el objeto contiene la propiedad que le pasamos por parametro (Retorna valor booleans)











//   Metodos de array
// Metodos de orden superior


// .map
// Nos devuelve un nuevo array, siempre hay que retornar
// const fruits = ["🍌", "🍏", "🍓"]


// const newArray = fruits.map(function yes (item){
//     return item
// })

// console.log(newArray) //Retorna un nuevo array pero con los mismos elementos, pero una "copia"










// Filter

// const user = [
//     {uid: 1,  name: "jorge",  age: 20},
//     {uid: 2,  name: "George", age: 34},
//     {uid: 3,  name: "marty",  age: 10},
//     {uid: 4,  name: "maria",  age: 50},
// ]



// //Ejemplo de llamar a alguien con mas de 30 años 
// const mayores = user.filter((items) => items.age > 30)
// console.log(mayores)


// //Ejemplo de eliminar un usuario
// const deleteUser = user.filter((items) => items.uid != 4 )
// console.log(deleteUser)









// // FIND = Devuelve el valor del primer elemento del array que cumple la funcion
// // de prueba proporcionada

// // Le decimos que si tal valor de una propiedad se escuentra

// const user = [
//     {uid: 1,  name: "jorge",  age: 20},
//     {uid: 2,  name: "George", age: 34},
//     {uid: 3,  name: "marty",  age: 15},
//     {uid: 4,  name: "maria",  age: 50},
// ]

// // const encontrar = user.find((usuario) => usuario.uid === 4);

// console.log(encontrar)













































