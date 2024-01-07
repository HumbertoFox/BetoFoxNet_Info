'user strict'

const selectMain = document.querySelector('.main-sobrenos');
const selectDivs = document.querySelectorAll('.div-main');
const selectBtnRight = document.querySelector('.btn-right');
const selectBtnLeft = document.querySelector('.btn-left');
const maxSlides = selectDivs.length;
let slideAtual = 0;

selectMain.addEventListener("mouseenter", () => {
    selectBtnRight.style.opacity = ".3";
    selectBtnLeft.style.opacity = ".3";
});

selectMain.addEventListener("mouseout", () => {
    selectBtnRight.style.opacity = "0";
    selectBtnLeft.style.opacity = "0";
});

setInterval(slideSobreNos, 5000);

function slideSobreNos() {

    selectDivs[slideAtual].classList.remove('visibled');

    slideAtual++;

    if (slideAtual > maxSlides -1) {
        slideAtual = 0;
    };

    selectDivs[slideAtual].classList.add('visibled');
};

selectBtnLeft.addEventListener("click", () => {
    selectDivs[slideAtual].classList.remove('visibled');
    slideAtual -= 1;
    if (slideAtual < 0) {
        slideAtual = maxSlides -1;
    };
    selectDivs[slideAtual].classList.add('visibled');
});

selectBtnRight.addEventListener("click", () => {
    selectDivs[slideAtual].classList.remove('visibled');
    slideAtual += 1;
    if (slideAtual >= maxSlides) {
        slideAtual = 0;
    };
    selectDivs[slideAtual].classList.add('visibled');
});