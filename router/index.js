const express = require('express');
const router = express.Router();

router.get('/', function (req,res){
    res.render('index.ejs',{title:"부산외대 위키 | 메인"});
});

module.exports = router;