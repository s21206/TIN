var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.get('/form', function(req,res){
    res.sendFile(__dirname + '/form.html');
});

app.post('/calc', function(req,res){
    var result, first = parseFloat(req.body[0].value), second = parseFloat(req.body[1].value), operation = req.body[2].value;
    if(operation == "+")
    {
        result = first + second;
    }
    else if(operation == "-")
    {
        result = first - second;
    }
    else if(operation == "*")
    {
        result = first * second;
    }
    else if(operation == "/")
    {
        result = first / second;
    }
    res.json({result: result});
    res.end();
});

app.listen(3000);