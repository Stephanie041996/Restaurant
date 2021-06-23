import homePage from './home.js';
import navbar from './nav.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const mainContainer = document.createElement('div');
mainContainer.id = 'content';

document.body.appendChild(mainContainer);
const body = document.createElement('div');

mainContainer.appendChild(navbar());
mainContainer.appendChild(body);

body.appendChild(homePage());

const registerEvents = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  menu.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(menuPage());
  });

  home.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(homePage());
  });

  contact.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(contactPage());
  });
};

registerEvents();