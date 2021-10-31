var express = require('express');
var app = express();
var PORT = 3000;


var middleware = {
	requireAuthentication: function (req, res, next){
		console.log('Private Route Hit!');
		next();
	},
	logger: function (req, res, next){
		console.log(new Date().toString() + ' Request Method: ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

//app.get('/', function(req, res){
//	res.send('Hello express');
//});
app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us');
});
//app.get('/login', function(req, res){
//	res.send('login page');
//});

app.use(express.static(__dirname + '/public'));

//console.log(__dirname);
app.listen(PORT, function(){
	console.log('Express Started port 3000');
});
