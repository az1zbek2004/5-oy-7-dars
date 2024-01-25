function getElement() {
        let data = [];
    
        if (localStorage.getItem("users")) {
            data = JSON.parse(localStorage.getItem("users"));
        };
    
        return data;
    };

    
function validateLogin(userName, password){
    if (!userName.value) {
        alert("Enter userName...");
        userName.focus();
        return false;
    };

            
    if (!password.value) {
        alert("Enter password...");
        password.focus();
        return false;
    };

    return true;
};

    function validate(data) {
        const regEX = /^[0-9]{9}$/;
            if (!data.firstName.value) {
                alert("Enter name...");
                data.firstName.focus();
                return false;
            };
        
            if (!data.userName.value) {
                alert("Enter userName...");
                data.userName.focus();
                return false;
            };
        
            if (!data.phoneNumber.value) {
                alert("Enter phoneNumber...");
                data.phoneNumber.focus();
                return false;
            };
        
            if (!regEX.test(data.phoneNumber.value)) {
                alert("Enter phoneNumbe equal 9 symbol...");
                data.phoneNumber.focus();
                return false;
            };
        
            if (!data.password.value) {
                alert("Enter password...");
                data.password.focus();
                return false;
            };
        
            if (!data.repassword.value) {
                alert("Enter repassword...");
                data.repassword.focus();
                return false;
            };
        
            if (data.password.value != data.repassword.value) {
                alert("password do not compare to repassword...");
                data.repassword.focus();
                return false;
            };

            if (data.userName.value) {   
              let user = getElement();

              let userSome = user.some(el => {
                    return el.username == data.userName.value;
                });

                if (userSome) {
                    alert("Bunday foydalnavuchi mavjud"); 
                    userName.focus();
                    return false;
                };
            };
        
        
            return true;
        };

function thisToSayt(){
    let domain = window.location.href.substring(0, window.location.href.search("pages"));
    window.location.assign(`${domain}pages/login.html`);
};

function otherToSayt(){
    let domain = window.location.href.substring(0, window.location.href.search("pages"));
    window.location.assign(`${domain}pages/about.html`);
};
function togatherToSayt(){
    let domain = window.location.href.substring(0, window.location.href.search("pages"));
    window.location.assign(`${domain}pages/login.html`);
};
function etherToSayt(){
    let domain = window.location.href.substring(0, window.location.href.search("pages"));
    window.location.assign(`${domain}index.html`);
};

export {validate, getElement, thisToSayt, validateLogin, otherToSayt, togatherToSayt, etherToSayt}; 
    