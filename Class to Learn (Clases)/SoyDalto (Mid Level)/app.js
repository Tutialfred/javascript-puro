setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
// RELOJ ↑





// Objeto window

//         Window (Ventana del navegador) contiene muchos elementos, todos dependen de el incluyendo el DOM
//         La más alta jerarquia 



// window.open("https://www.google.com")
// Carga un recurso en el contexto de un nuevo navegador o uno que ya existe

// window.close()
// Cierra la ventana actual, o la ventana en la que se llamó

// window.closed
// Indica si la ventana referenciada está cerrada o no 

// window.stop()
// Detiene la carga de recursos en el contexto de navegacion actual

// alert("Hola")
// muestra un cuadro de alerta con el contenido especificado y un botón Aceptar

// window.print()
// // Abre ele cuadro de dialogo imprimir para imprimir el documento actual

// window.prompt()
// // Abre un cuadreo de dialogo con un mensaje que solicita al usuario un dato (String)

// window.confirm()
// // Abre un cuadro de dialogo con un mensaje y dos botones: Aceptar y Cancelar











//   WINDOW + Location
// node JS ↓ ?????????

window.location.href
// Devuelve el href (URL) de la pagina actual
window.location.hostname
// Devuelve el nombre de dominio del servidor web
window.location.pathname 
// Devuelve la ruta y el nombre de archivo de la pagina actual
window.location.protocol 
// Devuelve el protocolo web utilizado (http: o https)

// window.location.assign("https://www.google.com")
// Carga un nuevo documento














//                  Eventos del Mouse
//                  Mouse events
// 'addEventLintener' es el método para aplicar estas funciones



// "click"
//ocurre con un click

// "dblclick"
// ocurre con un doble-click

// "mouseover"
// Ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos

// "mouseout"
// Ocurre cuando el puntero se mueve fuera de un elemento o de sus elementos


// ------------others-------------


// "contextmenu" (Click derecho)
// Ocurre con un click en el boton derecho en un elemento para abir el menú

// "mouseenter"
// Ocurre cuando el puntero se mueve sobre un elemento

// "mousemove"
// Ocurre cuando el puntero se mueve mientras está sobre un elemento

// "mouseleave"
// Ocurre cuando el puntero se mueve fuera de un elemento

// "mousedown"
// Ocurre cuando un usuario apreta un boton del mouse sobre un elemento

// "mouseup"
// Ocurre cuando un usuario suelta un botón del mouse sobre un elemento













//                  Eventos del teclado
//                  Key events
// 'addEventLintener' es el método para aplicar estas funciones

// "keydown"
// Ocurre cuando una tecla se deja de presionar

// "keypress"
// Ocurre cuando una tecla se presiona y suelta en un elemento

// "onkeyup"
// Ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente













//                      Eventos de la interfaz
//                      Interface events
// 'addEventLintener' es el método para aplicar estas funciones

// error
// Ocurre cuando sucede un error durante la carga de un archivo multimedia

// load
// Ocurre cuando un objeto se ha cargado

// beforeunload
// Ocurre antes de que el documento esté a punto de descargarse

// unload
// Ocurre una vez que se ha descargado una página

// resize 
// Ocurre cuando se cambia el tamaño de la vista del documento

// scroll
// Ocurre cuando se desplaza la barra de desplazamiento de un elemento

// select
// Ocurre después de que el usuario selecciona algún texto de <input> o <textarea>














//                  Control de flujo y manejo de errores


// Sentencia de bloques 

// Sentencia de control de flujo (if,else,switch)

// Sentencia de manejo de excepciones
// (MANEJO TOTAL DE ERRORES)
        
      
    






//          try... catch
// Se maneja más que nada con async y await
// Si o si tienen que estar los dos... try y catch
// Sino el try tiene que estar acompañado de finally o catch

// throw "El error esta en no entrenar" OR  === throw new Error()
// Crea un error  

// catch sirve para manejar errores

try{

throw "Excuse me?"

} catch (error) {

    console.log("Flaco te equivocaste mal")
   
}
finally{
    console.log("Thanks you, come back soon")
}














// // // //       Ejemplo de callbacks (NUMEROS DEL 1 AL 3) ASINCRONOS


console.log(1)

function ey (callback){

     setTimeout(() => {
      console.log(2) 
      callback()
    }, 1000);
}

function imprimirN(){
    console.log(3)
}
ey(imprimirN)
























// Promesas (objeto) son funciones asincronas
// Promise

// Una promesa puede estar pendiente, cumplida o rechazada

// Recibe dos callbacks 'resolve' y 'reject'

// Resolve, terminanción de una operacion asíncrona(cumplida)
// Reject, fracaso de una operacion asíncrona(rechazada)

 

const nombre = "tuti"

const promesa = new Promise((resolve, reject)=>{

    if(nombre === "tuti") resolve(`Yes el nombre era ese, es ${nombre}...`)
    else reject("No el nombre ni es ese")
})

