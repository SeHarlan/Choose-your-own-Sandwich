

//dom
const form = document.querySelector('form');
// const usernameHeader = document.getElementById('username-header');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const userName = formData.get('username');
    const munchType = formData.get('type-of-munch');

    const newUser = {
        id: userName,
        munchType: munchType,
        hp: 50
    };

    setObjectData(newUser);

    //link adventure

});




function setObjectData(object) {
    if (!object.id) return;
    const currentUser = object.id;
    localStorage.setItem('CURRENT', currentUser);

    let userMap;
    const mapData = localStorage.getItem('USERS');
    const oldMap = JSON.parse(mapData);
    if (!mapData) {
        userMap = { [currentUser]: object };
    } else {
        userMap = { ...oldMap, [currentUser]: object };
    }

    const stringyData = JSON.stringify(userMap);
    localStorage.setItem('USERS', stringyData);
}