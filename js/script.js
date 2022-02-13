document.querySelector('#name').addEventListener('focusout', yourName);
document.querySelector('#email').addEventListener('focusout', yourEmail);
document.querySelector('#passwordInput').addEventListener('focusout', yourPassword);
document.querySelector('#btn').addEventListener('click', function() {
    yourName();
    yourEmail();
    yourPassword();
})

function yourName() {
    let message, text;
    let errElement = document.getElementById('name');
    message = document.getElementById('errorID-1');

    text = document.getElementById('name').value;
// check values
    try {
        if(text == "") {
            errElement.classList.remove('valid');
            errElement.classList.add('error');
            throw "Bo'sh joyni to'ldiring.";
        }
        if(text.length < 3 || text.length > 20) {
            errElement.classList.remove('valid');
            errElement.classList.add('error');
            throw "3 belgidan 20 belgigacha kiriting.";
        }
        if(text.length >= 3 && text.length <= 15) {
            errElement.classList.remove('error');
            errElement.classList.add('valid');
            message.innerHTML = "";
        }
    } catch(e) {
        message.innerHTML = "Iltimos! " + e;
    }
}

function yourEmail() {
    let message, email;
    let errElement = document.getElementById('email');
    message = document.getElementById('errorID-2');
    email = document.getElementById('email').value;

        if(email == "") {
            errElement.classList.remove('valid');
            errElement.classList.add('error');
            message.innerHTML = "Iltimos! Elektron pochtangizni kiriting.";
        }
        if(email.length > 0) {
            errElement.classList.remove('error');
            errElement.classList.add('valid');
            message.innerHTML = "";
        }
}

function yourPassword() {
    let message, password;
    let errElement = document.getElementById('passwordInput');
    message = document.getElementById('errorID-3');
    password = document.getElementById('passwordInput').value;

    try {
        if(password == "") {
            errElement.classList.remove('valid');
            errElement.classList.add('error');
            throw "Passwordingizni kiriting";
        }
        if(password.length < 8 || password.length > 16) {
            errElement.classList.remove('valid');
            errElement.classList.add('error');
            throw "Passwordga 8 belgidan 16 belgigacha kiriting";
        }
        if(password.length >= 8 && password.length <= 16) {
            errElement.classList.remove('error');
            errElement.classList.add('valid');
            message.innerHTML = "";
        }
    } catch(e) {
        message.innerHTML = "Iltimos! " + e;
    }
}



// show password function

let password, openImg, closeImg;
password = document.getElementById("passwordInput");
openImg = document.getElementById("eyeOpenImg");
closeImg = document.getElementById("eyeCloseImg");

openImg.addEventListener('click', showPassword);
closeImg.addEventListener('click', hidePassword);

function showPassword() {
    openImg.style.display = "none";
    closeImg.style.display = "block";
    password.type = "text";
    password.style.marginTop = "20px";
}

function hidePassword() {
    openImg.style.display = "block";
    closeImg.style.display = "none";
    password.type = "password";
}