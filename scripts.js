const textDiv = document.querySelector("p.result-box")

const conselhos = [
    "Minha nova filosofia de vida é ser igual chuveiro velho: nem ligo e quando ligo, nem esquento.",
    "Regras básicas para se dar bem na vida: -Não confiar em ninguém. -Não esperar nada de ninguém. -Ninguém presta.",
    "Se alguém lhe jogar uma pedra, seja diferente, jogue um tijolo.",
]

function gerarConselho() {
    let nSort = parseInt(Math.random() * conselhos.length);
    textDiv.innerText = conselhos[nSort];
}