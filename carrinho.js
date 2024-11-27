let contador = 0;

function adicionarAoCarrinho() {
    contador++;
    document.getElementById("contador").innerText = contador;

    // Exibir a notificação
    const notificacao = document.getElementById("notificacao");
    notificacao.classList.add("show");

    // Ocultar a notificação após 2 segundos
    setTimeout(() => {
        notificacao.classList.remove("show");
    }, 2000);
}
// Função para garantir que todos os corações na página tenham o tamanho correto ao carregar
window.onload = function () {
    const coracoes = document.querySelectorAll('.heart'); // Seleciona todos os corações na página
    coracoes.forEach(coracao => {
        coracao.style.width = "40px"; // Define o tamanho inicial como 40px
        coracao.style.height = "40px";
    });
};;

function mudarCoracao(elemento) {
    const coracaoColorido = "imgprojeto/coracaocolorido.png"; // Caminho para o coração cheio
    const coracaoSemCor = "imgprojeto/coracaosemcor.png"; // Caminho para o coração vazio

    // Alterna entre as imagens do coração
    if (elemento.src.includes("coracaosemcor.png")) {
        // Altera para o coração cheio
        elemento.src = coracaoColorido;
        elemento.style.width = "50px"; // Aumenta o tamanho para o coração cheio
        elemento.style.height = "50px";
    } else {
        // Altera para o coração vazio
        elemento.src = coracaoSemCor;
        elemento.style.width = "40px"; // Diminui o tamanho para o coração vazio
        elemento.style.height = "40px";
    }
}



function adicionarAosFavoritos() {
    // Exibir a notificação de favorito
    const notificacaoFavorito = document.getElementById("notificacaoFavorito");
    notificacaoFavorito.classList.add("show");

    // Ocultar a notificação após 2 segundos
    setTimeout(() => {
        notificacaoFavorito.classList.remove("show");
    }, 2000);
}

// Alterando a função mudarCoracao para adicionar aos favoritos
function mudarCoracao(elemento) {
    const coracaoColorido = "imgprojeto/coracaocolorido.png"; // Caminho para o coração cheio
    const coracaoSemCor = "imgprojeto/coracaosemcor.png"; // Caminho para o coração vazio

    // Alterna entre as imagens do coração
    if (elemento.src.includes("coracaosemcor.png")) {
        // Altera para o coração cheio
        elemento.src = coracaoColorido;
        elemento.style.width = "50px"; // Aumenta o tamanho para o coração cheio
        elemento.style.height = "50px";
        
        // Chama a função para adicionar aos favoritos
        adicionarAosFavoritos();
    } else {
        // Altera para o coração vazio
        elemento.src = coracaoSemCor;
        elemento.style.width = "40px"; // Diminui o tamanho para o coração vazio
        elemento.style.height = "40px";
    }
}