export function loadRenderUsername(parentTag) {
    const parentElement = document.querySelector(parentTag);

    const currentUser = getCurrentUser();

    const username = currentUser.id;
    const userMunch = currentUser.munchType;
    const userInfo = `${username}, the ${userMunch}`;

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