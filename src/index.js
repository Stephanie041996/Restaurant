import homePage from './home';
import navbar from './nav';
import menuPage from './menu';



// const body = document.getElementsByTagName('body')[0];


// const contentDiv = document.getElementById('content');

// const registerEvents = () => {
//     const homes = document.getElementById('home');
//     const menus = document.getElementById('menu');

// contentDiv.append(navbar());

// homes.addEventListener('click', () => {
// contentDiv.append(home());
// });


// menus.addEventListener('click', () => {
   
//     contentDiv.appendChild(menu());
//   });
// };

// registerEvents();

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
 

  menu.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(menuPage());
  });

  home.addEventListener('click', () => {
    body.innerHTML = '';
    body.appendChild(homePage());
  });


};

registerEvents();