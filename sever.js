var http = require('http'); //1. import Node.js core module

var server= http.createServer(function(req,res){ // 2 -creating server
    res.end('hello world!')
});
server.listen(5000); // 3. listen for any incoming requests\

console.log('Node.js web server at port 5000 is running..')