const menuListItens = document.querySelectorAll('.li-menu a');
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

for (const iterator of menuListItens) {
    iterator.addEventListener('click', function(){
        selectCheckdBox.checked = false;
    });
};