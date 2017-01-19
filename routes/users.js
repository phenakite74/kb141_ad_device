var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // res.send('respond with a resource');
  // res.send('index.html');
  res.render('users.html');
});

module.exports = router;
