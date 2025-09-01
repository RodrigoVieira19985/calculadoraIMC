var taxa = document.getElementById("taxa")
var magra = document.getElementById("magra")
var gorda = document.getElementById("gorda")
var metabolica = document.getElementById("metabolica")
var taxa2 = document.getElementById("taxa2")
var gastoTotal = document.getElementById("gastoTotal")
var calorias = document.getElementById("calorias")
var proteinas = document.getElementById("proteina")
var carbo = document.getElementById("carbo")
var gord = document.getElementById("gord")

document.addEventListener("change", function(c){
    var sexo = document.getElementById("m").checked
    var idade = document.getElementById("idade").value
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var pescoco = document.getElementById("pescoco").value
    var cintura = document.getElementById("cintura").value
    var atividade = document.getElementById("atividade").value
    var objetivo = parseInt(document.getElementById("objetivo").value)
    var imc = (peso) / ((altura / 100) * (altura / 100))

    if(sexo == true){
        console.log("entrou")
        var bf = (86.010 * Math.log10(cintura - pescoco) - 70.041 * Math.log10(altura) + 30.30 + 2)
        var massagorda = peso / 100 * bf
        var massamagra = peso - massagorda
        var tmb = (66.5 + 14 * peso + 5 * altura - 6.7 * idade)
        var gastoT = (66.5 + 14 * peso + 5 * altura - 6.7 * idade) * atividade
        var caloria = (66.5 + 14 * peso + 5 * altura - 6.7 * idade) * atividade + (objetivo)
        var protei = peso * 2
        var gordu = peso*0.8
        var carb = (caloria - (protei * 4) - (gordu * 9)) / 4
    }else{
        var bf = (1.20 * imc) + (0.23 * idade) - (10.8 * sexo) - 8.4
        var massagorda = peso / 100 * bf
        var massamagra = peso - massagorda
        var tmb = (66.5 + 14 * peso + 5 * altura - 6.7 * idade)
        var gastoT = (66.5 + 14 * peso + 5 * altura - 6.7 * idade) * atividade
        var caloria = (66.5 + 14 * peso + 5 * altura - 6.7 * idade) * atividade + (objetivo)
        var protei = peso * 2
        var gordu = peso*0.8
        var carb = (caloria - (protei * 4) - (gordu * 9)) / 4
    }

    taxa.innerHTML = bf.toFixed(1)
    magra.innerHTML = massamagra.toFixed(1)
    gorda.innerHTML = massagorda.toFixed(1)
    metabolica.innerHTML = parseInt(tmb)
    taxa2.innerHTML = parseInt(tmb)
    gastoTotal.innerHTML = parseInt(gastoT)
    calorias.innerHTML = parseInt(caloria.toFixed(1))
    proteinas.innerHTML = parseInt(protei)
    gord.innerHTML = parseInt(peso*0.8)
    carbo.innerHTML = parseInt(carb)
})