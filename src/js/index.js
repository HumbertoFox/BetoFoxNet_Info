const menuListItens = document.querySelectorAll('.li-menu');
const selectCheckdBox = document.getElementById('menu-hamburg');

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

for (let i = 0; i < menuListItens.length; i++) {
    menuListItens[i].addEventListener('click', function(){
        selectCheckdBox.checked = false;
    });
};