//MOSTRANDO TODOS ESTOS EJEMPLOS EN LA CONSOLA!

// alert("Esta es una alerta al abrir el navegador, are you okay?")

console.log("This is a Strings");
console.log([50, 50, 50]);
console.log({"Nombre" : "Tuti Zavala", "años": 21, "Cash" : "130.000"});
console.error("Try Again, please");
console.clear()     //Limpia toda la consola
console.table(["Oscar", "Tuti", "Tirri", "Pichy", "Ganga"]) //Crea  tabla con indice y valor
console.warn("Cuidado con el codigo") //Crea un tipo errror, pero es Advertencia. color yellow
 
//TIEMPO ↓

console.time()      //Inicia un temporizador
console.timeLog()   //Registra el valor (Muestra el tiempo) 
console.timeEnd()   //Detiene el temporizador



//      Variables

var Name = "John";
let Lastname = "Wick"

console.log(Name, Lastname);

//Constant

const Point = "$120000"
console.log(Point);


//Operador de comparación

let Input = "Tuti123"
let Key = "65661239"

let result = Input === Key;

console.log(result);

// Se aplica condicional al operador de arriba ↑ (Manera correcta, o más profesional en app.js)

if (result == true){
    console.log("WELL DONE")
    
}
if (result == false){
    console.log("BAD DONE")

}   
    //BAD DONE


//Puntuacion y resultado en un videojuego

  let score = 40;

  if (score > 70){
      console.log("Muy bien echo!");
  } else if (score > 50){
      console.log("Bien hecho");
  }
  else  { 
      console.error("Practice more");
  }


  //BANK


  let typeCard = "Debit Card";

  switch (typeCard) {
    case "Debit Card":
          console.log("this is a Debit Card");
          break;
    case "Credit Card":
        console.log("This is a Credit Card");
        break;
    default : 
    console.log("No card")
  }


  //Bucle


  var count = 10;

  while(count >= 0){
      console.log(count);
      count = count -1 //Forma más correcto en app.js count--
  }



//messages for person

//For = trabajar por lista


  let names = ["Ryan", "Joe", "John"]

  for(let index = 0; index < names.length; index++) {
      console.log(names[2])
  }


console.error("NEWS")



 //Funcion de saludar

  function greeting(empleados, semana){
    console.log("Hi, welcome " + empleados + ", tu semana fue de :" + semana); 
}
greeting("Marcos", "(Sin faltas)");
greeting("Connor", "(3 Faltas)");
greeting("Kara", " (2 Faltas)");
greeting("Trevor", "(Sin Faltas)");


// PROGRAMACION ORIENTADA A OBJETOS





// Crear un objeto que puede tener como valor (string,number,arrays y objeto)
// Atributos↓
const GangaUser = {
    user: "Percha",
    age: 27,                                    // Properties, Propiedad(atributos), clave y valor.
    style: ["nike", "Gucci", "calvinKlein"],    
    where: {
        country: "Arg",
        city: "mdz",
        available: true
    },
    color : "Red and black",
    Glamour(){ //  Metodo
       return "My name is " + this.user + " Me gusta vestir de " + this.style[1] + " y tengo " +  this.age ; 
       //   el This llama al valor del atributo seleccionado               ↑
    }
}

console.log(GangaUser.Glamour()); //My name is Percha me gusta vestir de Gucci y tengo 27
document.write(GangaUser.Glamour()); //My name is Percha me gusta vestir de Gucci y tengo 27







//Second Exercise 
//BANK


const account = { //Objects
    num: "4255 4582 1220 2684",
    type: "visa",
    amount:  600, 
    // 3 Atributos ↑

    // 2 Metodos  ↓
   
    deposit(){ 
        return this.amount = this.amount + 300//Se aumenta 300 cada vez la funcion se cumpla
        console.log(this.amount);
    },
    withdraw(){
        return this.amount = this.amount - 200 //Se resta 200 cada vez vez la funcion se cumpla 
    }
}
console.log(account.deposit ());  // 900
console.log(account.withdraw()); // 700
console.log(account.deposit());  // 1000
console.log(account.withdraw()); // 800
console.log(account.withdraw()); // 600
console.log(account.withdraw()); // 400
console.log(account.deposit());  // 700
console.log(account.withdraw()); // 500
console.log(account.withdraw()); // 300
console.log(account.deposit());  // 600



console.log("Second function with quantity")







//Segunda manera con quantity

const lemon = {
    num: "350",
    amount: 600,

    deposit(quantity){ // Metodo
        return this.amount = this.amount + quantity //Se aumenta el numero que coloquemos en console.log cada vez la funcion se cumpla
        console.log(this.amount);
    },
    withdraw(quantity){
        return this.amount = this.amount - quantity //Se Resta el numero que coloquemos en console.log cada vez la funcion se cumpla
    }
    
}
console.log(lemon.deposit(80)); //Sumar 80 = 680
console.log(lemon.withdraw(300)); // Resta 300 = 380
console.log(lemon.deposit(500)) // Sumar 500 = 880
console.log(lemon.deposit(120)) // Sumar 120 = 1.000








//Clases , contructores 

