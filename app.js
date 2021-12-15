var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const port_running = 8080;

//pg db setup
const { Client } = require('pg');
var connectionString = "postgres://user:password@localhost:5432/database";
//postgres://user:secret@localhost:5432/mydatabasename
const client = new Client({
  connectionString: connectionString
})
client.connect();


var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('/public/assets/images'));
app.use('/public/assets/images/', express.static('./public/assets/images'));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('404');
});

app.set('port', process.env.PORT || port_running);
app.listen(port_running, function () {
  console.log("App running at: ","http://localhost:"+ port_running)
});


module.exports = app;
