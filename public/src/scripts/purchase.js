const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const address = document.querySelector('#address');
const phone = document.querySelector('#phone');
const userFieldset = document.querySelector('.userFieldset');

const Name = document.querySelector('#name');
const price = document.querySelector('#price');
const weight = document.querySelector('#weight');
const model = document.querySelector('#model');
const ssn = document.querySelector('#ssn');
const companyMark = document.querySelector('#companyMark');
const duration = document.querySelector('#duration');
const waranty = document.querySelector('#waranty');

const MoreFields = document.querySelector('.MoreFields');

const user_url = 'http://localhost:9000/hci.api/user/details';
const car_url = 'http://localhost:9000/hci.api/product/details';


$(document).ready(() => {

    moreFields();
    // $(".MoreFields").popover();
    fillProductDetails();
    // MoreFields.popover();
    const authEmail = JSON.parse(localStorage.getItem('email'));
    if (authEmail) {
        const getUser = {
            "email": authEmail
        }
        $.post(user_url, getUser, (user, error) => {
            console.log(user);
            console.log(error);
            if (error === 'success') {
                firstName.value = user.firstname;
                lastName.value = user.lastname;
                address.value = user.address;
                email.value = user.email;
                phone.value = user.phone;
            } else {
                alert('You are not authenticated');
            }
        });
    }
});

function fillProductDetails() {
    const car = {
        'model': JSON.parse(localStorage.getItem('model'))
    }
    $(document).ready(() => {
        $.post(car_url, car, (car, error) => {
            if (error === "success") {
                Name.value = car.name;
                waranty.value = car.waranty;
                ssn.value = car.ssn;
                model.value = car.model;
                duration.value = car.duration;
                weight.value = car.weight;
                companyMark.value = car.companyMark;
                price.value = `$` + car.price;
            } else {
                alert('Error getting car details from the server')
            }
        });
    });
}

function moreFields() {
    MoreFields.addEventListener('click', (event) => {
        event.preventDefault();
        let input = document.createElement('input');
        let br = document.createElement('br');
        input.type = 'text';
        input.value = 'New Field';
        input.classList.add('form-control');
        input.classList.add('pl-5');

        input.appendChild(br);
        input.appendChild(br);
        userFieldset.appendChild(input);
    });
}