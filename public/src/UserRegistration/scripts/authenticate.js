// Acessing Dom elements for login
const email = document.querySelector('.email');
const password = document.querySelector('#password');
const sendBtn = document.querySelector('.send');
const loginBtn = document.querySelector('.login');
const signup_link = document.querySelector('.signup_link');
const error_para = document.querySelector('.error');
const myEmailShow = document.querySelector('.myEmail');
console.log(sendBtn);



const ajax = new XMLHttpRequest();
const signUp_url = 'http://localhost:9000/hci.api/users/registerUser';
const login_url = 'http://localhost:9000/hci.api/user/login';
var counter = 0;
var user = [];


sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    ajax.onload = function () {
        if (this.status == 200) {
            let user_returned = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            user.push(user_returned);
            if (user_returned.error_code == -1) {
                error_para.innerHTML = user_returned.msg;
                email.style.border = '3px solid red';
            } else {
                email.classList.toggle('d-none');
                password.classList.toggle('d-none');
                sendBtn.classList.toggle('d-none')
                loginBtn.classList.toggle('d-none');
                error_para.classList.toggle('d-none');
                signup_link.classList.toggle('d-none');
                myEmailShow.innerHTML = user_returned.email;
            }
        } else {
            alert("Login unsuccessful. Server Error");
        }
    }
    ajax.open('GET', login_url + '/' + email.value, true);
    ajax.send();
});



loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (password.value == user[0].password) {
        localStorage.setItem("email", JSON.stringify(user[0].email));
        localStorage.setItem("firstname", JSON.stringify(user[0].firstname));
        localStorage.setItem("lastname", JSON.stringify(user[0].lastname));
        window.location = 'index.html';
    } else {
        error_para.innerHTML = 'Password not valid'
        error_para.classList.add('d-inline');
        password.style.border = '3px solid red';
    }
});