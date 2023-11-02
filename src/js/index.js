const menuListItens = document.querySelectorAll('.li-menu');

const selectMenuHamburg = document.querySelectorAll('li a');

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

selectMenuHamburg.forEach(function(itenli){
    itenli.addEventListener('click', function () {
        document.getElementById('menu-hamburg').checked = false;
    })
})