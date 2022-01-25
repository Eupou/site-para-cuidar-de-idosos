const SETA_ESQUERDA = document.getElementById('sta-esq')
const SETA_DIREITA = document.getElementById('sta-dir')

SETA_ESQUERDA.addEventListener("click", moveParaDireita)
SETA_DIREITA.addEventListener("click",  moveParaEsquerda)

let margin = -15

function moveParaEsquerda() {
    margin -= 335
    document.querySelector(".container__carousel").style.marginLeft = `${margin}px`
    SETA_ESQUERDA.style.marginLeft = `${-margin}px`
    SETA_DIREITA.style.marginLeft = `${-margin}px`
}

function moveParaDireita() {
    if (margin < -15) {
        margin += 335
        document.querySelector(".container__carousel").style.marginLeft = `${margin}px`
        SETA_ESQUERDA.style.marginLeft = `${-margin}px`
        SETA_DIREITA.style.marginLeft = `${-margin}px`
    } 
}