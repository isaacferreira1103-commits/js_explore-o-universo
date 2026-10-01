// procure e selecione o elemneto com a classe card-destino
// e guarde em uma variável chamada Primeiro card
let priemiroCard = document.querySelector('.card-destino')

//não pode usar o -
//procure eselecione o botão de curiosidade da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade")

//procure eselecione o paragráfo de curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade")

/* monitore ou clique no botão de curiosidade e, quando acontecer o clique, verifique se a curiosidade está oculta se estiver, faça ficar visivel, mude o aria-expanded para true e troque o texto do botão para "ocultar curiosidade" */
botaoCuriosidade.addEventListener("click", function () {
    if (curiosidade.hidden){
        // faça aparecer
        curiosidade.hidden = false;

        //mude o atributo
    botaoCuriosidade.setAttribute("aria-expanded", "true");

        // troque o texto do botão para ocultar curiosidade
    botaoCuriosidade.textContent = "Ocultar curiosidade";} 

    else{
    curiosidade.hidden = true
    botaoCuriosidade.setAttribute("aria-expanded", "false");
    botaoCuriosidade.textContent = "ver curiosidades"
    }
    
})