const menuListItens = document.querySelectorAll('.li-menu');

document.getElementById('anoatual').innerHTML = new Date().getFullYear();

function selectMenu() {
    menuListItens.forEach((liitens) => 
        liitens.classList.remove('activa')
    );
    this.classList.add('activa');
};

menuListItens.forEach((liitens) =>
    liitens.addEventListener('click', selectMenu)
);