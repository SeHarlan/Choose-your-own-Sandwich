import { loadRenderUsername, getCurrentUser } from "../utils/user-api.js";


const sectionField = document.getElementById('final-results');


const currentUser = getCurrentUser();
console.log(currentUser);


loadRenderUsername('header');

loadRenderUsername('section');

const ptag = document.createElement('p');
ptag.textContent = 'Your sandwich selection has earned you...';
sectionField.appendChild(ptag);

const vegTag = document.createElement('p');
vegTag.textContent = `Vegitarian Points: ${currentUser.veg}`;
sectionField.appendChild(vegTag);

const carnTag = document.createElement('p');
carnTag.textContent = `Carnivorous Points: ${currentUser.carn}`;
sectionField.appendChild(carnTag);

const omniTag = document.createElement('p');
omniTag.textContent = `Omnivorous Points: ${currentUser.omni}`;
sectionField.appendChild(omniTag);

// const resultMessage = document.createElement('h2');
// const message = `Turns out you were a ${getResult()}`;
// resultMessage.textContent = message;
// sectionField.appendChild(resultMessage);

// function getResult() {
//     let text;

// }


