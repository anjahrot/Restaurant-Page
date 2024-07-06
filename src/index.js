import '../src/style/style.css';
import { getContact } from './js/contact';
import { initial_pageload } from './js/homepage';
import { getMenu } from './js/menu';

initial_pageload();

const content = document.querySelector('#content');
const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const contactBtn = document.querySelector('#contactBtn');

const buttons = [homeBtn, menuBtn, contactBtn];

homeBtn.addEventListener('click', () => renderContent(initial_pageload));
menuBtn.addEventListener('click',() => renderContent(getMenu));
contactBtn.addEventListener('click', () => renderContent(getContact));

function renderContent(createFunction){
    buttons.forEach( btn => btn.classList.remove('chosen'));
    content.innerHTML = '';
    if(createFunction === initial_pageload) {
        homeBtn.classList.add('chosen');
    }
    else if(createFunction === getMenu) {
        menuBtn.classList.add('chosen');
    } else {
        contactBtn.classList.add('chosen');
    }
    createFunction();
}