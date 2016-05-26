var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var engines = require('consolidate');
var assert = require('assert');
var path = require('path');

var app = express(); 

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
//app.set('views', __dirname + '/views');


MongoClient.connect('mongodb://localhost:27017/video', function (err, db) {
	assert.equal(null, err);
	console.log('Successfully connected to mongodb');

	app.get('/', function(req, res){
		//db.collection('movies').find({}).toArray(function(err, docs){
		//	console.log(docs);
		//	res.render('movies', {'movies':docs});
		//});
		res.render('movies');
	});

	app.post('/', function(req, res){
		var mymovie = {
			"title":req.params.title,
			"year":req.params.year,
			"imdb":re.params.imdb
		};

		db.collection('movies').insert(mymovie);
	})

	app.use(function(req, res){
		res.sendStatus(404);
	});

	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Express server listening on port ' + port)
	})
});