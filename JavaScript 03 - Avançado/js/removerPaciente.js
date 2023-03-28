//capturar os elementos da tabela

//criar uma função para que haja um duplo click
    //capturar a linha do paciente
    //remover paciente

    var tabelas = document.querySelector("#tabela-pacientes");

    tabelas.addEventListener("dblclick",function(event){
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function(){
            event.target.parentNode.remove();
        },500)
    });