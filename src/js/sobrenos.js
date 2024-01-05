'user strict'

const selectDivs = document.querySelectorAll('.div-main');
let slideAtual = 0;

setInterval(() => {
    slideSobreNos();
}, 5000);

function slideSobreNos() {

    selectDivs[slideAtual].classList.remove('visibled');

    slideAtual++;

    if (slideAtual > selectDivs.length -1) {
        slideAtual = 0;
    };

    selectDivs[slideAtual].classList.add('visibled');
};