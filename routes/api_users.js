/* mini api serve all users */
var express = require('express');
var router = express.Router();

router.get('/api/users', function(req, res) {
	var db = req.db;
    var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		console.log(docs);
        res.json(docs);
    });	
});

module.exports = router;