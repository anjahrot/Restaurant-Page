import '../src/style/style.css';
import { initial_pageload } from './js/homepage';
import { getMenu } from './js/menu';

console.log("Hi there, from the restaurant page!!");

initial_pageload();

const content = document.querySelector('#content');
const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');

homeBtn.addEventListener('click', () => renderContent(initial_pageload));
menuBtn.addEventListener('click',() => renderContent(getMenu));

function renderContent(createFunction){
    content.innerHTML = '';
    createFunction();
}