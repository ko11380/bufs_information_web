module.exports = function (app) {
    app.get('/', function (req,res){
        res.render('index.ejs');
    });
    app.get('/wiki',function(req,res){
        res.render('wiki/wiki.ejs');
    });
    app.get('/board',function(req,res){
        res.render('board/board.ejs');
    });
}