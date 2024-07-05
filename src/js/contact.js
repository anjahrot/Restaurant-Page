import '../style/contact.css';

const content = document.querySelector('#content');

function getContact() {
    const col_1 = document.createElement('div');
    const col_2 = document.createElement('div');
    col_2.classList.add('contact-col2');

    const headline = document.createElement('h2');
    headline.textContent = 'Contact Us';

    const info = document.createElement('div');
    const phone = document.createElement('p');
    phone.textContent = '+99 999 999 999';
    const adress = document.createElement('p');
    adress.textContent = 'Little Italy, New York City';
    
    info.appendChild(phone);
    info.appendChild(adress);

    col_2.appendChild(headline);
    col_2.appendChild(info);

    content.appendChild(col_1);
    content.appendChild(col_2);
}

export {getContact};