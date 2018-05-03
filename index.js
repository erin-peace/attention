var express = require('express');
var app = express();

app.use(express.static('public'));

var server = require('http').Server(app);

var SerialPort = require('serialport');

var port = new SerialPort('/dev/cu.usbmodem1411', {
  // baudRate: 19200
  baudRate: 9600
});


console.log('test');

// Serialport.list().then(ports => console.log(ports));


server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/print', function(req, res) {
  var time = req.query.attention;
  port.write(time);
  res.sendfile(__dirname + '/print.html');
});
