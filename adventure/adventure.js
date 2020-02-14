
import { loadRenderUsername } from '../utils/user-api.js';

const breads = document.getElementById('breads');
const greens = document.getElementById('greens');
const meats = document.getElementById('meats');


loadRenderUsername('header');

const completedArray = JSON.parse(localStorage.getItem('DONE'));

if (completedArray) {
    if (completedArray.length >= 3) {
        window.location = '../results';
    } else {
        completedArray.forEach(item => {
            if (item === breads.id) {
                breads.className = 'completed';
            }
            if (item === greens.id) {
                greens.className = 'completed';
            }
            if (item === meats.id) {
                meats.className = 'completed';
            }
        });
    }
}




