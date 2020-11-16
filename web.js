const  express = require('express');
const web = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./router/index');
const wikiRouter = require('./router/wiki');
const boardRouter = require('./router/board');
const mysqlRouter = require('./router/mysql');

web.set('views',__dirname + '/views');
web.set('view  engine', 'ejs');
web.engine('html', require('ejs').renderFile);

web.listen(8001,function (){
    console.log("Express server has started on port 8001")
});

web.use(bodyParser.json());
web.use(bodyParser.urlencoded({extended:false}));
web.use(cookieParser());
web.use(logger('dev'));
web.use(express.static('public'));

web.use('/',indexRouter);
web.use('/wiki',wikiRouter);
web.use('/board',boardRouter);
web.use('/mysql',mysqlRouter);

