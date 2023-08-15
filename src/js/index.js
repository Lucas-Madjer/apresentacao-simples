// pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

 // identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function() {
        
        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba);
        mostrarInformacoesDaAba(aba);
    });
});

function selecionarAba(aba) {
     //ao clicar,desmarcar a aba selecionada
     const abaSelecionada =  document.querySelector(".aba.selecionado");
     abaSelecionada.classList.remove("selecionado");
     
     //marcar a aba clicada como selecionado
     aba.classList.add("selecionado");
};

function mostrarInformacoesDaAba(aba) {
    //esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacaoDaAba = `informacao-${aba.id}`;

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacaoDaAba);
    informacaoASerMostrada.classList.add("selecionado");
};