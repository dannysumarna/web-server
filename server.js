var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware');


app.use(middleware.logger);

//app.get('/', function(req, res){
//	res.send('Hello express');
//});
app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us!!');
});
//app.get('/login', function(req, res){
//	res.send('login page');
//});

app.use(express.static(__dirname + '/public'));

//console.log(__dirname);
app.listen(PORT, function(){
	console.log('Express Started port 3000');
});

