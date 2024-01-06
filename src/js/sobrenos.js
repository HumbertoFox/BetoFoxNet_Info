'user strict'

const selectMain = document.querySelector('.main-sobrenos');
const selectDivs = document.querySelectorAll('.div-main');
const selectBtnRight = document.querySelector('.btn-right');
const selectBtnLeft = document.querySelector('.btn-left');
let slideAtual = 0;

selectMain.addEventListener("mouseenter", () => {
    selectBtnRight.style.opacity = ".3";
    selectBtnLeft.style.opacity = ".3";
});

selectMain.addEventListener("mouseout", () => {
    selectBtnRight.style.opacity = "0";
    selectBtnLeft.style.opacity = "0";
});

const constInterval = setInterval(slideSobreNos, 5000);

function slideSobreNos() {

    selectDivs[slideAtual].classList.remove('visibled');

    slideAtual++;

    if (slideAtual > selectDivs.length -1) {
        slideAtual = 0;
    };

    selectDivs[slideAtual].classList.add('visibled');
};