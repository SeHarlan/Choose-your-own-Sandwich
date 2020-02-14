import { loadRenderUsername, getCurrentUser } from "../utils/user-api.js";


const sectionField = document.getElementById('final-results');
const resetButton = document.getElementById('reset');

const currentUser = getCurrentUser();


loadRenderUsername('header');

renderSubHeading();

renderPoints();

renderResultsMessage();

resetButton.addEventListener('click', () => {
    window.location = '../';
    localStorage.removeItem('DONE');
});


function renderResultsMessage() {
    const resultMessage = document.createElement('h2');
    const message = `Turns out you were a ${getResult()}`;
    resultMessage.textContent = message;
    sectionField.appendChild(resultMessage);
    function getResult() {
        let text = '';
        const tags = [['veg', 'Vegetarian'], ['carn', 'Carnivore'], ['omni', 'Omnivore']];
        const munchs = [currentUser.veg, currentUser.carn, currentUser.omni];
        let topMunchscore = 0;
        let topMunchId;
        munchs.forEach((munch, index) => {
            if (munch > topMunchscore) {
                topMunchId = tags[index][0];
                topMunchscore = munch;
            }
        });
        if (topMunchId === currentUser.munchId) {
            text += 'pretty great ';
        }
        else {
            text += 'not so wonderful ';
        }
        tags.forEach(item => {
            if (item[0] === currentUser.munchId) {
                text += item[1];
            }
        });
        return text;
    }
}

function renderPoints() {
    const tags = [['veg', 'Vegetarian'], ['carn', 'Carnivorous'], ['omni', 'Omnivorous']];
    tags.forEach(item => {
        const tag = document.createElement('p');
        tag.textContent = `${item[1]} Points: ${currentUser[item[0]]}`;
        sectionField.appendChild(tag);
    });
}

function renderSubHeading() {
    loadRenderUsername('section');
    const ptag = document.createElement('p');
    ptag.textContent = 'Your sandwich selections have earned you...';
    sectionField.appendChild(ptag);
}



