import home from './home';
import nav from './nav';
import menu from './menu';



const body = document.getElementsByTagName('body')[0];


const contentDiv = document.getElementById('content');



contentDiv.append(nav());

contentDiv.append(home());
contentDiv.append(menu());
