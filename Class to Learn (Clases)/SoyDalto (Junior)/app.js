/* Curso de javascript con soy dalto


¿Que es javascript?

    Es una herramienta que nos permite darle instrucciones
    a un ordenar a travez de codigos
*/

document.body.style.backgroundColor = "darkgreen"


//FUNCION - PROMPT
// Pedir que ingresen un dato
// let greeting = prompt("Tell me your name"); //Deja la opcion al usuario para escribir 

// alert("Hola " + greeting);





//CONCATENACIÓN

//Une string

saludo = "Hello tuti ";
pregunta = "Are you okay?";

frase = saludo + pregunta;
    document.write(frase + "<br>" + "<br>"); 
// CAMBIAR COLOR ↓
console.log("%c" + frase, "color:#ccfcc2; padding:5px; background: darkblue",)


//Ejemplo 2

nombre = " Max";
message = ("Gracias " + nombre + " Agradecemos tu presencia aqui" + "<br>" + "<br>");
    document.write(message);










//OPERADORES

let code = "100"; 
let password = 100;

document.write(code != password);
document.write(`<br><br>`); // = false
/* 

alert(code == password);  - //Operador de Comparación  
alert(code != password);  - //Operador de Distintos  
alert(code === password); - //Operador de Exactamente iguales, mismo valor y dato  
alert(code !== password); - //Operador de No exactamente igual, distinto valor y dato
alert(code < > password); - //Operador de si numero es mayor o menor
alert(code <= password);  - //Operador de si numero es (mayor o menor) e igual


    OPERADORES LOGICOS = Nos devuel en un resultado a partir de que se cumpla (o no) una condicion
    su resultado es BOOLEANO, y sus operandos son valores logicos o asimilables a ellos
    // SOLO TRABAJA CON BOOLEANS


AND = true && true = true  = si las dos son true es true. aunque tenga un false se convierte en false. Unicamente da true cuando las dos son true

OR = true || false : true = Aunque haya un solo true da true, si hay dos false es false 

NOT = !true = empieza con signo de exclamacion, da lo contrario en este caso nos daria False      */


//console.log(true && !false)   = True 




//  parseInt (numerox); Lo convierte a numero , a un dato string (entero) a como un dato numero 















//  ARREGLOS , OR ARRAYS

//Empiezan contando desde el elemento cero 0

let Dream = ["Car" , "Iphone" , " Programmer ",];

let body = [" Face clean ", "Muscle", "teeth off machine"];


document.write(Dream[2]); //Programmer
document.write("<br>"); //Linea abajo

document.write(body[0]); //Face clean
document.write(`<br><br>`); //Linea abajo



//Objetos (arrys asociativos)
//Tiene detalles al llamar la variable es con  " "

let Fachero = {
    remera: "La blanquita",
    Pantalon: "Jeans ancho Light blue",
    Zapatillas: "Adidas Forum low white",
    Interior:"Adidas"
}

document.write(Fachero.remera);
document.write(("<br>"));

document.write(Fachero["Interior"]);
document.write(("<br>"));










//       BUCLES E ITERACIÓN


// ERROR (Bucle infinito)
//| | | | | | | | | | | | 
// while (3 > 1){
//     console.log("superman")
// } 

document.write(`<br>`); //Linea abajo



let numero = 0;

while ( numero < 20){  //While = No le decimos cuantas vuelta va a dar (inderteminado & infinito) se va a cumplir siempre la condicion sea true
    numero++;   
    document.write(numero)
    if (numero == 8){      //El "If" pregunta una sola vez, en cambio "while" pregunta siempre
       
        break;   //Cuando se ejecuta el break, el bucle sale. el while ya no se ejecute mas y sigue con el programa 
    }
    
}
document.write("<br><br>")
// Otro tipo de bucle llamados (For - for in. for us) Se ejecutan las veces que nosotros le decimos

// = FOR = for 
// = FOR IN (Devuelve el indice) (posicion) 0, 1, 2
// = FOR OF (Devuelve el valor) (valor)   EJ: "hi", "hello", "ey!" ↓




//Bucle for 

let array = ["hi", "hello", "ey!"]

    //declaracion   Condicion             Aumento
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)

}



//for ( in y of )

