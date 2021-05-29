const express = require("express");
const router = express.Router();

const userService = require("../app/controlers/userService");

router.post("/form", userService.createForm);
router.post("/upload", userService.uploadFile);
router.get("/list", userService.getList);
router.post("/mail", userService.sendMail);
router.get("/product", userService.getProduct);

module.exports = router;
