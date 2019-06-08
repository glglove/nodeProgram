
const mongoose = require('mongoose');
const url = require('./mongodbConfig').url;
mongoose.connect(url)

const db = mongoose.connection;

db.on('err', function() {
    console.log('mongoDB 连接出错！db connection error!')
})

db.on('open', function() {
    console.log('"MongoDB已经成功连接了！"mongoDB connection success!')
})

module.exports = db;