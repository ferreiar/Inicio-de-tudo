// Data inicial para o contador
const dataInicial = new Date("2024-05-14T09:18:00");

// Elementos do contador
const anosEl = document.getElementById("anos");
const mesesEl = document.getElementById("meses");
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

// Função de atualização do contador
function atualizarContagem() {
    const agora = new Date();
    const diferenca = agora - dataInicial;

    if (diferenca < 0) return;

    const segundosTotais = Math.floor(diferenca / 1000);

    const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
    const meses = Math.floor((segundosTotais % (365.25 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    const dias = Math.floor((segundosTotais % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const horas = Math.floor((segundosTotais % (24 * 60 * 60)) / (60 * 60));
    const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
    const segundos = segundosTotais % 60;

    anosEl.textContent = anos;
    mesesEl.textContent = meses;
    diasEl.textContent = dias;
    horasEl.textContent = horas;
    minutosEl.textContent = minutos;
    segundosEl.textContent = segundos;
}

setInterval(atualizarContagem, 1000);

// Controle do carrossel
let indiceAtual = 0;

function mudarSlide(direcao) {
    const slides = document.querySelector(".slides");
    const totalSlides = slides.children.length;

    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = totalSlides - 1;
    } else if (indiceAtual >= totalSlides) {
        indiceAtual = 0;
    }

    slides.style.transform = `translateX(-${indiceAtual * 100}%)`;
}