const animales = ["Perro", "gato", "Cocodrilo"]


//Creamos una variable (animal)
for (animals in animales){ 
   console.log(animals)    // 0 1 2
}

for (animals of animales){
    console.log(animals)     //Perro, gato, cocodrilo
}












/*        FUNCIONES 

Se crean y despues se llaman, una accion 
                      invocan

Return = nos devuelve un valor (termina como funcion tipo Break)
Guarda el valor retornado en la funcion, para despues guardar la funcion en una variable y mostrar la variable


Funciones flecha = (ejemplo)=>













                (Paradigmas de programacion) = cada quien soluciona su problema a su manera, hay varias soluciones
                ||||||||||||||||||||||||||||
                PROGRAMACION ORIENTADA A OBJETOS = POO


    OBJETOS =   (usuario, vasos, productos) Tienen sus propios datos(atributos) y funcionalidad(metodos)

    Los productos(objeto) 
    tienen precio, marca, nombre (atributos)y 
    pueden ser agregados al carrito, puede ser comprado(metodos)

    los objetos se comunican entre si, por ejemplo el usuario que se comunica con el producto , dps el producto que se comunica
    con el carrito para que despues el carrito mande todo el producto a la pasarela de cambio.


             FOR EXAMPLE: 

    Creando una pagina web (Business clothes) creamos un objeto(usuario) y hacemos el proceso de Abstraccion que es pensar
    que atributos y que metodos debe tener este objeto (usuario)
    
    ATRIBUTOS(datos)=
Nombre, apellido,correo,premium(0,1),Contraseña,fecha, genero...etc

    METODOS(funciones)=
iniciar sesion, cerrar sesion, editar perfil, cambiar contraseña, pasar a premium, publicar...etc




    CLASE = Es una plantilla o molde (tipo Funcion??) (INSTANCIAR)abstraccion (las clases siempre son singulares, no plural y siempre 
    Mayuscula)
    Usas las clases(funcion)para crear nuevos objetos.plantillas (usuarios) -class en codigo-
    Es un agrupamientos, for example= usuarios or vasos
    VASOS= Vaso de madera , vaso grande, vaso de vidrio, vaso largo
    USUARIO=DNI, nombre, edad, peso, talla

    la persona que se registra, sin saberlo usa la CLASE(plantilla) para crear su perfil , el llama a esa clase que le permite
    crear un objeto (su perfil) que ya esta en el codigo. Este proceso se llama INSTANCIAR es crear un objeto a partir de una clase 
    esto nos permite crear varios objetos(usuarios)
    

            Base de la programacion orientada a objetos


    ABSTRACCIÓN = Proceso mental 
    Es pensar cuando creamos un objeto, que atributo y que metodos puede tener. para despues agregarlos a la clase   
   
    ENCAPSULAMIENTO = Ya que los objetos se pueden comunicar, puede traer problemas si un objeto pueda modificar los datos de cualquier
    otro. se necesita proteger la informacion de manipulacion no autorizadas. Metodos para acceder a cierta informacion
    
    POLIMORFISMO = Cuando el usuario compra la membresia a premium, automaticamente se le comunica a 3 vias diferentes 
    (Slack al grupo de los desarroladores(privada)) - (Correo electronico del usuario) - (web te muestra msj por pantalla en el momento)
    Dar la misma orden a diferentes objetos y que cada uno de ellos responda de su propia manera
    +
    HERENCIA = Una clase(Subclase) se crea a partir de una clase existente(Super clase), heredando todos sus atributos y metodos.
     Las clases hijas heredan funcionalidades y atributos de la clase padre (no son identicos),y aparte de eso estos ademas 
    pueden agregar sus propios atributos y metodos nuevos(videogame pasar a nivel2 la espada de fuego(pega y ahora tiene puede disparar)) */

  

//      HERENCIA



        class animal {
            constructor(apodo, especie, edad, color){
                this.apodo = apodo
                this.especie = especie
                this.edad = edad
                this.color = color
            }
            Dog(){
                return "Your animal is " + this.especie +
                " the " + this.apodo + " of " + this.edad + " años"+ 
                 " and your colors is " + this.color
            }
            ladrar(){
                if (this.especie === "cachorro"){
                    // document.write("i can do it ")
                } else {
                    // document.write(" I  cannot")
                }
            }
        }

