var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesoValido = true;
    var alturaValida = true
    if (!validaPeso (peso)) {
        pesoValido = false;
        console.log("Peso Inválido");
        tdPeso.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalsido");
    }
    if (!validaAltura (altura)) {
        alturaValida = false;
        console.log("Altura Invalida");
        tdAltura.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }
    if (pesoValido && alturaValida) {
        tdImc.textContent =calculaImc(peso,altura);
    } 

}
function validaPeso (peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura (altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura) {
    var imc =0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}




