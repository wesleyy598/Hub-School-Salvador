//capturar o botao
var campoInput = document.querySelector("#filtrar-tabela");

//adicionar ao botao um evento de click
campoInput.addEventListener("input",function(event){
    var pacientes = document.querySelectorAll(".paciente");
    var campo = this;
    
    //capturar todas as linhas
    //percorrer cada linha (o nome)
        //verifico se a letra combina
            //true
                //deixo ela aparecer
            //false
                //escondo a linha

    if(campo.value.length > 0){
        pacientes.forEach(function(paciente){
            var td=paciente.querySelector(".info-nome"); //<td>Paulo</td>
            var conteudo = td.textContent; // Paulo
            var expressao = new RegExp(campo.value,"i");

            if(!expressao.test(conteudo)){// ! = not
                //invisivel
                paciente.classList.add("esconde");
            }else{
                //visivel
                paciente.classList.remove("esconde");
            }
        })
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("esconde");
        });
    }
});