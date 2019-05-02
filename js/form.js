var botaoAdicionar = document.querySelector("#adicionar-paciente");

function obtemPacienteDoFormulario(form) {
    var paciente ={
        nome   :form.nome.value,
        peso   :form.peso.value,
        altura :form.altura.value,
        gordura:form.gordura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
    }
    
    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");    
    var paciente = obtemPacienteDoFormulario(form);  
    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErros(erros);
        return; 
    }    
    adicionaPacienteNaTabela(paciente);   

    form.reset();

    var mensagensErro =document.querySelector('#mensagens_erros');
    mensagensErro.innerHTML = "";
});

function exibeMensagensDeErros (erros) {
    var ul = document.querySelector("#mensagens_erros");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li =  document.createElement("li");
        li.textContent=erro;
        ul.appendChild(li);
        
    });
}
function validaPaciente (paciente) {
    
    var erros = [];   
    
    if (paciente.nome.length == 0) {    
        erros.push("O nome não pode ser em branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("O altura não pode ser em branco");
    }
    if (paciente.gordura.length == 0) {
        erros.push("O gordura não pode ser em branco");
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é invalido");
    }
     if (!validaAltura(paciente.altura)) {
         erros.push("Altura é invalida");
     }
   return erros;
}
function adicionaPacienteNaTabela (paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}