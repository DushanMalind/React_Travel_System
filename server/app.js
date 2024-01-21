var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger=require('morgan');
const cors=require('cors');

const DBConnection=require('./db/DBConnection');

DBConnection().then(r=>console.log(r));

var indexRouter = require('./routes/index');
var productRouter = require('./routes/Product');
var userRouter = require('./routes/user');
var signUserRouter=require('./routes/SignUser');
var customerRouter=require('./routes/Customer');
var paymentRouter=require('./routes/Payment');

var bodyParser=require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());


//app.use(logger('dev'));
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

app.options('*',cors());

app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/signUser',signUserRouter);
app.use('/customer',customerRouter);
app.use('/payment',paymentRouter);

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
  res.render('error');
});

module.exports = app;
