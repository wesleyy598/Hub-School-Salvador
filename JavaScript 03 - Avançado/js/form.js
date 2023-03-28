var botaoAdicionar = document.querySelector("#adicionar-paciente");

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    var formulario = document.querySelector("#form-adiciona");

    var paciente = obterPacienteFormulario(formulario);

    var erros = validarPaciente(paciente);

    //pegando a ul do codigo html
    //onde os erros serão colocados
    var ul = document.querySelector("#msgs-erro");

    //verificando se existem erros
    //se erros.length for maior que zero - existem erros
    if(erros.length>0){
        //limpando a minha ul no HTML
        ul.innerHTML = "";
        //percorrendo meu array de erros
        //onde erro é cada elemento do meu array
        erros.forEach(function(erro){
            //criando um elemento HTML - <li>
            li = document.createElement("li");
            //estou colocando o erro dentro da minha <li>
            //que eu criei anteriormente
            li.textContent = erro;
            //coloquei a <li> dentro da <ul> que está no meu
            //código HTML
            ul.appendChild(li);
        })
    }else{
        ul.innerHTML = "";
        adicionaPacienteTabela(paciente);
    }

});

function obterPacienteFormulario(formulario){
    var novoPaciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaIMC(formulario.peso.value,formulario.altura.value)
    }
    return novoPaciente;
}

function validarPaciente(paciente){
    var erros = [];
    if(paciente.nome.length==0){
        erros.push("Nome não pode estar vazio!");
    }
    if(paciente.peso<=0 || paciente.peso>300){
        erros.push("Peso fora do limite aceitavel!");
    }
    if(paciente.altura<=50 || paciente.altura>2.5){
        erros.push("Altura inaceitavel!");
    }
    if(paciente.gordura<=10 || paciente.gordura>=60){
        erros.push("Gordura inaceitavel!");
    }
    return erros;
}

function adicionaPacienteTabela(paciente){
    //criar uma linha
    var tr = montarTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(tr);

    //colocar a linha dentro da tabela
}

function montarTR(paciente){
    var pacienteTR = document.createElement("tr"); // <tr></tr>
    pacienteTR.classList.add("paciente");// <tr class="paciente"></tr>

    var nomeTD= montarTD(paciente.nome,"info-nome");//<td class="info-nome">nome da pessoa</td>
    var pesoTD= montarTD(paciente.peso,"info-peso");//<td class="info-peso">80</td>
    var alturaTD= montarTD(paciente.altura,"info-altura");//<td class="info-altura">2</td>
    var gorduraTD= montarTD(paciente.gordura,"info-gordura");//<td class="info-gordura">10</td>
    var imcTD= montarTD(paciente.imc,"info-imc");//<td class="info-imc">10.45</td>

    //<tr class="paciente">
        //<td class="info-nome">nome da pessoa</td>
    //</tr>
    pacienteTR.appendChild(nomeTD);

    //<tr class="paciente">
        //<td class="info-nome">nome da pessoa</td>
        //<td class="info-peso">80</td>
    //</tr>
    pacienteTR.appendChild(pesoTD);
    pacienteTR.appendChild(alturaTD);
    pacienteTR.appendChild(gorduraTD);
    pacienteTR.appendChild(imcTD);

    return pacienteTR;
}

function montarTD(dado,classe){
    var td = document.createElement("td");//td = <td></td>
    td.textContent = dado;//td = <td>dado</td>
    td.classList.add(classe);//td = <td class="info-nome">dado</td>
    return td; // <td class="classe">dado</td>
}

function calculaIMC(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}