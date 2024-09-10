//Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request to your specified server:port. Use the best way for performance.

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'image/jpg'});

  var img = fs.readFileSync(__dirname + '/big.jpg');
  res.end(img, 'binary');
}).listen(3000);

console.log('Server is running at http://localhost:3000/');
