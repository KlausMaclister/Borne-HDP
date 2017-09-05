var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');


var insertDocuments = function (db, lead, callback) {
    // Get the documents collection
    var collection = db.collection('leads');
    collection.insertMany([
        lead
    ], function (err, result) {
        console.log('npm start added data')
        callback(result);
    });
}

var createLead = (lead) => {
    var url = 'mongodb://jo:jm140890@ds161793.mlab.com:61793/beauty_success';
    MongoClient.connect(url, function (err, db) {
        insertDocuments(db, lead, () => {
            db.close();
        });
    });
}


module.exports = {createLead};