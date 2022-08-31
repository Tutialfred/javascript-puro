const nota = document.getElementById("nota")
const boton = document.getElementById("boton")
const resultado = document.getElementById("resultado")



const touch = () => {
  let notas = parseInt((prompt("Tell me the note")))


if(notas >= 7 && notas <= 10){
    
    nota.textContent = `Muy bien aprobaste con`
    resultado.style.color = "green"
    resultado.textContent = notas
    
} else if (notas > 0 && notas < 7 ){
    
    resultado.style.color = "red"
    nota.textContent = `Lamentamos que no pudiste aprobar con`
    resultado.textContent = notas
    
} else{
    alert("Tuviste que colocar un numero del 1 al 10")

}
}
  
boton.addEventListener("click", touch)
