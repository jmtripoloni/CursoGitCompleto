var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if(pesoValido && alturaValida){
        tdImc.textContent = calculaImc(peso, altura);
    } else {
        if(!pesoValido){
            tdImc.textContent = "Peso inválido";
            console.log("Peso inválido.");
        }
    
        if(!alturaValida){
            tdImc.textContent = "Altura inválida";
            console.log("Altura inválida.");
        }

        paciente.classList.add("paciente-invalido");
    }
}


function validaPeso(peso){
    return (peso >= 0 && peso < 1000);
}

function validaAltura(altura){
    return (altura >= 0 && altura < 3.00);
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}