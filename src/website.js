import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader(){
    const header = document.createElement('div');
    header.id = 'header';

    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Sunset Grill';

    header.appendChild(title);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('div');
    nav.classList.add('buttons');

    const homeButton = document.createElement('button');
    homeButton.classList.add('tab')
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('tab')
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement('button');
    contactButton.classList.add('tab')
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll('.tab');
    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function createContainer(){
    const container = document.createElement('div');
    container.classList.add('container');
    container.id = 'container';
    return container;
}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createContainer());

    setActiveButton(document.querySelector('.tab'));
    loadHome();
}

export default initializeWebsite;
