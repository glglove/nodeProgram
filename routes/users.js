var express = require('express');
var router = express.Router();
const db = require('../db/db')
const bcrypt = require('bcrypt')

const http = require("http")

// 引入user 的模型
// const Users = require("../model/user")

// 引入 userApi
const userApi = require('../api/userApi')
 

/**
 * 用户注册接口，发送 用户名 和 密码， 后台进行该用户名是否已经注册的判断，并实现在 mongodb中 存入/update 
 * **/
router.post('/register', function(req, res, next) {
  // res.send('respond with a resource');
  userApi.register(params).then((res) => {
    console.log(res)
  })
});

module.exports = router;
