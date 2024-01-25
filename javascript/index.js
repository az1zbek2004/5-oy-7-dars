import { validate, getElement, thisToSayt } from "./function.js";

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const userName = document.querySelector("#userName");
const year = document.querySelector("#year");
const phoneNumber = document.querySelector("#phoneNumber");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");
const button = document.querySelector("#button");
const form = document.querySelector("#form");

button && button.addEventListener("click", function(e) {
    e.preventDefault();

    if (validate({firstName, lastName, userName, year, phoneNumber, password, repassword})) {
            let user = {
                name:firstName.value,
                surname:lastName.value,
                username:userName.value,
                year:year.value,
                phonenumber:phoneNumber.value,
                password:password.value,
            };

           let data = getElement();
           data.push(user);
           localStorage.setItem("users", JSON.stringify(data));
           form.reset();

           thisToSayt();

           
    };
});