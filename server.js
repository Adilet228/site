var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");
var mongoose = require("mongoose");

// для авторизации

var cookieParser = require("cookie-parser");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);






mongoose.connect('mongodb://127.0.0.1:27017/test');



var app = express();




app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 1 }));
app.use(cookieParser());

app.use(session({
    secret:'Your secret here',
    resave: true,
    saveUninitalized: true,
    key: 'jsessionid',
    store: new MongoStore ({
        mongooseConnection: mongoose.connection
    })
  }));
  




  
// app.use(require("./server/routes"))
	app.use(require("./server/routes"))


app.listen(3000, function(){
    console.log("Express server started")
    
    
})
