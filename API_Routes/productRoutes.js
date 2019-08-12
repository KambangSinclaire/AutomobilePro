const express = require("express");
const model = require("../Models/Models");
const ProductModel = require('../Models/Models');
const ProductRouter = express.Router();


// ProductRouter.put('/product/:id', (req, res) => {

//     let _id = req.params.id;
//     const updateProduct = new model.ProductModel({
//         name: req.body.name,
//         price: req.body.price,
//         weight: req.body.weight,
//         model: req.body.model,
//         waranty: req.body.waranty,
//         duration: req.body.duration,
//         companyMark: req.body.companyMark,
//         isbn: req.body.isbn,
//         quantity: req.body.quantity,
//         url: req.body.url
//     });
//     model.ProductModel.updateOne({
//         _id: _id
//     }, updateProduct, (error, product) => {
//         if (error) {
//             res.json(error);
//         } else {
//             res.json(product);
//         }
//     });
// });



// Sequelize usage starts here
ProductRouter.post('/product', (req, res) => {
    let newProduct = {
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
        model: req.body.model,
        waranty: req.body.waranty,
        duration: req.body.duration,
        companyMark: req.body.companyMark,
        ssn: req.body.ssn,
        quantity: req.body.quantity,
        url: req.body.url
    };
    let { name, price, weight, model, url, ssn, waranty, companyMark, duration, quantity } = newProduct;

    ProductModel.product.create({
        name,
        price,
        weight,
        model,
        url,
        waranty,
        ssn,
        quantity,
        companyMark,
        duration
    })
        .then(product => res.json(product))
        .catch(error => console.log("error registering product" + error));

});


ProductRouter.get('/products', (req, res) => {
    ProductModel.product.findAll()
        .then(products => { res.json(products) })
        .catch(error => console.log(error)
        );
});

ProductRouter.get('product/:id', (req, res) => {
    ProductModel.product.findOne({ id: req.params.id, where: { id: req.params.id } })
        .then(product => res.json(product))
        .catch(error => console.log(error));
});


ProductRouter.post('/product/details', (req, res) => {
    ProductModel.product.findOne({ model: req.body.model, where: { model: req.body.model } })
        .then(product => res.json(product))
        .catch(error => console.log(error));
});


ProductRouter.post('/matchedProducts', (req, res) => {
    const type = req.body.type;
    const matches = [];
    ProductModel.product.findAll()
        .then(products => {
            for (let i = 0; i < products.length; i++) {
                if (products[i].companyMark == type) {
                    matches.push(products[i]);
                }
            }
            res.json(matches);
        })
        .catch(error => console.log(error));
});



ProductRouter.put('/product/:id', (req, res) => {

    let newProduct = {
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
        model: req.body.model,
        waranty: req.body.waranty,
        duration: req.body.duration,
        companyMark: req.body.companyMark,
        ssn: req.body.ssn,
        quantity: req.body.quantity,
        url: req.body.url
    };
    let { name, price, weight, model, url, ssn, waranty, companyMark, duration, quantity } = newProduct;

    ProductModel.product.update(
        name,
        weight,
        model,
        url,
        ssn,
        waranty,
        companyMark,
        price,
        duration,
        quantity,
        { returning: true, where: { _id: req.params.id.toString() } }
    )
        .then(product => res.json(product[1]))
        .catch(error => console.log(error)
        )
})

// Sequelize usage ends here

module.exports = ProductRouter;