const Perro = new animal("Zeus", "cachorro", 4, "brown");
const gato = new animal("stiven", "gatito", 1, "grey");
const pajaro = new animal("loro", "bebe", .2, "verde");


//POLIMORFISMO = cada objeto se comportan de manera diferente al mismo metodo por sus atributos(cada objeto se comporta diferentes por sus atributos)
Perro.ladrar()
gato.ladrar()
pajaro.ladrar()



//      HERENCIA. OTHER EXAMPLES WITH OTHER OWNER OF METODOS

        class BadDog extends animal{ //Creando una nueva clase a partir de la clase ya existente (Animal)
            constructor(apodo, especie, edad, color, ataque, fuerza){ //Se le agrega dos nuevos atributos
                super(apodo, especie, edad, color);
                this.ataque = ataque    //nuevos atributos  
                this.fuerza = fuerza    //nuevos atributos
            }
            Pelea(){ //Metodo nuevo !
                // alert("WAU")
            }
        }

const Dogo = new BadDog("Kratos", "Bad dog", 6, "black and white", "Muerde fuerte", "500 Agarre de fuerza")




console.log(Dogo.Pelea()) //Dogo puede hacer la accion por que es un objeto de la clase BadDog y este metodo es exclusiva de BadDog
//console.log(gato.Pelea()) //Gato no puede hacer esta accion ya que es un objeto de animal y no de BadDog (Esta funcion es de BadDog exclusiva)




//Otra forma de hacer el mismo string
ariasR = new String ("Wayne")//Cuenta la cadena de string desde 0 como los array >>>>>  W == 0  a == 1
arias = "Wayne"

console.log(arias);
console.log(ariasR);
        















//         METODOS DE CADENAS = Aplicable a los strings 


let chain = new String("Live the dream");
let chain2 = " and Disciplina"


//Buscar cadena y devolver un valor
//Se aplica como valor el parametro


resultate = chain.concat(chain2)      //Permite hacer una concatenacion 

resultate = chain.startsWith(chain2)  //Si el valor empieza con la misma palabra, letra o caractere
resultate = chain.endsWith(chain2)    //Si el valor termina con la misma palabra, letra o caractere

resultate = chain.includes(chain2)    //Busca en chain en cualquier parte del string (valor) que este en la otra comparacion(buscar palabra en el valor del parametro)(Value only booleano)

resultate = chain.indexOf(chain2)     //Buscar el parametro y mustra la posicion del caracter y si no la encuentra muestra como -1 (false) (pueude ir un valor al parametro)
resultate = chain.lastIndexOf(chain2) //Buscar la ultima palabra del parametro recibido, La ultima que encutra, ↑ lo mismo pero con el ultimo parametro de la cadena

resultate = chain.repeat(2)           //Repite el parametro cauntas veces le digamos (valor va en el parametro) === numero obligatorio



//Transformar cadena, Hacer un cambio en la cadena

resultate = chain.split("the")         //Cuando encuentra la palabra "the" le separa lo anterior por un lado y lo siguiente por otro
resultate = chain.substring(0, 5)      //Dar 2 valores numericos al parametro, de donde empieza y termina. toma el valor como string
resultate = chain.toLowerCase()        //Transforma todo la cadena de string a minuscula
resultate = chain.toUpperCase()        //Transforma todo la cadena de string a Mayuscula
resultate = chain.trim();              //Elimina los espacios que hay antes y despues de las palabra, principio y final (ambos)
resultate = chain.trimStart();         //Elimina los espacios que hay solamente del principio
resultate = chain.trimEnd();           //Elimina los espacios que hay solamente del final
















//         METODOS DE ARRAYS = Aplicables a los arrays            



let nickNames = ["Puchy", "TUTI", "Alfred", "Oscar",]             

//let nickNames = [5 ,8 , 6, 2]                                     ←==Como ejemplo en sort
//let nickNames = ["c", "g", "y" , "h", "a", "v" , "k", "t"]        ←==Como ejemplo en sort




//Transformadores.


// let total = nickNames.push("Tirri")               //Agrega un elemento al array al final de la lista
// let total = nickNames.pop()                       //Elimina el ultimo elemento del array y te lo devuelve

