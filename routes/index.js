var express = require('express');
var router = express.Router();
let userList = require("../module/userList")
let getUserList = require("../module/getUserList")
let removeUser = require("../module/removeList")
let modifyUser = require("../module/modifyUser")
let detaiList = require("../module/detaiList")
let userDetail = require("../module/userDetail")
let computedList = require("../module/computedList")
    /* GET home page. */
router.get("/userList", userList)
router.get("/computed", getUserList)
router.get("/removeUser", removeUser)
router.get("/modifyUser", modifyUser)
router.get("/detaiList", detaiList)
router.get("/userDetail", userDetail)
router.get("/computedList", computedList)
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;