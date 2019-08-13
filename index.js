const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const productRoutes = require("./API_Routes/productRoutes");
const userRoutes = require("./API_Routes/userRoutes");
const database = require('./config/dbconfig');
const port = process.env.PORT || 9000

const app = express();

/* 
Calling the middlewares used in the app
*/
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('admin'));
app.use('/hci.api', productRoutes);
app.use('/hci.api', userRoutes);



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/admin/admin.html'));
    /** 
    HMM WHEN I WROTE THIS CODE HERE IT STARTED CAUSING DOWNLOAD OOO
    res.send(express.static('admin'));
    */
});


// Connecting to PostGres Database
database.authenticate()
    .then(() => {
        console.log("Database Connected Successfully");

    })
    .catch(error => {
        console.log("error" + error);

    });



app.listen(port, () => {
    console.log("Listening on port " + port);
});