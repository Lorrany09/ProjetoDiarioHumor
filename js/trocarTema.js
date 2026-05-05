function trocarTema() {
    const botao = document.getElementById("trocaTema");
    botao.addEventListener("click", function(){
        let tema = localStorage.getItem('tema');
        if(tema !== "dark"){
            botao.textContent = "Modo claro";
            temaDark();
        } else {
            botao.textContent = "Modo escuro";
            temaLight();
        }
        return 0;
    });
    let tema = localStorage.getItem('tema');
    if(tema === "dark"){
        botao.textContent = "Modo claro";
        temaDark();
    } else {
        botao.textContent = "Modo escuro";
        temaLight();
    }
}

function temaAtual(){
    let tema = localStorage.getItem('tema');
    if(tema === "dark"){
        temaDark();
    } else {
        temaLight();
    }
}

function temaDark(){
    document.documentElement.style.setProperty("--fundoBody", "#1d0237");
    document.documentElement.style.setProperty("--fundoMain", "#262423");
    document.documentElement.style.setProperty("--principal", "#100026");
    document.documentElement.style.setProperty("--principalClaro", "#140825");
    document.documentElement.style.setProperty("--destaque", "#03125d");
    document.documentElement.style.setProperty("--destaqueClaro", "#4138497d");
    document.documentElement.style.setProperty("--realce", "#6900a2");
    document.documentElement.style.setProperty("--realceHover", "#47006e");
    document.documentElement.style.setProperty("--textoPrincipal", "white");
    document.documentElement.style.setProperty("--borda", "#a47be2");
    localStorage.setItem('tema', "dark");
}

function temaLight(){
    document.documentElement.style.setProperty("--fundoBody", "#FFF7F0");
    document.documentElement.style.setProperty("--fundoMain", "#FFFFFF");
    document.documentElement.style.setProperty("--principal", "#ff5848");
    document.documentElement.style.setProperty("--principalClaro", "#FF7B6E");
    document.documentElement.style.setProperty("--destaque", "#FFD166");
    document.documentElement.style.setProperty("--destaqueClaro", "#FFE8B6");
    document.documentElement.style.setProperty("--realce", "#FF9F1C");
    document.documentElement.style.setProperty("--realceHover", "#FFBF69");
    document.documentElement.style.setProperty("--textoPrincipal", "black");
    document.documentElement.style.setProperty("--borda", "#E2A47B");
    localStorage.setItem('tema', "light");
}