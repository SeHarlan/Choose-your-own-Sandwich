
import { setObjectData } from './utils/user-api.js'
//dom
const form = document.querySelector('form');
// const usernameHeader = document.getElementById('username-header');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const userName = formData.get('username');
    const munchType = formData.get('type-of-munch');
    const munchId = getMunchId(munchType);

    const newUser = {
        id: userName,
        munchType: munchType,
        munchId: munchId,
        carn: 0,
        veg: 0,
        omni: 0
    };

    setObjectData(newUser);

    window.location = './adventure';

});




function getMunchId(munchType) {
    let munchId;
    if (munchType === 'a Vegitarian') munchId = 'veg';
    if (munchType === 'a Carnivore') munchId = 'carn';
    if (munchType === 'an Omnivore') munchId = 'omni';
    return munchId;
}

