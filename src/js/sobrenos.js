'user strict'

const selectMain = document.querySelector('.main-sobrenos');
const selectDivs = document.querySelectorAll('.div-main');
const selectBtnRight = document.querySelector('.btn-right');
const selectBtnLeft = document.querySelector('.btn-left');
const selectTagH1 = document.querySelector('.h1-info-nos');
const selectTagP = document.querySelector('.p-info-nos');
const selectTagH2 = document.querySelectorAll('.h2-info-nos');
const maxSlides = selectDivs.length;
let slideAtual = 0;

selectMain.addEventListener("mouseenter", () => {
    opacityButtonEnter();
});

selectMain.addEventListener("mouseout", () => {
    selectBtnRight.style.opacity = "0";
    selectBtnLeft.style.opacity = "0";
});

selectTagP.addEventListener("mouseenter", () => {
    opacityButtonEnter();
});

selectTagH1.addEventListener("mouseenter", () => {
    opacityButtonEnter();
});

selectTagH2.forEach((selectH2) => {
    selectH2.addEventListener("mouseenter", () => {
        opacityButtonEnter();
    })
});

function opacityButtonEnter() {
    selectBtnRight.style.opacity = ".3";
    selectBtnLeft.style.opacity = ".3";
};

setInterval(slideSobreNos, 5000);

function slideSobreNos() {

    selectDivs[slideAtual].classList.remove('visibled');

    slideAtual++;

    if (slideAtual > maxSlides - 1) {
        slideAtual = 0;
    };

    selectDivs[slideAtual].classList.add('visibled');
};

selectBtnLeft.addEventListener("click", () => {
    selectDivs[slideAtual].classList.remove('visibled');
    slideAtual -= 1;
    if (slideAtual < 0) {
        slideAtual = maxSlides - 1;
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