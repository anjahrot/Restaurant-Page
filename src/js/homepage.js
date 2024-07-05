import '../style/homepage.css';

const content = document.querySelector('#content');

function initial_pageload() {    
    const column1 = document.createElement('div');
    const column2 = document.createElement('div');
    column2.classList.add('col2');

    const headline = document.createElement('h1');
    headline.textContent = 'Trattoria Popolare';
    const text = document.createElement('h2');
    text.textContent = 'Enjoy delicious Italian cuisine in a relaxed yet sophisticated environment'
    
    const paragraphs = document.createElement('div');
    const paraFirst = document.createElement('p');
    paraFirst.textContent = 'Welcome to our restaurant!';
    const paraSecond = document.createElement('p');
    paraSecond.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
       'Quo cupiditate, doloribus consequatur odio aperiam officia illum inventore, fuga dolor id omnis minus porro delectus sunt animi dolorum, earum eius quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero ipsum quisquam, nisi animi quam ex ad neque facere reiciendis molestiae aperiam cum deleniti culpa, saepe molestias. Mollitia, adipisci dignissimos?';

    paragraphs.appendChild(paraFirst);
    paragraphs.appendChild(paraSecond);

    column2.appendChild(headline);
    column2.appendChild(text);
    column2.appendChild(paragraphs);

    content.appendChild(column1);
    content.appendChild(column2);
}
export {initial_pageload};