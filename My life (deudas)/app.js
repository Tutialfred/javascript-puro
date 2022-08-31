// Deudas
const deudas = [0]


while(confirm("Tienes deudas?")){
    var pagar = parseInt(prompt("Que Deudas tiene?"))
    if(isNaN(pagar)){
        alert("Tuviste que colocar un numero")
        break
    }
    deudas.push(pagar);
}


if(pagar === true){
    }else{
    var total = deudas.reduce((a,b) => a + b)
    
    deudas[0] = "A pagar:"
    
    alert("En total debes → $"+ total) 
}


for(const todasDeudas of deudas){
    console.log(`$${todasDeudas}`)
}
console.log(total)

