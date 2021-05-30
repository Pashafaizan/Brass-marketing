const express = require("express");
const router = express.Router();

const userController = require("../app/controlers/userController");

router.post("/form", userController.createForm);
router.post("/upload", userController.uploadFile);
router.get("/list", userController.getList);
router.post("/mail", userController.sendMail);
router.get("/product", userController.getProduct);

module.exports = router;
