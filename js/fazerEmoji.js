const emoji = [
    { //chorando
        nome: "Chorando",
        svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.935 473.935" xml:space="preserve" fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#FFC10E;" cx="236.967" cy="236.967" r="236.967"></circle> <path style="fill:#333333;" d="M357.644,355.144c-66.005-68.621-174.861-68.763-241.065-0.341 c-8.389,8.666,4.827,21.912,13.227,13.227c59.266-61.249,155.52-61.088,214.61,0.341 C352.794,377.086,366.007,363.84,357.644,355.144L357.644,355.144z"></path> <g> <path style="fill:#75CDDE;" d="M116.893,124.849c-19.588,20.954-35.974,44.827-48.913,70.387 c-13.818,27.296-7.42,60.647,20.135,76.793c25.182,14.75,62.986,7.139,76.793-20.138c5.051-9.976,10.529-19.652,16.587-29.055 c2.848-4.415,5.934-8.666,9.066-12.879c-9.658,12.995,3.173-3.027,5.702-5.732c20.879-22.331,22.17-57.208,0-79.375 C175.187,103.767,137.784,102.495,116.893,124.849L116.893,124.849z"></path> <path style="fill:#75CDDE;" d="M414.987,216.279c-13.643-32.157-31.708-61.126-54.776-87.427c-20.183-23.016-58.81-20.565-79.375,0 c-22.683,22.683-20.153,56.396,0,79.375c1.998,2.226,3.944,4.501,5.841,6.818c-4.026-5.369-4.135-5.474-0.333-0.318 c3.817,5.212,7.252,10.69,10.638,16.183c8.239,13.351,14.96,27.603,21.074,42.028c11.959,28.187,52.961,34.091,76.793,20.135 C423.724,276.155,426.931,244.444,414.987,216.279L414.987,216.279z"></path> </g> <g> <circle style="fill:#333333;" cx="164.938" cy="155.232" r="37.216"></circle> <circle style="fill:#333333;" cx="305.667" cy="155.232" r="37.216"></circle> </g> </g>
        </svg>`
    },
    { //triste
        nome: "Triste",
        svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.935 473.935" xml:space="preserve" fill="currentColor">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#FFC10E;" cx="236.967" cy="236.967" r="236.967"></circle> <g> <path style="fill:#333333;" d="M356.671,354.1c-66.226-67.618-174.255-67.337-240.096,0.703 c-8.389,8.666,4.827,21.912,13.227,13.227c58.87-60.83,154.386-61.204,213.641-0.703C351.896,375.96,365.116,362.721,356.671,354.1 L356.671,354.1z"></path> <circle style="fill:#333333;" cx="164.938" cy="155.232" r="37.216"></circle> <circle style="fill:#333333;" cx="305.667" cy="155.232" r="37.216"></circle> </g> </g>
        </svg>`
    },
    { //feliz
        nome: "Feliz",
        svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.935 473.935" xml:space="preserve" fill="currentColor">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#FFC10E;" cx="236.967" cy="236.967" r="236.967"></circle> <g> <circle style="fill:#333333;" cx="164.938" cy="155.232" r="37.216"></circle> <circle style="fill:#333333;" cx="305.667" cy="155.232" r="37.216"></circle> <path style="fill:#333333;" d="M343.257,316.862c-59.281,60.329-154.663,59.854-213.45-0.898 c-8.4-8.685-21.616,4.561-13.227,13.227c65.769,67.97,173.645,68.34,239.905,0.898 C364.944,321.479,351.721,308.245,343.257,316.862L343.257,316.862z"></path> </g> </g>
        </svg>`
    },
    { //sorrindo
        nome: "Sorriso",
        svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.931 473.931" xml:space="preserve" fill="currentColor">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#FFC10E;" cx="236.966" cy="236.966" r="236.966"></circle> <path style="fill:#FFFFFF;" d="M81.391,237.123c0,85.911,69.649,155.56,155.56,155.56c85.915,0,155.564-69.649,155.564-155.56 L81.391,237.123L81.391,237.123z"></path> <g> <path style="fill:#CCCBCB;" d="M167.728,237.123c0,46.435,0,92.87,0,139.306c6.024,3.001,12.273,5.609,18.709,7.82 c0-49.043,0-98.083,0-147.126H167.728z"></path> <path style="fill:#CCCBCB;" d="M283.319,237.123c0,49.511,0,99.018,0,148.529c6.432-2.006,12.666-4.453,18.709-7.24 c0-47.098,0-94.191,0-141.289L283.319,237.123L283.319,237.123z"></path> </g> <g> <path style="fill:#333333;" d="M219.181,158.793c-1.684-31.255-23.992-53.56-55.243-55.243 c-31.184-1.68-53.698,26.522-55.243,55.243c-0.651,12.063,18.061,12,18.709,0c2.537-47.09,70.536-47.09,73.069,0 C201.12,170.793,219.832,170.856,219.181,158.793L219.181,158.793z"></path> <path style="fill:#333333;" d="M353.985,158.793c-1.684-31.255-23.992-53.56-55.243-55.243 c-31.184-1.68-53.694,26.522-55.243,55.243c-0.651,12.063,18.061,12,18.709,0c2.537-47.09,70.532-47.09,73.069,0 C335.924,170.793,354.637,170.856,353.985,158.793L353.985,158.793z"></path> </g> </g>
        </svg>`
    },
    { //apaixonado
        nome: "Apaixonado",
        svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.931 473.931" xml:space="preserve" fill="currentColor">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#FFC10E;" cx="236.966" cy="236.966" r="236.966"></circle> <g> <path style="fill:#ED3533;" d="M182.13,109.97c-14.133,0-27.262,6.892-35.154,18.432l-1.628,2.069l-1.089-1.388 c-7.802-11.962-20.954-19.109-35.232-19.109c-24.363,0-42.042,17.684-42.042,42.039c0,35.962,65.107,88.968,69.855,92.784 c2.241,2.144,5.175,3.323,8.288,3.323s6.047-1.175,8.288-3.326c4.763-3.847,70.753-57.683,70.753-92.781 C224.169,127.654,206.489,109.97,182.13,109.97z"></path> <path style="fill:#ED3533;" d="M366.696,109.97c-14.133,0-27.262,6.892-35.154,18.432l-1.628,2.069l-1.089-1.388 c-7.802-11.962-20.954-19.109-35.232-19.109c-24.363,0-42.042,17.684-42.042,42.039c0,35.962,65.107,88.968,69.855,92.784 c2.241,2.144,5.175,3.323,8.288,3.323c3.109,0,6.043-1.175,8.288-3.326c4.76-3.843,70.749-57.683,70.749-92.781 C408.735,127.654,391.055,109.97,366.696,109.97z"></path> </g> <path style="fill:#333333;" d="M343.254,316.86c-59.281,60.325-154.662,59.853-213.449-0.898c-8.4-8.681-21.616,4.561-13.227,13.227 c65.769,67.969,173.644,68.332,239.903,0.898C364.941,321.481,351.718,308.246,343.254,316.86L343.254,316.86z"></path> </g>
        </svg>`
    },
    { //nojo
        nome: "Nojo",
        svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.931 473.931" xml:space="preserve" fill="currentColor">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#81C241;" cx="236.966" cy="236.966" r="236.966"></circle> <circle style="fill:#5E9A42;" cx="236.966" cy="318.274" r="28.254"></circle> <g> <circle style="fill:#333333;" cx="164.937" cy="155.227" r="37.216"></circle> <circle style="fill:#333333;" cx="305.664" cy="155.227" r="37.216"></circle> </g> <g> <path style="fill:#67AF45;" d="M203.907,277.758c0,44.617-36.183,80.815-80.807,80.815c-44.617,0-80.8-36.198-80.8-80.815 c0-44.624,36.183-80.807,80.8-80.807C167.724,196.955,203.907,233.134,203.907,277.758z"></path> <path style="fill:#67AF45;" d="M432.054,277.758c0,44.617-36.183,80.815-80.807,80.815c-44.632,0-80.815-36.198-80.815-80.815 c0-44.624,36.183-80.807,80.815-80.807C395.871,196.955,432.054,233.134,432.054,277.758z"></path> </g> </g>
        </svg>`
    },
    { //raiva
        nome: "Raiva",
        svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.931 473.931" xml:space="preserve" fill="currentColor">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#FFC10E;" cx="236.966" cy="236.966" r="236.966"></circle> <g> <path style="fill:#333333;" d="M106.883,85.989c25.141,18.817,50.282,37.638,75.423,56.456c9.669,7.237,18.978-9.018,9.44-16.153 c-25.141-18.817-50.282-37.638-75.423-56.456C106.659,62.596,97.346,78.85,106.883,85.989L106.883,85.989z"></path> <path style="fill:#333333;" d="M356.298,69.832c-25.141,18.817-50.282,37.638-75.423,56.456c-9.538,7.139-0.228,23.39,9.44,16.153 c25.141-18.817,50.282-37.638,75.423-56.456C375.276,78.85,365.967,62.596,356.298,69.832L356.298,69.832z"></path> <circle style="fill:#333333;" cx="164.937" cy="155.231" r="37.216"></circle> <circle style="fill:#333333;" cx="305.664" cy="155.231" r="37.216"></circle> </g> <path style="fill:#FFFFFF;" d="M392.514,377.719c0-85.911-69.645-155.56-155.56-155.56s-155.56,69.649-155.56,155.56H392.514z"></path> <g> <path style="fill:#CCCBCB;" d="M306.177,377.719c0-46.435,0-92.87,0-139.306c-6.02-3.001-12.269-5.609-18.709-7.82 c0,49.043,0,98.087,0,147.126L306.177,377.719L306.177,377.719z"></path> <path style="fill:#CCCBCB;" d="M190.59,377.719c0-49.507,0-99.018,0-148.529c-6.432,2.006-12.666,4.453-18.709,7.244 c0,47.098,0,94.191,0,141.289h18.709V377.719z"></path> </g> </g>
        </svg>`
    }
];

let humorSelecionado = null;

function fazerEmojis() {
    const tabela = document.getElementById("emojis");
    const mensagemErro = document.getElementById("erro");
    
    emoji.forEach((item, index) => {
        const botao = document.createElement("div");
        botao.innerHTML = item.svg;
        botao.classList.add("botao");
        botao.setAttribute("data-humor", item.nome);
        botao.setAttribute("data-index", index);
        
        botao.addEventListener("click", function() {
            
            document.querySelectorAll(".botao").forEach(btn => {
                btn.classList.remove("selecionado");
            });
            
            this.classList.add("selecionado");
            
            humorSelecionado = {
                nome: item.nome,
                svg: item.svg,
                index: index
            };

            sessionStorage.setItem('humor', JSON.stringify(humorSelecionado));
        });
        
        tabela.appendChild(botao);
    });
}

function escreverNome(){
    const linha = document.getElementById("boasVindas");
    const nomeUsuario = localStorage.getItem('nomeAtual');
    const hora = new Date().getHours();
    let periodo = '';
        
    if (hora < 12) {
        periodo = 'Bom dia';
    } else if (hora < 18) {
        periodo = 'Boa tarde';
    } else {
        periodo = 'Boa noite';
    }

    if (nomeUsuario && nomeUsuario.trim() !== '') {
        linha.textContent = `${periodo}! Seja bem-vindo(a) ${nomeUsuario}!`;
    } else {
        window.location.href = "/index.html";
    }
}

function historicoEmojis(){
    const tabela = document.getElementById("historicoHumor");
    const entradas = JSON.parse(localStorage.getItem('entradasDiario')) || [];
    const contagem = {};
    
    entradas.forEach(entrada => {
        const emoji = entrada.emoji;
        if(contagem[emoji]) {
            contagem[emoji]++;
        } else {
            contagem[emoji] = 1;
        }
    });
    
    tabela.innerHTML = '';
    for(let emoji in contagem) {
        const div = document.createElement("div");
        div.innerHTML = `${emoji} <p>${contagem[emoji]}x</p>`;
        div.classList.add("div");
        tabela.appendChild(div);
    }
}

historicoEmojis();
fazerEmojis();
escreverNome();