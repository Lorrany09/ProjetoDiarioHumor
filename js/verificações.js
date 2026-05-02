function entrarPagina(){
    const nome = document.getElementById('nome').value
    const nomeSemEspaco = nome.replace(/\s/g, '');
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
    sessionStorage.setItem('usuarioLogado', nomeSemEspaco);
    sessionStorage.setItem('nomeLogado', nome);
    window.location.href = "diario.html";
}

function sairPagina(){
    window.location.href = "index.html";
}

function getChaveUsuario() {
    const usuario = sessionStorage.getItem('usuarioLogado');
    return `entradasDiario_${usuario}`;
}