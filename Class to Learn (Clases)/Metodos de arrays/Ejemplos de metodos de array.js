// Los Arrays tienen sus propias propiedades y sus metodos , ya que es un objeto.

// los objetivos en realidad de los arrays , es almacenar varios datos de un mismo tipo , pero aveces en muchos casos vas a encontrarte con varios 
// que tienen mas de uno, como el caso de :




    const arraysLargos = [ " tuti", 1, undefined, null, [ ], {age: 20 }, true ]      //MUY RARA VEZ, pero puede tocarte 😐





//  (typeOf arraysLargos)  //← Ver de que tipo es. == object

    arraysLargos.length    //← Ver cuantos elemento tiene el array == 7  (En el caso de un string, cuenta los caracteres, de tuti es 4)
    
    arraysLargos.push(500) //← Agrega lo que le pasamos por parametro al final del array 

    arraysLargos.pop()     //← Elimina el ultimo elemento del array y te lo devuelve (guardandolo en una variable)

    arraysLargos.shift     //← Elimina el primer elemento del array y te lo devuleve (guardandolo en una variable)

    arraysLargos.unshift   //← Agrega lo que le pasamos por parametro al principio del array 

    arraysLargos.splice    //← Agrega un elemento donde al array en la posicion donde nosotros le digamos por parametro



    // arraysLargos.splice(2,0, "HAY VALOR") 
    
    // El primer parametro es desde donde vamos a insertar el valor (POSICION 2), el segundo es parametro es apartir del primer parametro que le pasamos 
    // cuantos queremos eleminar...(0 === NO ELIMINAR NADA) si solamente queremos agregar el elemento. Ejemplo en la posicion 3. pero no queremos eleminar nada en 
    // segundo parametro le decimo 0 , y como tercer parametro , asigna todo lo que le queremos agregar desde esa posicion...Puede ser mas de un parametro 


  


    const places = ["Buenos Aires", "Chile", "Brasil"]
    const lugares = places.join(", ")

    // No modifica el array original, crea un nuevo array, creando todos los elementos en un solo string(pasa de object a strings)
    // le pasamos por parametro lo que queremos agregar entre cada elemento


    let numeross = [50,100,1,20]
    // console.log(numeross)
    
    let arreglosACadena = numeross.join(" ") //Convertir todo el array en un solo elemento string
    // console.log(arreglosACadena)




    const numbers = numeross.slice()

    // (Copiar un array) Nos crea un nuevo array, identico al que ejecutamos, (Guardamos por variable) , tambien le podemos pasar por parametro 
    // desde donde, hasta cuando tomar los elementos. (Sin parametros seleccionamos todos === copia identica del array)
       
















    //  ⬜  filter
    //      Filtrar

    // Filtra los elementos del array que cumplan con una condicion dada y genera un array nuevo (variable)

    //Filter, itera como un bucle. Recibe como parametro una Callback === funcion (elemento, indice, arrays)
    // Su funcion es como un tipo bucle, se repite depende de cuantos elementos tenga el array de cual vamos a ejecutar
        // MUY PARCIDO A ForEach
        
        //  FOR EXAMPLE:


        
const reglas = [1,2,3,4,5,6,7,8,9]

// const cambio = reglas.filter((numero,index) => console.log(` Del elemento ${numero} junto con el indice = ${index}`));

// const cambio2 = reglas.filter((numero,index) => document.write(numero + "<br>" + " junto con el indice " + index + "<hr>"));



        // EXAMPLE TWO

        

const arreglos = [
    {name: "tuti", age: 20, ocupacion: "empleado"},
    {name: "puchy", age:18, ocupacion: "Empresario"},
    {name: "oscar", age: 6, ocupacion: "empleado"},
    {name: "alfred", age:20, ocupacion: "programmer"},
    {name: "TUTI", age:22, ocupacion: "working on Programmer"}
]

let ValorBuscado = "empleado"

const resultado = arreglos.filter(persona => persona.ocupacion === ValorBuscado)

//  console.log(resultado)


if(resultado.length === 0 ){
    console.log("We can't find your search")
    console.log(null)
} else{
    // console.log("yes, the result is here ")
    // console.log(resultado)
    
}



        // THIRD EXAMPLE


let numero2 = [20,41,12,33,42,15, 150]

