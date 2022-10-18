// LOGIN Show Password PANEL

function showpass() {
    var userpass = document.getElementById("userloginpass");

    var eye = document.getElementById("eye");
    var eyehide = document.getElementById("eyehide");

    if (userpass.type === "password") {
        userpass.type = "text";
        eyehide.style.display = "none";
        eye.style.display = "block";
    } else {
        userpass.type = "password";
        eye.style.display = "none";
        eyehide.style.display = "block";
    }
}


//Login Form Validation

var mail = "kiran@gmail.com";
var password = 2023;

function userMailValidate() {

    var usermail = document.getElementById("usermaillogin").value;
    var error1 = document.getElementById("error1");


    if (usermail.trim() != mail) {
        error1.innerHTML = "Enter Valid Mail";
        return false;
    }
    if (usermail.trim() == mail) {
        error1.innerHTML = "";
        return true;
    }

}

function userPasswordValidate() {
    var userpassword = document.getElementById("userloginpass").value;
    var error2 = document.getElementById("error2");

    if (userpassword.trim() != password) {
        error2.innerHTML = "Enter Valid Password";
        return false;
    }

    if (userpassword.trim() == password) {
        error2.innerHTML = "";
        return true;
    }
}

function login() {
    var successful = document.getElementById("succefulLogin");

    if (userMailValidate() && userPasswordValidate()) {
        successful.innerHTML = "Login Successful";
        setTimeout(() => {
            alert("Redirecting To Dashboard Page");
        }, 2000);
        setTimeout(() => {
            window.open("admin.html", "_self");
        }, 5000)
    } else {
        alert("Enter Valid Data");
        return false;
    }
}


// REGISTRATION VALIDATION
var nameError = document.getElementById("nameError");
var mailError = document.getElementById("mailError");
var phoneError = document.getElementById("phoneError");

var submitValidate = false;

function userNameValidate() {
    var user = document.getElementById("usernames").value;
    
    var usernameValidate = "^[A-Za-z]+$";

    if (!user.match(usernameValidate)) {
        nameError.innerHTML = "UserName Must be Only Aplhabets";
        user.style.border = "2px solid green";
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function mailValidate() {
    var mail = document.getElementById("mailid");
    var mailValidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (!mail.value.match(mailValidate)) {
        mailError.innerHTML = "Enter Valid Mail Address";
        return false;
    }
    mailError.innerHTML = "";
    return true;
}

function phoneValidate() {
    var mobile = document.getElementById("mobilenumber");
    var phoneValidate = "^[6-9]{1}[0-9]{9}$";

    if (!mobile.value.match(phoneValidate)) {
        phoneError.innerHTML = "Enter Valid Phone Number";
        return false;
    }
    phoneError.innerHTML = "";
    return true;
}

function passwordValidate() {
    var password = document.getElementById("password");
    var confirmpassword = document.getElementById("confirmpassword");
    if (password.value == confirmpassword.value) {
        document.getElementById("passwordError").innerHTML = "";
        return true;
    } else {
        document.getElementById("passwordError").innerHTML = "Password Not Matched";
        return false;
    }
}



function validated() {
    var successRegistered = document.getElementById("registeredSuccessfulModal");
   

    if (userNameValidate() && mailValidate() && phoneValidate() && passwordValidate()) {

        successRegistered.showModal();

        return false;
    } else {
        alert("Enter Valid Data");
        return false;
    }
}


// Product Description Page

const swipeImage = (e) => {
    var datas = document.querySelector(".productImageGrid").children;

    document.querySelector(".mainimg").src = e.children[0].src;

    for (var data of datas) {
        data.classList.remove("activeImageHighlight");
        data.classList.remove("imageactive");
    }

    e.classList.add("imageactive");
    e.classList.add("activeImageHighlight");

}