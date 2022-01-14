  var http = require('http');
  const url = require('url');

  const server = http.createServer(function (req, res) {
  const operation = url.parse(req.url,true).pathname;

  const parameter1 = parseFloat(url.parse(req.url,true).query.parameter1);
  const parameter2 = parseFloat(url.parse(req.url,true).query.parameter2);
  if(isNaN(parameter1))
  {
    res.writeHead(200);
    res.end('Wrong type(parameter1)');
  }
  else if(isNaN(parameter2))
  {
    res.writeHead(200);
    res.end('Wrong type(parameter2)');
  }
  else
  {
  var result;
  if(operation == "/add")
  {
    result = parameter1 + parameter2;
    res.writeHead(200);
    res.write('<p>' + parameter1 + ' + ' + parameter2 + ' = ' + result + '</p>');
    res.end();
  }
  else if(operation == "/subtract")
  {
    result = parameter1 - parameter2;
    res.writeHead(200);
    res.write('<p>' + parameter1 + ' - ' + parameter2 + ' = ' + result + '</p>');
    res.end();
  }
  else if(operation == "/multiply")
  {
    result = parameter1 * parameter2;
    res.writeHead(200);
    res.write('<p>' + parameter1 + ' * ' + parameter2 + ' = ' + result + '</p>');
    res.end();
  }
  else if(operation == "/divide")
  {
    result = parameter1 / parameter2;
    res.writeHead(200);
    res.write('<p>' + parameter1 + ' / ' + parameter2 + ' = ' + result + '</p>');
    res.end();
  }
  }
});

server.listen(3000);
