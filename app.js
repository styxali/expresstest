	//libs to require
	var express = require('express');
	var path = require('path');
	var bodyParser = require('body-parser');


 
	var app = express();




	// config

	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, 'views'));
	

	//use midelware
    app.use(express.static(path.join(__dirname, 'bower_components')));

	app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());﻿
    app.use(require('./todos'));

	//define routes
	




	//implementation





	app.listen(8080, function(){
		console.log("server at port 8080");
	});