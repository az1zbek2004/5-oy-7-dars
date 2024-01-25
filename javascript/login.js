import { getElement, validateLogin, otherToSayt } from "./function.js";

const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const button = document.querySelector("#button");
const form = document.querySelector("#form");

button && button.addEventListener("click", function(e){
    e.preventDefault();

   if (validateLogin(userName, password)) {
     let data = getElement();
     
     let user = data.find(item => {
        return item.username == userName.value
     });


     if (user && user.password == password.value) {
        localStorage.setItem("user", JSON.stringify(user.username));
        otherToSayt();
     } else {
        alert("Login yoki parolda xatolik bor");
     }
   };

});