//Contructor de objeto
function Cliente(){
    this.id = "James"
    this.email= "JJ@Gmail.com"
    this.age = 24
    this.Cash = 500
    this.client = true
    this.showfullname = function(){
        return "El es " + this.id + " y tiene " + this.age + " años";
    } 
}

console.log(Cliente);


//Objeto 2 (Usuario)    Usuario 2
            //el New crea nuevo objeto
const user2 = new Cliente()     //Obligatorio usar new para llamar a la clase y crear new objects
user2.id = "george"
user2.age = 18

console.log(user2)
console.log(user2.showfullname())



//Objeto 3 (Usuario)    Usuario 3
const user3 = new Cliente()    //Obligatorio usar new para llamar a la clase y crear new objects
user3.id = "Juan"
user3.age = 25

console.log(user3)
console.log(user3.showfullname())



//Objeto 4 (usuario)    Usuario 4
const user4 = new Cliente()   //Obligatorio usar new para llamar a la clase y crear new objects
user4.id = "Miguel"
user4.age = 19

console.log(user4)  
console.log(user4.showfullname())










    //Show keys (llaves) of the object (Whats object ?)

console.log(Object.keys(user4))    //.keys muestra claves de los objetos


    //Show values (valores) of the object (Whats object ?)

console.log(Object.values(user4)); //.values muetra el valor de las claves



        document.write("<hr>"); //Hacer linea con HR, etiqueta de html



            







//Second example exercise : = similar (Henry)


function Human (FullName, lastname){
    this.names = FullName
    this.lastname = lastname
    this.complete = function(){
        return "Welcome " + this.names + this.lastname + " join us after this"
    }
}

const oscar = new Human("Oscar Alfred ", "Zavala");  //user created
console.log(oscar); 
console.log(oscar.complete()) //Welcome Oscar alfred zavala join us after this


const saul = new Human("Saul Anderson ", "Herrera"); //Other user created
console.log(saul);
console.log(saul.complete()); //Welcome Saul Anderson Herrera join us after this

const batman = new Human("Bruce ", "Wayne");       //last user created
console.log(batman);
document.write(batman.complete()); //Welcome Bruce Wayne join us after this
document.write("<hr>")//Linea de separacion html









//Creando una plantilla a travez de una clase (Class)


// Videogames 
class Character {   //Plantilla del personaje (objeto)
    constructor(type, difficult, version, size){
    this.type = type
    this.difficult = difficult
    this.version = version
    this.size = size
    }
    Respawn(){
        return this.type + " Difilcultad: " + this.difficult + " Version: " + this.version +
         " Size: " + this.size
    }
}

//Creating character
const Mago = new Character ("'Enemies'", "Hard", "Last version (updated)", "Big Bigger")
const Cyber = new Character("'Friend'", "Very hight", "(2.6)", "Big")
const Soldado = new Character("'Friend'", "Easy", "(Beta)", "small")

//Show characters
console.log(Mago.Respawn());
console.log(Cyber.Respawn());
console.log(Soldado.Respawn());





//EXAMPLE NUMBER TWO


    class People {
        constructor(codes, colores, marca, follower){
        this.codes = codes
        this.colores = colores
        this.marca = marca
        this.follower = follower
    }   Invited(){
        return "Your code is " + this.codes + " you like the " + this.colores + " and your favorite marca is " 
        + this.marca + " Ademas de eso, contas with " + this.follower + " of followers"
    }
}


const puchy = new People(6566, "Red", "Adidas", "1.900")
const alfred = new People(1010, "White and black", "Calvin Klein", "1.500")

console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")



console.log(puchy.Invited());
console.log(alfred.Invited());

//Relation(Asociacion).     Reservando a alfred como padre de puchy
puchy.parent = alfred



//EMPRESA
const Mybusiness = {
    owner: "Tuti Zavala",
    employees: []
}
//Agregacion
Mybusiness.employees.push(puchy) //Agregando puchy a arrays de la cost MyBusiness
Mybusiness.employees.push(alfred)//Agregando alfred a arrays de la cost MyBusiness


console.log(Mybusiness) //Mostrando a puchy y alfred dentro del arrays employees (const MyBusiness)







//Encapsulamiento.
//The coffee Gang business
//Ocultar algunas funciones que los usuario use pero que no vea 
function CoffeGang(nombres){
    let empleado = [] //variable "Oculta" Solo se puede llamar por la funcion Get
    this.nombres = nombres

    this.GetEmployes = function(){
        return empleado 
    }
    this.AddEmployes = function(employe){
        empleado.push(employe)
    }
}



const cafeteria = new CoffeGang("The coffe Gang") //Creando objeto
const cafeteria2 = new CoffeGang("Cafeto Gang")   //Creando objeto


cafeteria.AddEmployes({names: "Alfredo Arias"}); //Agregando un objeto(Alfredo arias) al 'Array' de la variable 'let empleado'
cafeteria2.AddEmployes("Matias Zavala"); //Agregando un objeto(Matias Zavala) al 'Array' de la variable 'let empleado' (Manera distinta)


console.log(cafeteria.GetEmployes()) //Retorna el valor de empleado
console.log(cafeteria2.GetEmployes()) //Retorna el valor de empleado


//Fatz finished