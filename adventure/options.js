import { loadRenderUsername } from '../utils/user-api.js';
import optionsMap from '../metadata/sandwich-components.js';


//dom
const mainBody = document.querySelector('main');


//do things
loadRenderUsername('header');


const searchParams = new URLSearchParams(window.location.search);
const optionId = searchParams.get('id');

const currentOption = optionsMap[optionId];
console.log(currentOption);


const header = document.createElement('h2');
header.textContent = currentOption.id;
mainBody.appendChild(header);



