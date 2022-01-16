var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.get('/hello', function(req,res){
    res.send('hello world');
});

app.get('/form', function(req,res){
    res.sendFile(__dirname + '/form.html');
});

app.post('/formdata', function(req, res){
    const first_name = req.body.name;
    const surname = req.body.sur;
    const e_mail = req.body.mail;
    res.render('formdata', {firstname: first_name, last_name: surname, mail: e_mail});
    res.end();
});

app.post('/jsondata', function(req,res){

});

app.listen(3000);