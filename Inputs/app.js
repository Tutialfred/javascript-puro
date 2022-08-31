function MostrarOpciones (){
    var opciones = document.getElementsByName("eleccion")


    for (let index = 0; index < opciones.length; index++) {
        
        if(opciones[index].checked){
            alert(opciones[index].value)
        }
    }
    console.log(opciones)
}

function añadirTexto (){
    
    
    var elTexto = document.getElementById("texto")
    var mostrar = document.getElementById("mostrarTexto")

    mostrar.innerHTML += elTexto.value

}


