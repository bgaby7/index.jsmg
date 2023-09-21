var http = require('http');
var dt1 = require('./inicial');
var dt2 = require('./login');
var dt3 = require('./paciente');
var dt4 = require('./administrador');
var dt5 = require('./medico');
var dt6 = require('./erro');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("INICIAL: " + dt1.myDateTime() + "<br>" );
  res.write("LOGIN: " + dt2.myDateTime() + "<br>" );
  res.write("PACIENTE: " + dt3.myDateTime() + "<br>" );
  res.write("ADMINISTRADOR: " + dt4.myDateTime() + "<br>" );
  res.write("MEDICO: " + dt5.myDateTime() + "<br>" );
  res.write("ERRO: " + dt6.myDateTime() + "<br>");
  res.end();
}).listen(5016);