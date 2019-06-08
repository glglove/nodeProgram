var express = require('express');
var router = express.Router();

var path = require('path')
// console.log(". = %s", path.resolve("."));
console.log("__dirname = %s", path.resolve(__dirname));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });  // 发送的是 ejs 模板引擎  views 中的 index.ejs 文件内容
  // res.send('../public/pages/index.html','text/html')
  // var html = '<div>jdkfjsk</div>'
  // res.send(html)
  // res.send(new Buffer('whoop'));
  // res.send({ some: 'json' });
  // res.send('<p>some html</p>');
  // res.status(404).send('Sorry, we cannot find that!');
  // res.status(500).send({ error: 'something blew up' });
  // res.sendFile('../pages/index.html')
});

router.get('/test', (req, res, next) => {
  res.send("欢迎来到 express 的世界")
})

module.exports = router; 
