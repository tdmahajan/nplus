var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('pimdb', server, {safe: true});


exports.findByParentId = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving child Categories: ' + id);
    
    db.collection('category', function(err, collection) {
        collection.find({parent:id}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving child Categories: ' + id);
    db.collection('category', function(err, collection) {
        collection.findOne({_id:id}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('category', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};