let filtro = numero2.filter(numbers => numbers < 30) 
// console.log(filtro)




// Find nos puede encontrar el primer valor de una propiedad de una objeto, encuentra la primera y te la devulve 
// en cambio, filter, te devulve todos los objetos que cumplan con ese valor que deseamos buscar

//Find si no coincide , retorna undefined , en cambio filter nos devuleve [] vacio















//⬜      FindIndex                   
//      Encontrar indice


// (Recibe callbacks)

// Nos devuelve el indice del objeto donde encontro el valor
// Si no encuentra el valor , nos retorna -1


const arreglosI = [
    {name: "tuti", age: 20, ocupacion: "empleado"},
    {name: "puchy", age:18, ocupacion: "Empresario"},
    {name: "oscar", age: 6, ocupacion: "empleado"},
    {name: "alfred", age:20, ocupacion: "programmer"},
    {name: "TUTI", age:22, ocupacion: "working on Programmer"}
]

let buscarValor = "alfred"

const result = arreglosI.findIndex(persona => persona.name === buscarValor)  

//  console.log(result)


if(result >= 0 ){
    // console.log("yes, its here en el indice → " + result)
} else{
    // console.log("No, No, the result is not here ")
    
    
}









//⬜ IndexOf VS findIndex

const arre = [ 1,2,3,"tuti", "zavala",]

const buscando = "tuti"

const total = arre.indexOf("zavala")  //Lo que buscamos , va en parametro y listo ,  retorna el indice donde se encuentra el valor, si el elemento no se encuentra te retorna -1
const total2 = arre.findIndex(buscar => buscar === buscando) //es igual que indexOf pero este recibe una funcion, sirve mas que nada para los arreglos con contienen objetos

// console.log(total)
// console.log(total2)




















//⬜     Find
//      Encontrar
    


// Recibe callbacks, (callback)
// Nos devuelve el primer elemento que encuentre
// Nos retorna el primer elemento que cumpla con la condicion , dependiendo de la condicion que hagamos


const array = [ 1,2,3,"tuti", "zavala",]


//        Puede ir → findIndex = Asi retornaria el indice === 1
 const nuevos = array.find(elementos => elementos > 1 && elementos < 3) //Devuelve el 2

//  console.log(nuevos)



 // Nos devuelve el objeto entero, de donde encuentra el primer valor que le indicamos (undefined si no lo encuentra)
 // Nos devuelve un nuevo array con el primer elemento que cumpla con la condicion

const arreglox = [  
    {name: "tuti", age: 20, ocupacion: "empleado"},
    {name: "puchy", age:18, ocupacion: "Empresario"},
    {name: "oscar", age: 6, ocupacion: "empleado"},
    {name: "alfred", age:21, ocupacion: "programmer"},
    {name: "TUTI", age:22, ocupacion: "working on Programmer"}
]

let ValorqueQuiero = "empleado"

const resultadox = arreglox.find(persona => persona.ocupacion === ValorqueQuiero)

// console.log(resultadox)



if(resultadox === undefined ){
    console.log("We can't find your search")
    console.log(null)
} else{
    // console.log("yes, the result is here ")
    // console.log(resultadox)
    
}













//         ⬜ some
//      Algún, algunos

// Recibe Callback
// Some nos retorna un valor booleans al encontrar el valor (variable), true si lo encuentra o false si no lo encuentra


const arregloS = [
    {name: "tuti", age: 20, ocupacion: "empleado"},
    {name: "puchy", age:18, ocupacion: "Empresario"},
    {name: "oscar", age: 6, ocupacion: "empleado"},
    {name: "alfred", age:20, ocupacion: "programmer"},
    {name: "TUTI", age:22, ocupacion: "working on Programmer"}
]

let ValorQueQuiero = "alfred"

const elResultado = arregloS.some(persona => persona.name === ValorQueQuiero) // Valor boolean

//  console.log(elResultado)


if(elResultado === true ){
    // console.log("We can find your search")
    // console.log("yes, its here the result is → " + elResultado)
} else{
    console.log("No, No, the result is not here ")
    console.log(elResultado)
    
}

//  Second example:


let boys = [15,17,17,16,18]

let verdad = boys.some(numeros => numeros >= 18)// Valor boolean.


