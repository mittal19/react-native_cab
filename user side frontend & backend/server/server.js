var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var bookings = require('./routes/bookings');

var app = express();

var port = 3000;

app.listen(port,function(){
    console.log("Server running on port",port);
});


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(require('connect').bodyParser());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));

app.use("/",index);
app.use("/api",bookings);