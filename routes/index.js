var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  var input = fs.createReadStream('c:/zzz/csv_test.csv');
  var result;
  input.on('data', function (chunk) {
    result = chunk.toString();
    console.log(result);
    // res.render('index.html',{title : result});
    res.send(result);
  });

});

module.exports = router;
