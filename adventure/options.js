import { loadRenderUsername } from '../utils/user-api.js';
import optionsMap from '../metadata/sandwich-components.js';

//dom
const form = document.querySelector('form');

//global variables
const searchParams = new URLSearchParams(window.location.search);
const optionId = searchParams.get('id');
const currentOption = optionsMap[optionId];

//do things
loadRenderUsername('header');

renderOption(currentOption);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    //submit choice results to local storage
    const formData = new FormData(form);
    console.log(formData.get('choice'));


});

//functions
function renderOption(option) {
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


