$(document).ready(() => {


    // Accessing Dom Elements for signup
    const signUpEmail = document.querySelector('.signUpEmail');
    const firstName = document.querySelector('.firstName');
    const lastName = document.querySelector('.lastName');
    const Address = document.querySelector('.address');
    const Phone = document.querySelector('.phone');
    const signUpPassword = document.querySelector('.signUpPassword');
    const cpassword = document.querySelector('.cpassword');
    const signUpBtn = document.querySelector('.signUpBtn');
    const alertSuccess = document.querySelector('.alert-success');

    const ajax = new XMLHttpRequest();
    const signUp_url = 'http://localhost:9000/hci.api/users/registerUser';

    // Post User Details
    signUpBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let firstname = firstName.value;
        let lastname = lastName.value;
        let email = signUpEmail.value;
        let address = Address.value;
        let phone = Phone.value;
        let password = signUpPassword.value;

        console.log(firstName);
        console.log(firstname);


        // Create new user object
        const NewUser = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: signUpEmail.value,
            address: Address.value,
            phone: Phone.value,
            password: signUpPassword.value
        }

        if (firstname == '') {
            firstName.style.border = '3px solid red';
            return;
        } else {
            if (lastname == '') {
                lastName.style.border = '3px solid red';
                return;
            } else {
                if (email == '' || !email) {
                    signUpEmail.style.border = '3px solid red';
                    return;
                } else {
                    if (address == '') {
                        Address.style.border = '3px solid red';
                        return;
                    } else {
                        if (phone == '') {
                            Phone.style.border = '3px solid red';
                            return;
                        } else {
                            if (password == '') {
                                signUpPassword.style.border = '3px solid red';
                                return;
                            } else {
                                if (cpassword.value == '') {
                                    cpassword.style.border = '3px solid red';
                                    return;
                                } else {
                                    if (cpassword.value != password) {
                                        alert('Your Passwords don\'t match')
                                        return;
                                    } else {

                                        if (password.length < 7) {
                                            alert('Password Should be more than 7 characters')
                                            return;
                                        } else {

                                            $.post(signUp_url, NewUser, (error, user) => {
                                                alertSuccess.classList.toggle('d-none');
                                                window.location = `login.html`;

                                            });

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }

    });






});
