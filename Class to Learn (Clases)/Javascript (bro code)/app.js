// Bro code.

// DOM management.
// Document object model


const ObtenerP1 = document.getElementById("p1")
// Obtener un elemento de HTML (variable) a travez de un Id
ObtenerP1.innerHTML = ("what's do you want to do?")
// Agregando texto a travez de un (innerHTML)


document.getElementById("p2").innerHTML = ("am so sorry, okay?")
// Manera de simplificar más el codigo, obteniendo id y agregando al mismo elemento en la misma linea.
// Sin crear variables, Agregando solamente elementos al documento






// <button> y onclick === eventos de javascript




// EVENTOS
// Creando una funcion al boton
document.getElementById("boton").onclick = function(){
    // SE PUEDEN EJECUTAR VARIAS COSAS
    // alert("Hola, Proximamen  te tendremos muchas más funciones, Estamos trabajando en ello, Thanks you!")

    // Sumando dos numeros que nos pase el usuario
    const num1 = parseInt(prompt("Tell me your number one"))
    const num2 = parseInt(prompt("Tell me your number two"))
    const suma = num1 + num2
    
    suma >= 0 || suma <= 0 ? console.log(suma): alert("Por favor con numeros")
    // En el caso que sea NaN


    // Pintando en el HTML el resultado de la suma 
    if(suma >= 0 || suma <= 0){
        document.getElementById("p3").innerHTML = "El resultado es " + suma
    } else{
        document.getElementById("p3").innerHTML = "No colocaste numeros"
    }
}











// Agregando un programa de contador 
// Tendria que usarlo para agregarlo a la tienda de ropa... cuantos productos quiere seleccionar?

