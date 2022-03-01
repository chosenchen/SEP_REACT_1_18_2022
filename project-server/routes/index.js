var express = require("express");
var router = express.Router();

var userRouter = require("./users");

/* GET home page. */
router.use("login", userRouter);

module.exports = router;
