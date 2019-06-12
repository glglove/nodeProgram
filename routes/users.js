var express = require('express');
var router = express.Router();
const db = require('../db/db')
const bcrypt = require('bcrypt')

const http = require("http")

// 引入user 的模型
const Users = require("../model/user")
 
/* GET users listing. */
router.post('/register', function(req, res, next) {
  // res.send('respond with a resource');
  Users.findOne({name:req.body.name}).then((data) => {
    console.log(data)
    if(data) {
      res.status(400).json({msg:"用户名已存在"})
    }else {
      const myUser = {
        name: req.body.name,
        pwd: req.body.password   
      }

      // 向 java 后台服务器发送 请求
      // http.get('/com').then(res => {
      //   if(res){
      //     console.log(423)
      //   }else {
      //     console.log(232)
      //   }
      // })
      // 密码进行加密后返回
      const saltRounds = 10 ;   
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(myUser.pwd, salt);
      myUser.pwd = hash;
      const newUser = new Users(myUser)
      console.log(newUser)
      newUser.save().then(user => res.json({
        user,
        state: 1,
        msg: '存储成功！'
      })).catch(err => console.log(err))          
    }
  })
});

module.exports = router;
