import { getElement, togatherToSayt, etherToSayt } from "../javascript/function.js";

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const userName = document.querySelector("#userName");
const year = document.querySelector("#year");
const phoneNumber = document.querySelector("#phoneNumber");
const password = document.querySelector("#password");
const button = document.querySelector("#button");

document.addEventListener("DOMContentLoaded", function() {

    let isName = JSON.parse(localStorage.getItem("user"));
    let data = getElement();
    let user = data.find(el => {
        return el.username == isName;
    });

    if (user) {
        firstName.innerHTML = user.name;
        lastName.innerHTML = user.surname;
        userName.innerHTML = user.username;
        year.innerHTML = user.year;
        phoneNumber.innerHTML = user.phonenumber;
        password.innerHTML = user.password;
    } else {
        togatherToSayt();
    };
});

button && button.addEventListener("click", function(e) {
    e.preventDefault();

    let isName = JSON.parse(localStorage.getItem("user"));
    let data = getElement();
    let user = data.find(el => {
        return el.username == isName;
    });
    
    let users = data.filter(el => {
        return el.username != isName;
    });
    
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("user");

    etherToSayt();
});