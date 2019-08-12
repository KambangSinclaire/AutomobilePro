const Sequelize = require('sequelize');
const database = require('../config/dbconfig');

const product = database.define('automobileProducts', {
    name: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.INTEGER
    },
    weight: {
        type: Sequelize.STRING
    },
    waranty: {
        type: Sequelize.STRING
    },
    model: {
        type: Sequelize.STRING
    },
    companyMark: {
        type: Sequelize.STRING
    },
    duration: {
        type: Sequelize.STRING
    },
    ssn: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.INTEGER
    },
});

const user = database.define('automobileUsers', {
    firstname: {
        type: Sequelize.STRING,
    },
    lastname: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.INTEGER
    },
    password: {
        type: Sequelize.STRING
    },
});

module.exports = {
    product: product,
    user: user
}