let count = 0

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("resetBtn").onclick = function(){
    count = 0
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function(){
    count += 1
    document.getElementById("countLabel").innerHTML = count;
}









// METODO UNICAMENTE A STRING
const tuti = "Oscar alfredo zavala arias"             
const YO = ["Tuti", "Oscar", "Alfredo", "Zavala", "Arias"] 
const phoneNumber = "261||719||8976"



// console.log(tuti.charAt(2)) //Que caracteristica tiene en la pocision que le pasamos por parametro

// console.log(tuti.indexOf("i")) //En que posicion esta la caracteristica que le pasamos por parametro
// console.log(YO.indexOf("Alfredo")) //En que posicion esta la caracteristica que le pasamos por parametro

// console.log(phoneNumber.replaceAll("||","-")) //Reemplaza todo lo que le pasamos del primer parametro al segundo
// console.log(soga.replaceAll("a","e")) //Reemplaza todo lo que le pasamos del primer parametro al segundo
// const secondLastName = tuti.slice(21) // Copia una parte del elemento de un string y guardarlo en otra variable












// Creando una funcion al boton, que le hace una condicion al "checkbox" y los inputs radio. si estan (checked) === true
// Haciendo dos condiciones en una funcion al ("no olvidarme") y el radio de tarjetas (solo puede ir uno)

document.getElementById("mybutton").onclick = function(){

    
    const visa = document.getElementById("VISA")
    const master = document.getElementById("MASTER")
    const payPal = document.getElementById("PAYPAL")
// Creando variables a los inputs radio

    // Tambien se puede guardar en un variable, en vez de escribir todo el DOM↑
    // Checkbox (No olvidarme)↓
    if(document.getElementById("myCheckbox").checked){
        // Haciendo una condicion al checkbox
        console.log("accepting request")
        alert("accepting request")
    } else{
        console.log("Sin comportamientos previos")
        alert("Don't send anything")
    }   

    
    if(visa.checked){
        alert("Decidiste pagar con visa")
    } else if(master.checked){
        alert("Decidiste pagar con master")
    } else if(payPal.checked){
        alert("Decidiste pagar con pay Pal")
    }else{
        alert("TIENE QUE SELECCIONAR UN MÉTODO DE PAGO")
    }
}









//While loops
//No permitir al usuario seguir con el programa sin colocar algo en el promp, tampoco cancelarlo.
//bug, puede continuar con solo poniendo un "espacio"

// let user = ""

// while(user === "" || user === null){
       
//        user = prompt("Dime tu nombre");  
// } 
// alert("so, hi " + user)


// const obligado = document.querySelector(".h2saludo")
// obligado.innerHTML = user










// Spread operator
// Permite pintar todo el array , pero sin corchetes↓


const numbers = [10, 25, 10, 15, 320, 90, 150, 50]

const eso = Math.max(...numbers)//Sin spread operator esto no funciona, ya que te lo lo pintaria como todo un arreglo y no numero sueltos
// console.log(eso)


// console.log(numbers)     //Pintando todos los numeros en el arreglo (normal)
// console.log(...numbers)  //Pintando todos los numeros sueltos , sin arreglos


// Agregando correctamente varios elementos de un array, a otro array
// Sin spread operator te agrega todo el array completo a otro array
const equip = ["Auriculares", "pc", "Iphone", "Silla Gamer"]
const clothes = ["La blanquita", "Jeans", "Camisa negra", "Reloj"]


equip.push(...clothes)
// console.log(equip)










// Usando (Map), similar a un objeto, poco usable. Preferible usar objecto diretamente
// Ejemplo de ropa

const ropa = new Map ([
    ["remera", 1500],
    ["pants", 2500],
    ["zapatillas", 15000],
    ["reloj", 9000],
])

let shoppingCart = 0

// Agregando un valor y clave al objeto
ropa.set("Iphone", 100000)

// console.log(ropa.size) //Ver tamaño del objeto, parecido a Lenght



// Sumando precios (valores) a una variable
shoppingCart += ropa.get("remera")
shoppingCart += ropa.get("pants")


ropa.set("hat", 40)
ropa.delete("hat")
//Eliminar clave y valor agregado 






// HACIENDO UNA BUSQUEDA DE ROPA CON PROMPT Y CONDICIONES

// const buscar = prompt("Que prendas buscas?")
// const result = (ropa.has(buscar)) //tiene esa clave?
// Retorna valor booleans


// if(result){
//     alert(`Si encontramos el pruducto ${buscar} sale ${ropa.get(buscar)}`)
//     console.log(`Si encontramos el pruducto ${buscar} sale ${ropa.get(buscar)}`)
  
// } else{
//     alert("NO PUDIMOS ENCONTRAR NADA")
// }













// Tiempos

//         setTimeout()


// Establecer un tiempo en que se va ejecutar la funcion, 
// setTimeout(() => confirm("Vemos que te esta gustando la pagina... te gustaria ser miembro exclusivo?"), 3000)
// setTimeout(() => alert("Entonces ya decidiste?"), 10000)


// Le pasamos como primer parametros la funcion despues el tiempo (time) que esperará antes de ejecutarla
// en milisegundos y despues los argumentos , si es que recibe parametro
// En el caso que no reciba parametros, escribimos los parentesis vacios


// Cleartimeout()
// Parar con el temporizador, en su parametro recibe la variable del temporizador








    
//          Set interval (Bucle)

// Trabajando con un bucle cronometrado
// Es utilizado para ejecutar repetidamente una función en un intervalo establecido.
// Mostrando solo numeros


// let iniator = 0;

// let max = parseInt(prompt("Tell me you count"))

// const time = setInterval(ContarMore, 1000)


// function ContarMore (){
//     iniator++
//     console.log(iniator)
//     if(iniator === max){
//         clearInterval(time)
//         alert("Hasta aca llego el bucle cronometrado")
//     }
// }





// // Tabla de multiplicar 

// let multiplicar = parseInt(prompt("Que numero quieres multiplicar?"))
// let i = 0

// const time = setInterval(tablaMultiplicar, 1000)

// function tablaMultiplicar (){
//     i++
//         console.log(multiplicar + " x " + i + " = " + multiplicar * i)
    

//     if(i === 10){
//         clearInterval(time)
//         alert(`Aca terminar la tabla del ${multiplicar}`)
//     }
// }













// DATE 
// Fecha y hora, se pueden obtener y cambiar datos especificos

const today = new Date()

// 2023 septiembre 29 15:30:20↓
const today2 = new Date(2023, 8, 29, 15, 30, 20)

const today3 = new Date("December 6, 2021 14:30:00")











// DOM

document.title = "I am the king"
// Manera de cambiar el titulo del document

document.body.style.backgroundColor = "#02fc02"
// Cambiar el background del document.



















