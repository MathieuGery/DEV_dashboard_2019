const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
    .connect("mongodb://@localhost:27017/db_test", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch((error) => {
        console.log("Error while DB connecting");
        console.log(error);
    });

mongoose.set('useCreateIndex', true);

const app = express();

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

const router = express.Router();
const routes = express.Router();
app.use("/user", router);
app.use("/api", routes);
require(__dirname + "/controllers/userController")(router);
require(__dirname + "/controllers/apiController")(routes);

const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));