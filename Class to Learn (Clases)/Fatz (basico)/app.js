    //TIPOS DE DATOS


"Hello World" // String
50            // Numbers
true          // Booleano
false         // Booleano


//Array = Contienen elementos separados por comas ,
["Martha", "Joe", "Ryan"]
[ 50, 10, 85]
[true, false, true]


//Object = Contienen elementos separados por comas ,
{
//  "Name": "Alexlunix",
//  "Score": 50,
//  "Hours": 2,
//  "Proffesional": false
}

{
//  "Name": "Tuti",
//  "Score": 900,
//  "Hours": 9,
//  "Proffesional": true
}


    //VARIABLES = Como almacenar los datos 


let Name = "John";
let Lastname = "Wick"


//Const= Se mantiene con el mismo valor, irremplazable
const Score = 130.000






    //OPERADORES DE COMPARACIÓN = Comparan dos expresiones   

    //Teniendo los datos en la base de datos, retorna un valor booleano 

    let Input = "Tuti123" //Dato ingresado
    let KeyDataBase = "65661239" //Dato en la base de datos
    

    let result = Input === KeyDataBase;
    //false






    //CONDICIONALES = Solo pueden tener dos estados (booleanos)

    // Se aplica condicional al operador de arriba ↑

if (result === true){
    alert("Correct")
} else {
    alert("Incorrect")
}    
// = Incorrect
  


//Puntuacion y resultado en un videojuego
//Hasta una tercera respuesta, booleana

let score = 10;

if (score > 70){
    console.log("Muy bien hecho!");
} else if (score > 50){
    console.log("Bien hecho");
}
else  { //Tipo default. else solo
    console.error("Practice more");
}


//Segunda opcion de control de flujo condicional
//Switch, case, break and default

//Ingreso de tarjeta en un banco

let typeCard = "Credit Card";

switch (typeCard) { 
  case "Debit Card":
        console.log("this is a Debit Card");
        break;
  case "Credit Card":
      console.log("This is a Credit Card");
      break;
  default: //Tipo else solo. Default
  console.log("No card")
}


    //BUCLES = Es algo rápido y de hacer algo repetidamente que se repite

    //No tenemos que realizarlas varias veces de forma manual



//while = aplica una condicion(true o false)

 var count = 15; //Asignando valor a Count con variable 

while(count >= 0){ // >= Mayor o igual
        console.log(count); // Mensaje
        count-- //Descuenta 1 por cada vez que se aplica el bucle
        
    }



//For = trabaja con listas

let names = ["Ryan", "Joe", "John"]

for(let index = 0; index < names.length; index++) {
      console.log(names[index])
}



    //FUNCIONES = Definir un comportamiento y despues invocarla para usarlo
    //Funcion de saludar


    
 function greeting(empleados, semana){
    console.log("Hi, welcome " + empleados + " " + semana); 
}
greeting("Marcos", "(Sin faltas)");
greeting("Connor", "(3 Faltas)");
greeting("Kara", "(2 Faltas)");
greeting("Trevor", "(Sin Faltas)");



    
