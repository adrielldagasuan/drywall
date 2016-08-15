var express = require('express');
var http = require('http');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, result, next) {
  var options = {
    host: '52.198.44.5',
    port: 80,
    path: '/api/products',
    method: 'GET'
  };

  var request = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      result.send(chunk);
    });
  });
  
  request.on('error', function(err) {
    console.log(err);
  });
  request.end();
  
  //result.send('respond with a resource');
});

module.exports = router;
