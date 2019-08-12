$(document).ready(() => {
    const userEmail = document.querySelector('.userEmail');
    const FirstName = document.querySelector('.firstname');
    const LastName = document.querySelector('.lastname');
    const loginBtn = document.querySelector('.logInBtn');
    const signUpBtn = document.querySelector('.signUp');
    const signOut = document.querySelector('.signOut');
    const profile = document.querySelector('.profile');
    const navbarSection = document.querySelector('.navbar');

    let User_Email = JSON.parse(localStorage.getItem('email'));
    let firstname = JSON.parse(localStorage.getItem('firstname'));
    let lastname = JSON.parse(localStorage.getItem('lastname'));


    if (User_Email != null) {
        FirstName.innerHTML = firstname;
        LastName.innerHTML = lastname;
        userEmail.innerHTML = User_Email;
        loginBtn.classList.add('d-none');
        signUpBtn.classList.add('d-none');
        profile.classList.add('d-inline');
        navbarSection.classList.toggle('mt-3');
    } else {
        profile.classList.add('d-none');
        navbarSection.classList.toggle('mt-3');
        signUpBtn.classList.add('d-none');
    }


    signOut.addEventListener('click', () => {
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        localStorage.removeItem('email');
        profile.classList.toggle('d-none');

    });
});