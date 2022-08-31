const objetos = [ 
    { name : "tuti", lastName: "zavala", años: 21, ocupacion: "programmer"},
    { name : "oscar", lastName: "zavala", años: 18, ocupacion: "empleado"},
    { name : "puchy", lastName: "zavala", años : 16, ocupacion: "None jobs"}
]

//Maneras de acceder al valor de un objeto dentro de un array:

// console.log(objetos[0].name)
// console.log(objetos[1]["name"])
// console.log(objetos[0])



//      forEach

// No nos devuelve un array nuevo


// EXAMPLE ONE: for loop (bucle for)


// for (let index = 0; index < objetos.length; index++) {
//     const element = objetos[index];
//     console.log(element)
// }


// EXAMPLE TWO : Mismo ejemplo usando metodo For Each en vez de usar for loop (bucle for) 


objetos.forEach(function (elements, index, array) { //Funcion callback es una funcion dentro de otra funcion... recibe 3 paramtetros → elemento, indice y array entero
    // console.log(elements) //Mostrar elementos del array 
    // console.log(index) //Mostrar el indice del array
    // console.log(array) //Mostrar el array completo
})


// EXAMPLE THIRD (the best)

// Usando Arrow Function =>
// Manera de simplificar el codigo en una sola linea
// objetos.forEach((elem, ind) => console.log(ind)) //Mostrando el indice

// Manera de poder crear un msj con los valores del mismo objeto ↓
// objetos.forEach((elem, ind) => console.log(elem.name + " en ese tiempo tenias " + elem.años)) //Concatenando valores y string, pudiendo asi crear un msj al usuario.

// Manera de crear un "Array nuevo". Es Agregandolo con un push a una variable creada con un array vacio.
const namesUsuarios = []

objetos.forEach((elements ) => {
    namesUsuarios.push(elements.name)
})
// console.log(namesUsuarios)





//      map


// Es lo mismo que forEach pero este si nos devuelve un nuevo array, usando el metodo y guardandolo en una variable descriptiva. 
// Sirve más que nada para retornar elementos en si,
// No modifica el array original, sino que puedo retornar elementos modificados, sin alterar al original
// Lo que retorna todo se guarda en la variable.
// Retorna elemento cada vez que haga una iteracion


const godOfwar = ["kratos", "freya" ,"baldur", "boy"]

const newGow = godOfwar.map((elements, ind) => {
    // console.log(elements.length)
    // return elements.length > 4 //Nos devuelve un array de boolean , haciendo una condicion
    // return ind + " → " + elements //Concatenando el elemento con el indice
    return elements
})

// console.log(newGow)


// EXAMPLE WITH OBJECTS ↓
// Creando el nombre completo
// Retornando. Creando un objeto, Uniendo 2 valores (name y lastName) en una sola clave (fullName)

const objetos2 = [ 
    { name : "tuti", lastName: "zavala", años: 21, ocupacion: "programmer"},
    { name : "oscar", lastName: "zavala", años: 18, ocupacion: "empleado"},
    { name : "puchy", lastName: "zavala", años : 16, ocupacion: "jobless"}
]

const result2 = objetos2.map((elementos) =>{
    // return{
    //     fullName: elementos.name + " " + elementos.lastName,
    //     age: elementos.años,
    //     job: elementos.ocupacion
    // }

    //Second example más simplificado, en el caso de tener un objetos con muchas propiedades y además agregar uno.
    
    return {
        ...elementos, //Es hacer una copia de todos los elementos. Spread operator.
        name: "YO",  //Se puede alterar un elemento
        english: "basic - medium" //Agregando propiedad (clave y valor)
    }

})

// Third example:
// Multiplicar la edad y guardarla en un arreglo nuevo


const agexDos = objetos2.map((elementos)=>{
    return{
        ...elementos, //Poder copiar y cambiar propiedad de años
        años: elementos.años * 2
    }
})

// console.log(result2)
// console.log(agexDos)




//          Filter

// Igual que map , pero este aplica una condicion
// Retorna los elementos que cumplan con la condicion

const objetos3 = [ 
    { name : "tuti", lastName: "zavala", años: 21, ocupacion: "programmer"},
    { name : "oscar", lastName: "zavala", años: 18, ocupacion: "empleado"},
    { name : "puchy", lastName: "zavala", años : 16, ocupacion: "jobless"},
    { name : "zavala", lastName: "zavala", años : 15, ocupacion: "jobless"},
    { name : "Alfredo", lastName: "Arias", años : 23, ocupacion: "I'm rich"},
    { name : "Crio", lastName: "Arias", años : 2, ocupacion: "jobless"}
]

// Ejemplo con for loop. Mejorar esto con método filter
const cajaNew = []
for (let index = 0; index < objetos3.length; index++) {
    if(objetos3[index].ocupacion === "jobless"){
        cajaNew.push(objetos3[index])
    }
}
// console.log(cajaNew)


// Utilizando el método filter

const filtro = objetos3.filter((elementos) => elementos.años >= 18) //Filtrando elementos cuyos valores de años sean mayores o iguales a 18
const noWork = objetos3.filter((elementos) => elementos.ocupacion === "jobless") //Filtrando elementos cuyos valores de ocupacion son iguales a === "jobless"
// Si utilizamos function declarativa, tendriamos que usar un (if) para la condicion


// console.log(filtro)
// console.log(noWork)







//      reduce
// Se le agrega a primer parametro como acumulador. y el segundo el elemento recorrido

