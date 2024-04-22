const menuListItens = document.querySelectorAll('.li-menu a');
const selectCheckdBox = document.getElementById('menu-hamburg');
const selectAnimations = document.querySelectorAll("[data-animation]");

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
};