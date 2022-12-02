const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const imagemRobo = document.querySelector("[data-cor]");
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const caminhoImagens = [
    "img/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png",
    "img/Robotron 2000 - Azul/Robotron 2000 - Azul.png",
    "img/Robotron 2000 - Branco/Robotron 2000 - Branco.png",
    "img/Robotron 2000 - Preto/Robotron 2000 - Preto.png",
    "img/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png",
    "img/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png"
]

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {

    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

imagemRobo.onclick = () => {
    switch (imagemRobo.dataset.cor) {
        case "amarelo":
            imagemRobo.src = caminhoImagens[1];
            imagemRobo.dataset.cor = "azul";
            break;
        case "azul":
            imagemRobo.src = caminhoImagens[2];
            imagemRobo.dataset.cor = "branco";
            break;
        case "branco":
            imagemRobo.src = caminhoImagens[3];
            imagemRobo.dataset.cor = "preto";
            break;
        case "preto":
            imagemRobo.src = caminhoImagens[4];
            imagemRobo.dataset.cor = "rosa";
            break;
        case "rosa":
            imagemRobo.src = caminhoImagens[5];
            imagemRobo.dataset.cor = "vermelho";
            break;
        case "vermelho":
            imagemRobo.src = caminhoImagens[0];
            imagemRobo.dataset.cor = "amarelo";
            break;
    }
}