promesa.then((cumplida) =>{
    console.log(cumplida)
}).catch((rechazado) => console.log(rechazado))

.finally(()=>console.log("Tambien existo aca en las promesas"))



// Then para manejar cuando la promesa se cumple (resolve)
// Catch para manejar cuando la promesa es rechazada (reject) (Manejar errores)





// ////       Ejemplos con Promesas (NUMEROS DEL 1 AL 3) ASINCRONOS


console.log("A")

  const promesas = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("B")
            resolve()
          },1000)  
    })

promesas.then(()=>console.log("C"))
























// Async & await
// Funciones asincronas 

// await = Basicamente accede al valor que retorna la promesa.
// Obtener la informacion, hasta que no la obtengas no pases a la siguiente. la obtiene, listo... Pasa a la siguiente




// // // Ejemplo con Async - await (NUMEROS DEL 1 AL 3) ASINCRONOS

function getData(){
    return new Promise((resolve, reject)=>{
         setTimeout(()=>{
            console.log(2)
            resolve()
        },2000)
    })
}

const result = async ()=>{
    console.log(1)
    await getData()
    console.log(3)
}
result()


















/*      Petición HTTP (Cliente & Servidor) 
  No guardan informacion 

  ¿Que es una peticion HTTP?

  Es una peticion que le enviamos al servidor y este nos devuelve una data, información




  Métodos (verbos) = GET, PUT , POST , DELETE

  Get = obtener datos. 
  Put = actualizar datos. 
  Post = Guardar datos. (Crear & enviar)
  Delete = Eliminar datos




⬜ Status 

    100 

100 = Información

    200 (Exito) 

200 ok = La peticion se realizo correctamente, El servidor envia el recurso solicitado 
en el cuerpo del mensaje
204 No content = El mensaje no tiene cuerpo 

    300 (Redirección)

301 Moved Permanently = El recurso se ha movido Permanentemente a otra URL
302 Found = El recurso se ha movido temporalmente a otra URL
304 No modificado 

    400 (Error al cliente)

401 Unauthorized =  El usuario no esta aunteticado, No está autorizado para acceder a este recurso 
404 Not found = Pagina o ruta no existe, No existe el recurso 

    500 (Error del servidor)
    
500 Internal Server error = Errores en el servidor, Ocurrió un error en el servidor 
503 Service Unavailable = El servidor no está disponible                                                           








readyState:
De un document describe el estado de carga del documento.

0 = Sin inicializar
1 = La peticion se creo correctamente(acaba de llamar a open())
2 = La peticion se envio correctamente (Enviado)
3 = La peticion se esta procesando (Recibiendo)
4 = El servidor nos entrega una respuesta (Listo, response)












    JSON = Javascript object notation


  Serialización(string) y Deserialización

  Cuando enviamos un JSON a un servidor hay que mandarlos como string y cuando los recibimos, lo recibimos como string
  y tenemos que pasarlo a formato JSON para trabajarlo


  Convertir JSON a Objeto↓
  JSON.parse()       Convierte un string con estructura JSON a formato JSON   (deserializar) (Recibimos, "Elimina comillas")

  Convertir Objeto a JSON ↓
  JSON.stringify()   Convierte un dato Javascript en una cadena de texto JSON (serializar)   (enviar dato, "Agrega comillas")
*/













    // AJAX = Asynchronous javascript and XML 


const peticion = new XMLHttpRequest 
// console.log(peticion)


peticion.addEventListener("load",()=>{
    let result
    if(peticion.status === 200) result = peticion.response
    else result = "No encontramos el archivo"  
    // console.log(result)
    // console.log(JSON.parse(result))  
    
})
peticion.open("GET", "https://api.escuelajs.co/api/v1/products")
peticion.send()



















//       fetch
// Esta basado en Promise, para realizar peticiones HTTP
// Siempre nos devuelve una promesa encapsulada

// Aplica el metodo GET por defecto ↓
const fetching = fetch("https://api.escuelajs.co/api/v1/products")
// console.log(fetching)

// fetching.then(elements => console.log(elements))
// Nos devuelve la promesa

// fetching.then((elementos) => elementos.text()) 
// Nos devuelve la response todo en formato texto, tipo → (stringify)

// fetching.then((elementos) => elementos.json())
// Nos devuelve la response todo en formato JSON , tipo → (parse)

// fetching.then((elementos) => elementos.blob())
// Nos devuelve la response todo con las propiedades de la imagen







// Utilizando el metodo POST en fetch 
const post = fetch("https://reqres.in/api/users",{
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        "name" : "tuti",
        "age": 21,
        "girlfriend" : true

    })
})
// post.then(elements => elements.json())
// .then(mostrar => console.log(mostrar))








// Trabajando con blob (Imagenes)
const img = document.querySelector(".imagen")

const imagen = fetch("fullStack.PNG")
.then(res => res.blob())
.then(image => img.src = URL.createObjectURL(image))














//Soy Dalto (Mid Level)
//Finished

