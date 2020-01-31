import { loadRenderUsername, getCurrentUser, setObjectData } from '../utils/user-api.js';
import optionsMap from '../metadata/sandwich-components.js';

//dom
const form = document.querySelector('form');
const resetButton = document.getElementById('reset-button');
const resultSection = document.querySelector('section');

//global variables
const searchParams = new URLSearchParams(window.location.search);
const optionId = searchParams.get('id');
const currentOption = optionsMap[optionId];

//do things
loadRenderUsername('header');

renderOption(currentOption);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const choiceId = formData.get('choice');
    const choice = currentOption.choices[choiceId];
    
    const currentUser = getCurrentUser();

    increaseScore(choice, currentUser, 'veg');
    increaseScore(choice, currentUser, 'carn');
    increaseScore(choice, currentUser, 'omni');

    setObjectData(currentUser);

    renderLocalResults(choice, currentUser);

    form.style.display = 'none';

    getSetCompleted();

});

resetButton.addEventListener('click', () => {
    window.location = './';
});


function getSetCompleted() {
    let array;
    const completeData = localStorage.getItem('DONE');
    if (!completeData) {
        array = [optionId];
    }
    else {
        const oldArray = JSON.parse(completeData);
        array = [...oldArray, optionId];
    }
    const dataToSet = JSON.stringify(array);
    localStorage.setItem('DONE', dataToSet);
}

//functions


function renderLocalResults(choice, currentUser) {
    const pTag = document.createElement('p');
    const resultText = getResultText();
    pTag.textContent = `You have chosen ${choice.name}, ${resultText} choice for ${currentUser.munchType}.`;
    resultSection.appendChild(pTag);
    resultSection.style.display = 'block';
    function getResultText() {
        let text;
        if (currentUser.munchId !== choice.result) {
            text = 'an interesting';
        }
        else {
            text = 'an excellent';
        }
        return text;
    }
}

function increaseScore(choice, currentUser, scoreType) {
    if (choice.result === scoreType) {
        currentUser[scoreType]++;
    } 
}

function renderOption(option) {
    form.style.display = 'flex';
    renderHeader(option);
    propagateForm(option);
}

function renderHeader(option) {
    const headerEl = document.querySelector('h2');
    headerEl.textContent = option.name;
}

function propagateForm(option) {
    
    const choices = Object.values(option.choices);

    renderRadioButtons();

    renderSubmitButton();


    function renderRadioButtons() {
        choices.forEach(choice => {
            const label = document.createElement('label');
            renderTitleSpan(label, choice);
            makeRadioButton(label, choice);
            renderDialogSpan(label, choice);
            form.appendChild(label);
        });
    }
    function renderSubmitButton() {
        const submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Im Ready to Make My Choice';
        form.appendChild(submit);
    }
    function makeRadioButton(label, choice) {
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'choice';
        radioButton.value = choice.id;
        radioButton.required = 'required';
        label.appendChild(radioButton);
    }
    function renderTitleSpan(label, choice) {
        const span = document.createElement('span');
        span.textContent = `${choice.name}: `;
        span.className = 'title-span';
        label.appendChild(span);
    }
    function renderDialogSpan(label, choice) {
        const dSpan = document.createElement('span');
        dSpan.className = 'dialog-span';
        dSpan.textContent = choice.dialog;
        label.appendChild(dSpan);
    }
}


