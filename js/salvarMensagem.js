const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

function salvarHumor(){
    const humorSalvo = JSON.parse(sessionStorage.getItem('humor'));
    const input = document.getElementById("motivo").value;
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const hoje = new Date();
    const diaAtual = diasSemana[hoje.getDay()];

    if(humorSalvo && input){
        const entradaDiario = {
            texto: input,
            diaDaSemana: diaAtual,
            data: dataAtual,
            humor: humorSalvo.nome,
            emoji: humorSalvo.svg
        };

        const entradasSalvas = JSON.parse(localStorage.getItem('entradasDiario')) || [];
        entradasSalvas.push(entradaDiario);
        localStorage.setItem('entradasDiario', JSON.stringify(entradasSalvas));

        document.getElementById("motivo").value = "";
        carregarTodasEntradas();
    } else {
        //Fazer função para impedir do usuario não preencher um dos campos 
    }
}

function carregarTodasEntradas() {
    const entradas = JSON.parse(localStorage.getItem('entradasDiario')) || [];
    const tabela = document.getElementById("historico");
    
    entradas.forEach(entrada => {
        const texto = document.createElement("div");
        texto.innerHTML += `
            <div class="entrada">
                <p>${entrada.diaDaSemana}: ${entrada.data}</p>
                <div class="mensagem">
                    <div class="emoji">${entrada.emoji}</div>
                    <p>${entrada.texto}</p>
                </div>
                <hr>
            </div>
        `;
        tabela.appendChild(texto);
    });
    
    if(entradas.length === 0) {
        tabela.innerHTML = 'Nenhum registro ainda';
    }
}

function apagarTudo(){
    localStorage.removeItem('entradasDiario');
}

carregarTodasEntradas();