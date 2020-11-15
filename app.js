var  express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./router/index');
var wikiRouter = require('./router/wiki');
var boardRouter = require('./router/board');
var mysqlRouter = require('./router/mysql');

app.set('views',__dirname + '/views');
app.set('view  engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(3000,function (){
    console.log("Express server has started on port 3000")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static('public'));

app.use('/',indexRouter);
app.use('/wiki',wikiRouter);
app.use('/board',boardRouter);
app.use('/mysql',mysqlRouter);

