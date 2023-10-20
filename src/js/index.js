const menuListItens = document.querySelectorAll('.li-menu');

function selectMenu() {
    menuListItens.forEach((liitens) => 
        liitens.classList.remove('activa')
    );
    this.classList.add('activa');
};

menuListItens.forEach((liitens) =>
    liitens.addEventListener('click', selectMenu)
);