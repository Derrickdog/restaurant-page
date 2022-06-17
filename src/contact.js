function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    contact.appendChild(createParagraph('If you would like to call ahead or order by phone'));
    contact.appendChild(createParagraph('Please call: (607) 272-1986'));
    contact.appendChild(createParagraph('We do not take reservations'));
    contact.appendChild(createParagraph('Located at 823 Danby Rd, Ithaca, NY 14850'));

    return contact;
}

function createParagraph(text) {
    const p  = document.createElement('p');
    p.classList.add('text');
    p.textContent = text;
    return p;
}

function loadContact() {
    const container = document.getElementById('container');
    container.textContent = '';
    container.appendChild(createContact());
}

export default loadContact;