function createMenu(){
    const menu = document.createElement('img');
    menu.id = 'menu';
    menu.src = 'menu.jpeg';
    menu.alt = 'Sunset Grill Menu';

    return menu;
}

function loadMenu() {
    const container = document.getElementById('container');
    container.textContent = '';
    container.appendChild(createMenu());
}

export default loadMenu;