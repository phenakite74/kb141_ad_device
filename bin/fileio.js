/**
 * Created by juyoungjung on 2017. 1. 18..
 */

var fileIO = function () {
  var fs = require("fs");
  var input = fs.createReadStream('c:/zzz/csv_test.csv');
  var result;
  input.on('data', function (data) {
    result = data.toString();
    console.log(result);
  });
};

module.exports = fileIO;