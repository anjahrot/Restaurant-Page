import '../style/menu.css';

import Pasta1 from '../assets/img/pasta1.jpg';
import Pasta2 from '../assets/img/pasta2.jpg';

const content = document.querySelector('#content');

function getMenu() {
    const col_1 = document.createElement('div');
    const col_2 = document.createElement('div');
    col_2.classList.add('col-2');

    const headline = document.createElement('h2');
    headline.textContent = 'Menu';

    const menu_items = document.createElement('div');
    menu_items.classList.add('items');
    
    const item1 = document.createElement('div');
    const item1Image = new Image();
    item1Image.classList.add('image');
    item1Image.src = Pasta1;

    const item1Text = document.createElement('p');
    item1Text.textContent = 'Classic Tomato Sauce Delicious Pastadish';
    const item1Price = document.createElement('p');
    item1Price.textContent = '$22.00';
    
    const item2 = document.createElement('div');
    const item2Image = new Image();
    item2Image.classList.add('image');
    item2Image.src = Pasta2;

    const item2Text = document.createElement('p');
    item2Text.textContent = 'Burst Cherry Tomato Pasta';
    const item2Price = document.createElement('p');
    item2Price.textContent = '$20.00';

    item1.appendChild(item1Image);
    item1.appendChild(item1Text);
    item1.appendChild(item1Price);

    item2.appendChild(item2Image);
    item2.appendChild(item2Text);
    item2.appendChild(item2Price);

    menu_items.appendChild(item1);
    menu_items.appendChild(item2);

    col_2.appendChild(headline);
    col_2.appendChild(menu_items);

    content.appendChild(col_1);
    content.appendChild(col_2);
}

export {getMenu};