export function loadRenderUsername(parentTag) {
    const parentElement = document.querySelector(parentTag);

    const currentUser = getCurrentUser();

    const username = currentUser.id;
    const userMunch = currentUser.munchType;
    const userInfo = `${username}, ${userMunch}`;

    const pTag = document.createElement('p');
    pTag.textContent = userInfo;

    parentElement.appendChild(pTag);
}

export function getCurrentUser() {
    const userMapData = localStorage.getItem('USERS');
    const userMap = JSON.parse(userMapData);
    const userId = localStorage.getItem('CURRENT');
    const currentUser = userMap[userId];
    return currentUser;
}

export function setObjectData(object) {
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