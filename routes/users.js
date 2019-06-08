var express = require('express');
var router = express.Router();
const db = require('../db/db')

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

      const newUser = new Users(myUser)
      console.log(newUser)
      newUser.save().then(user => res.json({
        user,
        state: 1,
        msg: '存储成功！'
      })).catch(err => console.log(err))
      // Users.save(newUser).then(user => res.json(user)).catch(err => console.log(err))
    }
  })
});

module.exports = router;
