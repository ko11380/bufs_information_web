const express = require('express');
const router = express.Router();
const mysql_odbc = require('../db/db_conn')();
const conn = mysql_odbc.init();

router.get('/:page',function(req,res){
    var page = req.params.page;
    var sql = "select idx, name, title, hit, date_format(modidate,'%Y-%m-%d %H:%i:%" +
        "s') modidate, "+"date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board";
    conn.query(sql, function (err,rows){
        if(err) console.error("err : " + err)
        res.render('board/board.ejs',{rows:rows,title:"부산외대 위키 | 게시판 page"+page})
    });
});

router.get('/',function (req,res){
    res.redirect('/board/1')
});

router.post('/',function (req,res){
    console.log(req.body);
    var name = req.body.name;
    var title = req.body.title;
    var content = req.body.text;
    var passwd = req.body.passwd;
    var datas = [name,title,content,passwd];

    var sql = "insert into board(name,title,content,regdate,modidate,passwd,hit) values(?,?,?,now(),now(),?,0)";
    conn.query(sql,datas,function(err,rows){
       if(err)console.error("err : " +err);
       res.redirect('/board/1');
    });
});

router.get('/v/:idx',function (req,res){
    var idx = req.params.idx;

    var sql = "select idx,name,title,content,regdate,passwd,hit from board where idx=?";

    conn.query(sql,[idx],function (err,rows){

        if(err)console.log("err : "+err);
        res.render('board/v.ejs',{ title:'부산외대 위키 | 게시글',rows:rows[0] });
        console.log(rows)
    })
});

module.exports = router;
