const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.render('wiki/wiki.ejs',{title:"부산외대 위키 | Wiki"});
});

module.exports = router;