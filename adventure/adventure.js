




//dom



function loadRenderUsername() {
    const usernameHeader = document.getElementById('username-header');

    //get user id from url search param
    // const userkey = 

    //get user object from local storage
    const userObject = getUserObject(userkey);

    const username = userObject.name;
    const userMunch = userObject.munchType;

    const userInfo = `${username}, the ${userMunch}`;
    usernameHeader.textContent = username;



}

function getUserObject(key) {
    const userData = localStorage.getItem(key);
    const userObject = JSON.parse(userData);
    return userObject;
}