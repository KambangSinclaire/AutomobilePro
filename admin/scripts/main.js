const SN = document.querySelector('#Sn');
const Name = document.querySelector('#ProductName');
const Quantity = document.querySelector('#quantity');
const OperationView = document.querySelector('#operationView');


const ajax = new XMLHttpRequest();
const url = "http://localhost:9000/hci.api/products";


let products = [];

ajax.open('GET', url, true);
ajax.onload = function () {
    if (this.status === 200) {
        // Getting all the products and passing them to an array
        products = (JSON.parse(this.responseText));
        // products2.push(JSON.parse(this.responseText));
        let i = 0;
        console.log(products);

        // Looping through the Nodelist of paragraphs to print the car names
        products.forEach((p, i) => {

            let productNumber = document.createElement('li');
            let ProductName = document.createElement('li');
            let quantityList = document.createElement('li');

            let productModel = document.createTextNode(`${products[i].model}`);
            let name = document.createTextNode(`${products[i].name}`);
            let quantity = document.createTextNode(`${products[i].quantity}`);

            let edit = document.createElement('a');
            let del = document.createElement('a');
            let add = document.createElement('a');

            edit.classList.add("btn");
            edit.classList.add("bg-primary");
            del.classList.add("btn");
            del.classList.add("bg-danger");
            add.classList.add("btn");
            add.classList.add("bg-success");

            edit.setAttribute('type', 'button');
            del.setAttribute('type', 'button');
            add.setAttribute('type', 'button');

            let addIcon = document.createElement('i');
            let editIcon = document.createElement('i');
            let delIcon = document.createElement('i');

            addIcon.classList.add("fas");
            addIcon.classList.add("fa-plus");
            // addIcon.classList.add("iclass");
            add.appendChild(addIcon);

            editIcon.classList.add("fas");
            editIcon.classList.add("fa-edit");
            edit.appendChild(editIcon);

            delIcon.classList.add("fas");
            delIcon.classList.add("fa-trash-alt");
            del.appendChild(delIcon);

            let showOperations = document.createElement('ul');
            showOperations.classList.add("Operations");
            showOperations.classList.add("btn-group-lg");

            showOperations.appendChild(edit);
            showOperations.appendChild(del);
            showOperations.appendChild(add);
            OperationView.appendChild(showOperations);






            productNumber.classList.add("list-group-item");
            productNumber.appendChild(productModel);

            ProductName.classList.add("list-group-item");
            ProductName.appendChild(name);

            quantityList.classList.add("list-group-item");
            quantityList.appendChild(quantity);

            SN.appendChild(productNumber);
            Name.appendChild(ProductName);
            Quantity.appendChild(quantityList);
        });
    }
}
ajax.send();