// let total = nickNames.unshift("good morning →")   //Agrega uno o mas elementos al inicio del array,(lo contrario de push) y devuelve la nueva longitud de array 
// let total = nickNames.shift()                     //Elimina el primero elemento del array y te lo devuelve

// let total = nickNames.reverse()                   //Invierte el orden de los elementos de un array
// let total = nickNames.sort()                      //Ordena los elementos de un arreglo(array) localmente y devuelve el arreglo ordenado (Diccionario) ABC-123

// let total = nickNames.splice(1, 2, "zavala")      //Cambia el contenido de un array eliminado elementos existentes y/o agrega nuevos elementos 



//      Accesores. (Crear nuevo array)

// let total = nickNames.join("_______")           //Convierte todos los elementos de array en un elemento unico entero String, Poder agregar separadores entre los elementos
// let total = nickNames.slice(0, 3)               //Devuelve una parte del array dentro de un nuevo array empezando por incio hasta el fin(Same que substrings pero con elementos)

// let total = nickNames.toString()                //Convierte el array en string
// let total = nickNames.indexOf ()                //Buscar el parametro y mustra la posicion del caracter y si no la encuentra muestra como -1 (false) (pueude ir un valor al parametro)
// let total = nickNames.lastIndex()               //Buscar la ultima palabra del parametro recibido, La ultima que encutra, ↑ lo mismo pero con el ultimo parametro de la cadena
// let total = nickNames.includes ()               //Busca en chain en cualquier parte del string (valor) que este en la otra comparacion(buscar palabra en el valor del parametro)(Value only booleano)

        
//De Repeticion. 

let total = nickNames.filter(function(elements){   // (BUCLE) Recibe una funcion como parametro (callbacks) == Lo mismo que forEach pero filter puede recibir más opciones como operador de mayor y menos , etc!
    return elements.length < 5
})                          



















//         MATH (OBJETO Y METODO), libreria math


//Metodos 

let number = (6.20)
//   let result = Math.sqrt(81)                           //Devuelve la raiz cuadrada positiva de un número
//   let result = Math.cbrt("216")                        //Devuelve la raiz cubica de un número
//   let result = Math.max(4, 10, 60, 99, 15, 100)        //Devuelve el mayor de cero o más numeros == Solo numeros
//   let result = Math.min(4, 10, 60, 99, 15, 100)        //Devuelve el menor de cero o más numeros == Solo numeros
//   let result = Math.random()*100                       //Devuelve un numero pseudo-aleatorio entre 0 y 1
//   let result2 = Math.round(result)                     //Devuelve un numero redondeado al numero entero mas cerano (4.45 = 4 )  (4.5 = 5)
//   let result2 = Math.floor(result)                     //Devuelve un numero al numero entero más cercano hacia bajo (6.99 = 6)
//   let result2 = Math.ceil(result)                      //Devuelve un numero al numero entero más cercano hacia arriba (6.01 = 7)
//   let result2 = Math.trunc(result)                     //Elimina los decimales, despues de la coma. Dejando solo el numero entero

// 




















//         DOM (Document Object Model) == Estructura del documento HTML





//Nodo. == Etiqueta, no todos los nodos son etiquetas

//   Un nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las etiquetas de una lista
// En este caso, nodo representa una etiqueta 


// //Tipos de nodos.
//   Document =                    El nodo document es el nodo raiz, a partir del cual derivan el resto de nodos(El mas grande, el que abarca todo )
//   Element =                     Nodos difinidos por etiquetas HTML (etiqueta h1, p, div, nav, etc)
//   Text =                        El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto) (el contenido dentro de una etiqueta ↑ )
//   Attribute =                   Los atributos de las etiquetas definen nodos, (en Javascript no los veremos como nodos) sino como Informacion que esta asociada a un nodo element
//   Coomentarios y otros =        Los comentarios y otros elementos como las declaraciones doctype en cabecera








  
//Metodos de selección de elementos.


// .getElementById()           Selecciona un elemento por ID
// .getElementByTagName()      Selecciona todos los elementos que coincidan con el nombre de la etiqueta espicificada

