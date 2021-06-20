import home from './home';
import nav from './nav';


const body = document.getElementsByTagName('body')[0];


const contentDiv = document.getElementById('content');



contentDiv.append(nav());
contentDiv.append(home());
