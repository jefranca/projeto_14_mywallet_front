function getFromLocalStorage(){
    const login = localStorage.getItem("login");
    return JSON.parse(login);
}

function saveToLocalStorage(login){
    localStorage.setItem("login", JSON.stringify(login));
}

export {
    getFromLocalStorage,
    saveToLocalStorage
}