// .querySelector()            Devuelve el primer elemento que coincida con el grupo especifico de selectores
// .querySelectorAll()         Devuelve todos los elementos que coincidan con el grupo especificado de selectores



//Seleccionando un elemento por ID directo, no usamos el #
var polo = document.getElementById("am");


//Selecionando elemento. = En este caso con nombre de etiqueta
let Type = document.getElementsByTagName("body")


//Seleccionando un elemeto a travez de una clase.Se puede llamar tambien a un Id con #
 let css = document.querySelector(".working")











                                                                                    
//Metodos para obtener, modificar y eliminar atributos.



//  .getAttribute()       Obtiene el valor de un atributo
//  .setAttribute()       Modifica el valor de un atributo
//  .removeAttribute()    Remueve el valor de un atributo(Recibe como parametro el atributo que queremos eliminar)


const henry = document.querySelector(".batman") //Seleccionamos el elemento
henry.setAttribute("type","range") //El primer parametro es el atributo que queremos modificar y el segundo valor es el valor (Si no hay nada, tipo que puede crear) 

const Valores = henry.getAttribute("type"); //Obtener el valor del atributo que colocamos en el parametro === "text"









//Atributos Globales. 
//Todos los elementos HTML contienen estos elementos 

const header = document.querySelector(".head")
// title
header.setAttribute("contentEditable", true); //contentEditable
header.setAttribute("tabindex", 0); //Permite darle seleccionar al texto (tab)
// style








//Atributos de los inputs.

const cliente = document.querySelector(".user")

document.write(cliente.className + "<br>"); //Muestra lo que hay dentro de class
document.write(cliente.value + "<br>");      //Muestra lo que hay dentro del valor (value)

cliente.type = "text";              //Una forma de cambiar el Type mas rapido (directamente) en vez de (setAttribute)
cliente.accept = "image/png";       //En el caso de "file" decimos que tipo de archivos vamos a cargar, que el usuario va a cargar.

cliente.minLength = "5" //Una manera de hacer lo mismo que HTML pero desde Javascript (minimo de caracteres en un input)
cliente.placeholder = "Escribe tu usuario" //Una manera de hacer lo mismo que HTML pero desde Javascript (texto de un input)
cliente.required = " "//Una manera de hacer lo mismo que HTML pero desde Javascript (hasta dejando un espacio en parametro, lo toma igual)







//Atributos por Style.

const heading2 = document.querySelector(".h2h2") //Seleccionamos el elemento

document.write(heading2)

heading2.style.color = "#220cf0"               //Damos un valor de CSS a travez de javascript
heading2.style.backgroundColor = "darkred"     //Damos un valor de CSS a travez de javascript
heading2.style.fontSize = "24px"               //Damos un valor de CSS a travez de javascript
heading2.style.padding = "10px"                //Damos un valor de CSS a travez de javascript
heading2.style.borderRadius = "5px"            //Damos un valor de CSS a travez de javascript












//Clases, classList y metodos de classList.

heading2.classList.add("grande")             //Agrega una clase (parametro), si hay una clase ya creada le agrega el valor al lado
heading2.classList.remove("grande")          //Eliminar el valor de la clase, que mandemos por parametro

heading2.classList.item("0")                 //Nos devuelve el indice de los valores de las clases
heading2.classList.contains("alfredo")       //Nos devuelve true o false, si se encuentra la clase que enviamos (parametro) 

heading2.classList.toggle("classing", false) //si no tiene la clase especificada, la agrega, si ya la tiene, la elimina
// parametros opcional. = Forzamos "true" para que la agrega siempre sino "false" para que la elimina de todas maneras (Booleanos)

heading2.classList.replace("h2h2", "headTwo")   //Reemplazar una clase por otra(1ro parametro clase por reemplazar 2do parametro clase nueva)












//Obtencion y modificacion de elementos.

const test = document.getElementById("test")

// let result = test.textContent = "Whats do you want?";       //Muestra el contenido que hay dentro de la etiqueta
// let result = test.innerHTML = "Whats do you want?";       //Muestra todo el contenido HTML dentro de la etiqueta (con alert) (Aveces puede crear contenido PJ: en h2)
// let result = test.outerHTML;        //Muestra la etiqueta y todo el contenido HTML, Completo ↑ con CSS incluido (con alert)














