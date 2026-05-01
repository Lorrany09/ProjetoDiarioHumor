function entrarPagina(){
    const nome = document.getElementById('nome').value;
    const input = document.getElementById("nome");
    const mensagem = document.getElementById("mensagemErro");

    if(nome === "") {
        input.classList.add("erro");
        mensagem.innerHTML = `<span>ⓘ Digite seu nome, por favor!</span>`;
        input.addEventListener("click", function(){
            input.classList.remove("erro");
            mensagem.innerHTML = ``;
        });
        return;
    }

    localStorage.setItem('nomeAtual', nome);
    window.location.href = "pages/diario.html";
}

function sairPagina(){
    window.location.href = "/index.html";
}