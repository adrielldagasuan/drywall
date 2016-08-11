'use strict';

var http = require('http');

var options = {
  host: 'localhost',
  port: 3000,
  path: '/products',
  method: 'GET'
};

exports.init = function(req, res){
  //res.send(http://localhost.com:3000/recipes);

  var responseString = '';


  var request = http.request(options, function(response) {

    response.on('data', function(data) {
      responseString += data;
    });

    response.on('end', function() {
      console.log(responseString);
      res.send(responseString); // change this to render to a page
    });
  });
  request.end();
};
