const menuListItens = document.querySelectorAll('.li-menu a');
const selectCheckdBox = document.getElementById('menu-hamburg');
const selectAnimations = document.querySelectorAll("[data-animation]");
const selectApresent = document.getElementById("section-apresentacao");
const selectCatalogo = document.getElementById("section-catalogo");
const selectIframe = document.getElementById("localizacao");
const selectFooter = document.getElementById("footer");

document.getElementById('anoatual').innerHTML = new Date().getFullYear();

menuListItens.forEach((liitens) =>
    liitens.addEventListener('click', selectMenu)
);

window.addEventListener("scroll", () => {
    animatinScroll();
});

function selectMenu() {
    menuListItens.forEach((liitens) => 
        liitens.classList.remove('activa')
    );
    this.classList.add('activa');
    selectCheckdBox.checked = false;
};

const animatinScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * .50;

    selectAnimations.forEach((animation) => {
        (windowTop > animation.offsetTop) ? animation.classList.add("animation")
                                          : animation.classList.remove("animation");
    });
    
    (selectIframe.classList.contains("animation") == true) ? selectFooter.classList.add("animation")
                                                           : selectFooter.classList.remove("animation");

    (selectCatalogo.classList.contains("animation") == true) ? selectApresent.classList.remove("animation")
                                                             : selectApresent.classList.add("animation");

};