//Creacion de Elementos.

 
const contenedor = document.querySelector(".contenido")   //Selecciona el elemento HTML

const listaPadre = document.createElement("LI")           //Crea un elemento, Siempre en mayuscula (LI, listas)
const newTextLi = document.createTextNode("i can do it")  //Crea un texto, para despues poder agregarlo dentro de un elemento(etiqueta)


    listaPadre.appendChild(newTextLi)                     //Se aplica al padre pero toma como parametro al hijo
    contenedor.appendChild(listaPadre);                   //Agregando "LI" al document HTML, dentro de un DIV


    //Creando un Bucle


const fragmento = document.createDocumentFragment();    //Creando un document fragment

for (i = 0; i < 10; i++ ){

    const listaPadre = document.createElement("LI")          //Crea un elemento, Siempre en mayuscula (LI, listas)
    const newTextLi = document.createTextNode("i can do it") //Crea un texto, para agregar dentro de un elemento(etiqueta)

    // listaPadre.appendChild(newTextLi);  //Añadiendo hijos a padre
    // fragmento.appendChild(listaPadre);  //Añadiendo hijos a padre
} 

fragmento.appendChild(listaPadre);  //Añadiendo LI al document fragment
contenedor.appendChild(fragmento)   //Añadiendo fragmento a contenedor "DIV"














//  Obtencion y modificacion de Childs (hijos).
 
const divisor = document.querySelector(".divisor"); //Seleccionando elemento (2nd Child)


const firstChild = divisor.firstChild;          //Muestra el primer hijo (si hay espacio(casi siempre) retorna como #text y no como elemento)
const lastChild = divisor.lastChild;            //Muestra el ultimo hijo (si hay espacio(casi siempre) retorna como #text y no como elemento)

const trueChild = divisor.firstElementChild;    //Muestra el primer hijo (Normal, sin dejas espacio)
const falseChild = divisor.lastElementChild;    //Muestra el ultimo hijo (Normal, sin dejas espacio)

const fullChild = divisor.childNodes;           //Muestra todos los elementos hijos, incluyendo el "espacio" (Es un nodeList)NO ES UN ARRAY, es objeto
const normalChildAll = divisor.children;        //Muestra todos los elementos (etiquetas) Normal,  sin espacio "text" 


for (boys in  normalChildAll){ //Bucle, OF (Devuelve valor) (valor)
    // console.log(boys)
}













//Metodos de Child. (hijos)

const h2New = document.createElement("H2")     //Creando element H2
h2New.innerHTML = "KRATOS AND BALDUR"          //Creando texto en el h2 nuevo

const h2Old = document.querySelector(".head5") //Seleccionando elemento h5


divisor.replaceChild(h2New, h2Old) //Primer parametro es el elemento nuevo, y despues va el antiguo(el que se va)

// divisor.removeChild(h2Old) //Eliminar hijo (Como parametro, al que vamos a eliminar)


const answer = divisor.hasChildNodes(); //Verificar si el contenido que seleccionamos tiene hijos (o contiene texto), retorna como booleano y se puede hacer una condicion
console.log(answer)



















//Metodos de los padres.


let father = (divisor.parentElement)  //Muestra el elemento padre del contenido hijo, (elemento/etiqueta)
console.log(father)                   //Sometimes se usa "parentNode"














//Propiedades de Siblings (hermanos)

let brothers = (h2New.nextSibling)                  //Muestra lo que le sigue, El siguiente elemento del elemento seleccionado por (parametro), Cuenta el "espacio" (#text)
let lastBrothers = (h2New.previousSibling)          //Muestra lo anterior del elemento seleccionado por (por parametro), cuenta el "espacio" (#text) ↑

let BrothersNormal = (h2New.nextElementSibling)     //Muestra correctamente el siguiente hermano, sin espacio. (Proxima etiqueta hermana)
let BrothersBack = (h2New.previousElementSibling)   //Muestra correctamente el anterior hermano, sin espacio. (Proxima etiqueta hermana) ↑

console.log(BrothersBack)  //Mostrando el hermano anterior, = Null

//Soy Dalto 
//Desde cero a Junior
//Finished




