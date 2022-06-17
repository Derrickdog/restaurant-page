function createHome() {
    const home = document.createElement('div');
    
    const img = document.createElement('img');
    img.classList.add('image');
    img.src = 'sunset-grill.jpeg';
    img.alt = 'Sunset Grill Dining Room';

    home.appendChild(createParagraph('The best breakfast in Ithaca!'));
    home.appendChild(img);
    home.appendChild(createParagraph('Open 7AM to 9PM'));
    home.appendChild(createParagraph('Visit us today!'));

    return home;
}

function createParagraph(text) {
    const p  = document.createElement('p');
    p.classList.add('text');
    p.textContent = text;
    return p;
}

function loadHome() {
    const container = document.getElementById('container');
    container.textContent = '';
    container.appendChild(createHome());
}

export default loadHome;