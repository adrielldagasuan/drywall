'use strict';

exports.init = function(req, result){
  var http = require('http');
  
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
      result.render('about/index', {data : JSON.parse(chunk)});
    });
  });
  
  request.on('error', function(err) {
    console.log(err);
  });
  request.end();
  
  //res.render('about/index');
};
