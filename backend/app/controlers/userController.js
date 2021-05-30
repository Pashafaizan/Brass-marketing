const e = require("express");
const router = require("../../router/routes");
const formservice = require("../services/form.service");

let name = null;
let path = null;
let uploadData;
const uploadFile = async (req, res) => {
  console.log(req.files);

  console.log("This is creteForm");

  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" });
  }
  // accessing the file
  const myFile = req.files.file;
  console.log(req.files);
  //  mv() method places the file inside public directory
  console.log(__dirname);
  myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "Error occured" });
    }
    // returing the response with file path and name
    uploadData = {
      name: myFile.name,
      path: myFile.path,
    };
    console.log(uploadData);
    return res.send({ name: myFile.name, path: `${__dirname}/${myFile.name}` });
  });
};

const createForm = async (req, res) => {
  const data = req.body;

  console.log("this is request body");

  console.log(req.body);
  formservice.form(data).then((e) => {
    e.send();
  });
};
const getList = (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  console.log(page, limit);
  formservice.allListItems(page, limit).then((resp) => {
    // console.log(resp)
    res.send(resp);
  });
};

const sendMail = (req, res) => {
  let mailBody = req.body;
  formservice.mail(mailBody);
};
const getProduct = async (req, res) => {
  
  let id = req.query.id;
  
  console.log(id);
  formservice.productGet(id).then((resp) => {
    res.send(resp);
  });
};
module.exports = {
  uploadFile,
  createForm,
  getList,
  sendMail,
  getProduct,
};
