//Javascript es el unico lenguaje de programacion que se corre en el navegador.
//vive en el navegador


//Operacion de incremento 
//i++   ==   i = i + 1 





// Funciones, son un conjuntos de instrucciones.









// //Gasto por mes
// const cobro = 1000
// console.log(10000)

// for (let mesMensual = 10000; mesMensual >= cobro; mesMensual -= 1000) {
    
//     console.log(mesMensual - cobro)
    
//     if(mesMensual > 5){
//         document.write("Cobraste "+ cobro + " y te queda por cobrar "+ (mesMensual - 1000)+ "<br>");
//         document.write("<br>")
        
//     }
// }


















// function sumar (n1, n2){
//     return parseInt(n1) + parseInt(n2)
// }

// let numUno = prompt("Ingrese primer numero para sumar ");
// let numDos = prompt("+ Ingrese segundo numero para sumar");


// console.log("total is " + sumar(numUno, numDos));
// document.write("El resultado es " + sumar(numUno, numDos));
// console.log(sumar("5" ,"7")) 























// //Hecho, Usando la condicion de switch, case and default
// //Leccion de ingles     
// let alumnoDice = 
// prompt(`La siguiente palabra en Ingles ↓
// " pero "
// _Elige la correcta!

// 1)  but
// 2)  because
// 3)  be`)


// switch (alumnoDice){
//     case "1" :
//         alert("Correct")
//         console.log("Muy bien hecho")
//         break;
//     case "2": 
//         alert("Incorrect")
//         console.error("Mal hecho")
//         break;
//     case "3":
//         alert("Incorrect")
//         console.error("Mal hecho")
//         break;
//     default: alert("Aqui Corresponde un numero del 1 al 3")
//     console.log("Sin especificar")
//         break;
//     }

// //Second pregunta

// let alumnoDice2 = 
// prompt(`La siguiente palabra en Ingles ↓
// " ¿ por que ? "

// _Elige la correcta!

// 1)  Where?
// 2)  Why?
// 3)  When?`)


// switch (alumnoDice2){
//     case "1" :
//         alert("Incorrect")
//         console.error("Mal hecho")
//         break;
//     case "2": 
//         alert("Correct")
//         console.log("Muy bien hecho")
//         break;
//     case "3":
//         alert("Incorrect")
//         console.error("Mal hecho")
//         break;
//     default: alert("Aqui Corresponde un numero del 1 al 3");
//     console.log("Sin especificar")
//         break;
//     }

























//Hecho     (Condicion if, else)     //Usuario debe poner "but" en este caso colocar la palabra palabra y no un numero
//Prueba de ingles
// let usuarioDice = prompt('Ingresa la palabra "pero"  = _ _ _');

// let prueba = "but"


// let resultado = prueba === usuarioDice

// if(resultado == true && !5 < 10){
//     console.log("CORRECTO");
//     alert("yes, 'but' es → 'pero' ")
// } else{
//     console.log("MUY MAL");
//     alert("No acertaste la palabra 'pero'")
// }














// //Hecho
// //Validar un dato prompt (string) y aceptarlo para un resultado de number 
// let cliente = prompt("Your DNI for password, please!↓")
// let password = 46474154


// let real = parseInt(cliente);
// let total = real === 46474154


// console.log(parseInt(cliente))

// if(total === true && !false){
//     alert(password + " correcto")
//     console.error("Hackeaste la cuenta")
    
// } else {
//     alert("incorrect")
//     console.error("No pudiste ingresar")
// }




















// //  Imprimen años
// for (let index = 2010; index <= 2023; index++) {
//     document.write("<br>")
//     document.write("Estamos en el año " + index) 
//     document.write("<br>")
//     console.log("Estamos en el año " + index) 

// }     

    










// //    Hecho
// // Pruebas recibo de compra 

// function MostrarPedido (producto, pago, prenda, marca){
//     document.write("Gracias, por tu compra de " + pago  + ".🤍 "+ ("<br>") + "Esperamos que  disfrutes. Tu nuevo " + producto + 
//     "<br>" + " NAME:  " + prenda +   "<br>" + " Marca: " + marca +  ("<br>") + " GRACIAS 🥰")

// }

// MostrarPedido("Adidas aeroready", "$500", "Remera", "Adidas" ); //Primer compra
// document.write(("<hr>"))
// document.write(("<br>"))
// document.write(("<br>"))
// document.write(("<hr>"))
// MostrarPedido("Boxer classic (B & W)", "$1200", "Boxer", "Calvin klein"); //Segunda compra









// Hecho
// Dia productivo Gimnasio (Decisiones)


// function Dia (Day, weekends,gymE, gymL){
//     document.write(" Today hiciste "  + gymE + " Al nivel " + gymL + "%" + ("<br>"));
    

// if(gymL >= 81){                                                                         //Mayor a 80
//     alert("Today " + Day + " " + weekends + " Hicimos " + gymE + " " + gymL + "%")
//     alert("Succes🤍!, mayor a 80");
   
// } else if(gymL <= 80 && gymL >= 70 ) {                                                    //N-80 == N+70
//     alert("Today " + Day + " " + weekends + " Hicimos " + gymE + " " + gymL + "%")
//     alert("Un poco mejorando, estas al 70% a 80%")
//     console.error(gymL + " " + " = Lo minimo es 80!")
// }

// //      SEGUNDA CONDICION

// if(gymL >= 51 && gymL < 70){                                                            //N+= 50 == N  -=70
//     alert("Today " + Day + " " + weekends + " Hicimos " + gymE + " " + gymL + "%")
//     alert("ALGO ES ALGO, pero estas entre 50% y 70%");
    
// } else if(gymL <= 50 && gymL > 30){                                                      //N-50 == N+30
//     alert("Today " + Day + " " + weekends + " Hicimos " + gymE + " " + gymL + "%")
//     alert("Muy Mal Hecho, pero estas entre el 30% y 50%")
//     console.error(gymL + " " + " = Lo minimo es 80!")
// }

// if(gymL <= 30){                                                                          //N-=30
//     alert("Today " + Day + " " + weekends + " Hicimos " + gymE + " " + gymL + "%")
//     alert("Tu porcentaje es del 30% o menor, No podes ingresar")
// } else ("Poco más del 30 PORCIENTO")
// }

// //Invocar funciones, dias de la semana
// Dia("1", "Monday", "Pecho", "76" );
// Dia("2", "Tuesday", "Legs Full","80" );
// Dia("3", "Wednesday", "Back","75" );
// Dia("4", "Thursday", "Legs Full","60" );
// Dia("5", "Friday", "Brazos","82" );
// Dia("6", "Saturday", "Abs","10" );










