let cards = document.querySelectorAll(".card-destino");

//* percorra todos os acrds selecionados para cada um (separadamente) pegar os botões (botões curiosidades e o botão de favoritos) */
cards.forEach(function (card) {
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');

    botaoCuriosidade.addEventListener("click", function () {
        if (curiosidade.hidden) {
            curiosidade.hidden = false
            botaoCuriosidade.setAttribute("aria-expanded", true);
            botaoCuriosidade.textContent = " Ocultar curiosidade";
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false");
            botaoCuriosidade.textContent = "Ver curiosidade"
        }
    })
     // fechamento do código do botaoCuriosidade
    botaoFavorito.addEventListener("click", function(){
        //aplicar/remover a clas 'favoritado'
        let favoritado = card.classList.toggle('favoritado')

        // atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);

        // atualizar p texto do botão ()
        if(favoritado) {
            botaoFavorito.textContent = "★ favoritado"
        } else {
            botaoFavorito.textContent = "☆ favorito"
        }
    })
})