/* mini api */
var express = require('express');
var router = express.Router();

router.get('/test', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

router.get('/users', function(req, res) {
	var db = req.db;
    var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		console.log(docs);
        res.json(docs);
    });	
});

module.exports = router;