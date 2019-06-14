// 引入 users 模型
const Users = require('../model/user')

// 引入 bcrypt
const bcrypt = require('bcrypt')


const userApi= {
  // 用户注册
  register: function (params) {
    return new Promise((resolve, reject) => {
      Users.findOne(params).then((data) => {
        console.log(data)
        if (data) {
          resolve({
            state: 1,
            msg: "用户名已存在" 
          })
        } else {
          const myUser = {
            name: params.name,
            pwd: params.password
          }

          // const data = {
          //   Method: 'GetFlowList',
          //   TokenId: '141B00F6-FD61-4BAD-A39D-9D89B779FA5F',
          //   CompanyCode: 05255594,
          //   UserId: 3194
          // }
          // // 向 java 后台服务器发送 请求
          // http.post('https://www.caihuiyun.cn/WorkFlow', JSON.stringify(data)).then(res => {
          //   if (res) {
          //     console.log(1112)
          //     res.send(254)
          //   } else {
          //     res.send(423454)
          //     console.log(232)
          //   }
          // })

          // 密码进行加密后返回
          const saltRounds = 10;
          const salt = bcrypt.genSaltSync(saltRounds);
          const hash = bcrypt.hashSync(myUser.pwd, salt);
          myUser.pwd = hash;
          // 实例化 myUser
          const newUser = new Users(myUser)
          console.log(newUser)
          // 存储 
          newUser.save().then(user => {
            resolve({
              state: 1,
              msg: '用户信息存储成功',
              user
            })
          }).catch(err => {
            console.log(err)
            reject(err)
          })

        }
      }).catch(err => {
        console.log(err)
      })
    })
  }
 }


module.exports = userApi