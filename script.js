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
function calcularDiferenca(dataInicial) {
    const agora = new Date();
    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();
  
    if (dias < 0) {
      meses -= 1;
      dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    }
  
    if (meses < 0) {
      anos -= 1;
      meses += 12;
    }
  
    return { anos, meses, dias };
  }
  
  // Função de atualização do contador
  function atualizarContagem() {
    const agora = new Date();
    const diferenca = agora - dataInicial;
  
    if (diferenca < 0) return;
  
    // Chama a função calcularDiferenca
    const { anos, meses, dias } = calcularDiferenca(dataInicial);
  
    // Atualiza o DOM
    anosEl.textContent = anos;
    mesesEl.textContent = meses;
    diasEl.textContent = dias;
  
    // Calcula horas, minutos e segundos
    const segundosTotais = Math.floor(diferenca / 1000);
    const horas = Math.floor(segundosTotais % (24 * 60 * 60) / (60 * 60));
    const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
    const segundos = segundosTotais % 60;
  
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

