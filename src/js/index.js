const menuListItens = document.querySelectorAll('.li-menu a');
const selectCheckdBox = document.getElementById('menu-hamburg');

document.getElementById('anoatual').innerHTML = new Date().getFullYear();

menuListItens.forEach((liitens) =>
    liitens.addEventListener('click', selectMenu)
);

function selectMenu() {
    menuListItens.forEach((liitens) => 
        liitens.classList.remove('activa')
    );
    this.classList.add('activa');
    selectCheckdBox.checked = false;
};