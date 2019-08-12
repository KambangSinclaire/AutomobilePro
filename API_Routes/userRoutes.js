const express = require('express');
const UserRouter = express.Router();
const userModel = require('../Models/Models');


// Api route for Uthenticating a User
UserRouter.get('/user/login/:email', (req, res) => {
    authenticateUser = {
        email: req.params.email,
        where: { email: req.params.email }
    }
    userModel.user.findOne(authenticateUser)
        .then(user => res.json(user))
        .catch(error => console.log(error))
});


// Api route for getting User Details during product purchase
UserRouter.post('/user/details', (req, res) => {
    getUser = {
        email: req.body.email,
        where: { email: req.body.email, }
    }
    userModel.user.findOne(getUser)
        .then(user => {
            if (user === null) {
                res.json({
                    "error_code": "-1",
                    "msg": "Email Doest Not Exist"
                });
            } else {
                res.json(user);
            }
        })
        .catch(error => console.log(error)
        )
});






// Api route for registering a user
UserRouter.post('/users/registerUser', (req, res) => {

    registerUser = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password
    }
    userModel.user.create(registerUser)
        .then(user => res.json(user))
        .catch(error => console.log(error));
});

module.exports = UserRouter;