const objetos4 = [ 
    { name : "tuti", lastName: "zavala", años: 21, ocupacion: "programmer"},
    { name : "oscar", lastName: "zavala", años: 18, ocupacion: "empleado"},
    { name : "puchy", lastName: "zavala", años : 16, ocupacion: "jobless"},
    { name : "zavala", lastName: "zavala", años : 15, ocupacion: "jobless"},
    { name : "Alfredo", lastName: "Arias", años : 23, ocupacion: "I'm rich"},
    { name : "Crio", lastName: "Arias", años : 2, ocupacion: "jobless"}
]


// Ejemplo con for loop. Mejorar esto con método reduce
    let sumar = 0

for (let index = 0; index < objetos4.length; index++) {
    sumar += objetos4[index].años
}
// console.log(sumar)



//  Example two
 //en el caso de (reduce) El primer parametro es el acumulador, y el segundo el elemento recorrido
 
const reducir = objetos4.reduce((acumulador, elemento, i) => acumulador + elemento.años, 0) //Agregamos el valor inical del acumulador

// console.log(reducir)



// Example third 
// Usando objetos dentro de un array

const users = [
    {
        id: 1,
        name: "john",
        skill: ["HTML", "javascript", "java", "React"]
    },
    {
        id: 2,
        name: "max",
        skill: ["HTML", "javascript", "css", "react", "Redux", "NodeJS"]
    },
    {
        id: 3,
        name: "stefan",
        skill: ["HTML", "javascript", "css", "react", "Redux", "NodeJS"]
    }
]


const redux = users.reduce((a,elements) => {
    return Array.from(new Set([...a , ...elements.skill])) //Agregando todos los (skill) a un conjunto de datos (set) sin repetir
    // (new set) Conjunto de datos (para limpiar los datos repetidos)
    // Array.from vuelve a cambiar el conjunto de datos (Set)-(objeto) a un array (ya limpios, sin repeticiones)
}, [])

// console.log(redux)   








//      sort

// Recibe dos paremetros, haciendo referencia al primer y segundo elemento

const objetos5 = [ 
    { name : "tuti", lastName: "zavala arias", años: 21, ocupacion: "programmer"},
    { name : "oscar", lastName: "zavala", años: 18, ocupacion: "empleado"},
    { name : "puchy", lastName: "zavala", años : 16, ocupacion: "jobless"},
    { name : "zavala", lastName: "zavala", años : 15, ocupacion: "jobless"},
    { name : "Alfredo", lastName: "Arias", años : 23, ocupacion: "success"},
    { name : "Crio", lastName: "Arias", años : 2, ocupacion: "jobless"},
    { name : "THE TUTI", lastName: "ZAVALA ARIAS", años : 1500, ocupacion: "legend"}
]



// EXAMPLE: (the best)
// Ordena adecuadamente, aún más simplificado. mejor practica, correctamente
const sorts = objetos5.sort((a,b) => a.años - b.años)
// console.log(sorts);



//      find 
// Nos devuelve el primer elemento que cumpla con la condicion
// Genera un nuevo array con el primer elemento del array que cumpla con la condicion


const encontrar = objetos5.find((elements) => elements.name === "Crio")
// Encontrando al elemento que su propiedad name sea igual a "crio"
const encontrar2 = objetos5.find((elements) => elements.años > 18 && elements.años < 22)
// Encontrando al elemento que cuya edad , sea mayor a 18 y menor a 22 (condicion)

// console.log(encontrar)
// console.log(encontrar2)



//      some
// Retorna booleans

const algun = objetos5.some((elements) => elements.años > 1499)
// console.log(algun)
// Preguntado si hay algun elemento del array que cumpla con la condicion, si su propiedad años es mayor a 1499




//    every
// retorna booleans si todos cumplen con esa condicion

const todos = objetos5.every((elements) => elements.años > 15)
// console.log(todos)
// Preguntando si todos los elementos, si sus propiedades años son mayores a 15

const total2 = objetos5.every((elements) => elements.ocupacion.includes("e"))
// console.log(total2)
// Preguntando si algun elemento del array, su propiedad (ocupacion) incluye la letra "e"



//      Combinando métodos


const objetos6 = [ 
    { name : "THE TUTI", lastName: "ZAVALA ARIAS", años : 1500, ocupacion: "legend"},
    { name : "tuti", lastName: "zavala arias", años: 23, ocupacion: "programmer"},
    { name : "oscar", lastName: "zavala", años: 30, ocupacion: "empleado"},
    { name : "puchy", lastName: "zavala", años : 16, ocupacion: "jobless"},
    { name : "zavala", lastName: "zavala", años : 15, ocupacion: "jobless"},
    { name : "Alfredo", lastName: "Arias", años : 21, ocupacion: "success"},
    { name : "Crio", lastName: "Arias", años : 12, ocupacion: "jobless"},
]



// Creando una sola propiedad para (name y lastName) con (map),
// filtrando los elementos que mayores de 18 años con (filter), 
// ordenandolos de menor a mayor con (sort), y 
// por ultimo sumando todos las edades === 1574 (reduce)

const fusion = objetos6.map((elem) => ({
    nameFull : elem.name + " " + elem.lastName,
    ages: elem.años
})).filter((elem) => elem.ages > 18).sort((a,b) => a.ages - b.ages).reduce((a, elem) => a + elem.ages,0)

console.log(fusion)


// Finished