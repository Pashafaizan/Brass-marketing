const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const { connectToMongoDB } = require("./database/db");
// const Joi = require('joi'); //used for validation
dotenv.config();
const port = process.env.HTTP;
const routes1 = require("./router/routes");

connectToMongoDB();
app.use(express.static("public")); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());
// app.set("views", path.join(__dirname, "app/controlers/public"));

/** Express config to serve frontend files */
app.use(express.static("app/controlers/public"));
app.use("/images", express.static("app/controlers/public"));

app.use(express.json());

app.use("/api/v1", routes1);
// app.use(api/v1/routes)

app.listen(port, () => {
  console.log("your server has been started");
});
