const productname = document.querySelector('.productname');
const productprice = document.querySelector('.productprice');
const productmodel = document.querySelector('.productmodel');
const productssn = document.querySelector('.productssn');
const productwaranty = document.querySelector('.productwaranty');
const productweight = document.querySelector('.productweight');
const productcompanyMark = document.querySelector('.productcompanyMark');
const productduration = document.querySelector('.productduration');
const productquantity = document.querySelector('.productquantity');
const productImg = document.querySelector('.productImg');
const purchaseCarBtn = document.querySelector('.purchaseCar');

const similarCars = document.querySelector('.similarProducts');

const ajax = new XMLHttpRequest();
const url = 'http://localhost:9000/hci.api/matchedProducts';


let S_cars;
$(document).ready(() => {
    productname.textContent = JSON.parse(localStorage.getItem('carName'));
    productprice.textContent = `$` + JSON.parse(localStorage.getItem('price'));
    productweight.textContent = JSON.parse(localStorage.getItem('weight'));
    productwaranty.textContent = JSON.parse(localStorage.getItem('waranty'));
    productmodel.textContent = JSON.parse(localStorage.getItem('model'));
    productcompanyMark.textContent = JSON.parse(localStorage.getItem('companyMark'));
    productduration.textContent = JSON.parse(localStorage.getItem('duration'));
    productssn.textContent = JSON.parse(localStorage.getItem('ssn'));
    productquantity.textContent = JSON.parse(localStorage.getItem('quantity'));


    productImg.src = `${JSON.parse(localStorage.getItem('url'))}`;
    productImg.classList.toggle('img-fluid');
    productImg.alt = 'Selected Car';

    let type = {
        'type': JSON.parse(localStorage.getItem('companyMark'))
    }

    $.post(url, type, (products, error) => {
        S_cars = products;

        if (error === "success") {

            // Looping through the list of cars returned by the API
            products.forEach((product) => {

                let div = document.createElement('div');
                div.classList.add("col-xs-12");
                div.classList.add("col-sm-6");
                div.classList.add("col-md-4");
                div.classList.add("col-lg-3");

                let img = document.createElement('img');
                img.src = `${product.url}`;
                img.classList.add("img-fluid");
                img.classList.add("openImg");
                img.classList.add("open");

                // img.classList.add("img-thumbnail");
                // img.classList.add("border-danger");
                div.appendChild(img);
                similarCars.append(div);

            });

        } else {
            alert('Error loading Similar products');
        }

        console.log(S_cars);

        const ShowImgDetail = document.querySelectorAll('.openImg');

        ShowImgDetail.forEach((img, i) => {

            img.addEventListener('click', (event) => {
                event.preventDefault();

                productImg.src = `${S_cars[i].url}`;
                productname.textContent = S_cars[i].name;
                productprice.textContent = S_cars[i].price;
                productweight.textContent = S_cars[i].weight;
                productwaranty.textContent = S_cars[i].waranty;
                productmodel.textContent = S_cars[i].model;
                productcompanyMark.textContent = S_cars[i].companyMark;
                productduration.textContent = S_cars[i].duration;
                productssn.textContent = S_cars[i].ssn;
                productquantity.textContent = S_cars[i].quantity;
                window.location = `productDetails.html#navbarSection`;

            });
        });


        purchaseCarBtn.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.setItem('model', JSON.stringify(productmodel.textContent));
            window.location = `purchase.html`;
        });


    })

});