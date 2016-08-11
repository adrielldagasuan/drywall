'use strict';

var http = require('http');

var options = {
  host: 'localhost',
  port: 8080,
  path: '/api/products',
  method: 'GET'
};

exports.init = function(req, res){

  var responseString = '';

  var request = http.request(options, function(response) {

    response.on('data', function(data) {
      console.log('data:' + data);
      responseString += data;
    });

    response.on('end', function() {
      console.log(responseString);
      var products = [{"name": "Product", "sku":"SKU 1"}];
      res.render('.././views/products/products',{json:responseString}); // change this to render to a page
    });

    response.on('error',function(error){
      console.log(error);
      res.render('.././views/http/404');
    });

  });

  request.on('error',function(error){
    console.log(error);
    res.render('.././views/http/404');
  });

  request.end();
};
