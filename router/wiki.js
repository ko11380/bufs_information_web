const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.render('wiki/wiki.ejs');
});

module.exports = router;