if(verdad === true && 10 > 5){
    // console.log("Si, hay uno que es mayor✅")
} else{
    console.log("Son todos menores❌")
}



//  Third Example: 


const example = [100, 10, 25, 30, 50, 80]

const verificar = example.some(element => element * 2 === 160) //Condicion y boolean

// console.log(verificar)






// ⬜ Sort                   (Algoritmo, para ordenar los numero de menor a mayor)
//  Ordenar
// Ordenar en el caso que tengamos un 150 (o numbers de 100 para arriba)


let numero = [41,12,33,150,42,15,40,55]

numero.sort((a,b) => a - b) //Ordena adecuadamente los numeros, en el caso que tengamos 150 y se valla al ultimo (NO ALBAFETICAMENTE)

// console.log(numero)








// ⬜ Map
//    Mapa 

// Mapear el array, recibe si o si un callback(elemento, indice, array)
// Transforma cada uno de los elementos de un array generando un nuevo array totalmente indepediente al que estamos usando (Variable)

// ForEach hace una accion parecida pero no nos devuelve nada, en cambio
// Map Nos devulve los elementos modificados dentro de un nuevo array.




// First example: 

const arraysLargoss = ["Camisa", "Bermuda", "Perfume", "Zapatillas", "Reloj"]
const mapear = arraysLargoss.map(i => i + " STOP, NOW... ")


const arrays2 = [1,2,3,4,5,6,7,8,9,10]
const mapear2 = arrays2.map(i => i +2)


// Second example: 


let theNumbers = [741,12,33,42,15, 150]
// console.log(theNumbers)

let Mapas = theNumbers.map((numbers)=> numbers * 2)
// console.log(Mapas)
        










// ⬜ Reduce 
//    Reducir


// (Callback) 
// Reduce los elementos del array a un unico valor 
// Recibe dos parametros los cuales son el elemento, que se va ejecutar, y el segundo el que esta adelante

let numero3 = [20,41,12,33,42,15, 150]
let reducir = numero3.reduce((Vb, Va)=> Vb + Va)

// console.log(numero3)
// console.log(reducir)




               



// ⬜ For Each       (//  ❌no genera un array nuevo)

// for  = para
// each = cada

    // Recibe un callbacks, funcion y recibe 3 parametros cuales son de (Elemento, indice, array) === (Nosotros la definimos)

    // Recorrer arreglos, leer cada uno de los elementos.


let matriz = ["See you", "See you later", "See you soon", "See you Tomorrow"]

// matriz.forEach((elem, inde, array) =>{
    // console.log("El indice es " + inde + " del elemento : " + elem)})

   
    



// DOS FORMAS DE HACER EL FOR EACH


//  En el caso de querer usar el mismo parametros más de una vez, usar function y no arrow function    

let numeros = [50, 100, 1, 20]
let nuevoArray = []


numeros.forEach(function (numbers){
    nuevoArray.push(numbers * 3)    //Multiplicando los numeros * 3 y agregandolos al nuevoArray(solo se puede hacer con function)
    // console.log(numbers - 50) 
})


// SECOND ---------- SECOND ---------- SECOND ----------- SECOND ----------- SECOND ---------

// Arrow function
// numeros.forEach((numeross) => console.log(numeross * 2))

// console.log(nuevoArray)










// ⬜Every 

// every = todos, todo

let numerox = [11,21,31,41,51,61,27]


let Every = numerox.every((numbers) => numbers > 10) //Valor boolean.

// console.log(Every) //Booleans↑

if(Every === true && numerox.length > 5){
    // console.log("Si TODOS los numeros son mayores a " + 10)
} else{
    console.log("No TODOS los numero son mayores a " + 10)
}



//⬜ Includes
//    Incluir 

// Retorna valor boolean
// Preguntamos si incluye tal elemento que le pasamos por parametro
// Pregunta directa , con some (tenemos que hacer una funcion)


const examples = [100, 10, 25, 30, 50, 80]

const incluye = examples.includes(100)//Retorna true ya que si existe un elemento 100 en el array 

// console.log(incluye)





//Find nos devuelve el primer elemento que encuentre
//findIndex nos devuelve el indice del primer elemento que encuentre


    

// ?????????????

const cacas = "life"
console.warn(cacas.length)