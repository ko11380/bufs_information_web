const  express = require('express');
const web = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./router/index');
const wikiRouter = require('./router/wiki');
const boardRouter = require('./router/board');

web.set('views',path.join(__dirname + '/views'));
web.set('view  engine', 'ejs');
web.engine('html', require('ejs').renderFile);

web.listen(8001,function (){
    console.log("Express server has started on port 8001")
});

web.use(logger('dev'));
web.use(bodyParser.json());
web.use(bodyParser.urlencoded({extended:false}));
web.use(cookieParser());
web.use(express.static(path.join(__dirname + '/public')));

web.use('/',indexRouter);
web.use('/wiki',wikiRouter);
web.use('/board',boardRouter);