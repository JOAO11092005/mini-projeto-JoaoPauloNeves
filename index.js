const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {

    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
}


function mostrarInformacoesDaAba(aba) {
    const informacao = document.getElementById("informacao-dobre-mim", "informacao-minhas-redes")
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado")
    console.log(idDoElementoDeInformacoesDaAba)
}