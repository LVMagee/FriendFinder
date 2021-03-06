// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setup Express

var app = express();
var PORT = process.env.PORT || 8080;

// Setup Express data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

// Route Files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function(){
	console.log("app listening on PORT: " + PORT);
});

