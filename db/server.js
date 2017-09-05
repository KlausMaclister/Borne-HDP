var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var LEADS = "LEADS";

var app = express();
app.use(bodyParser.json());
app.all('*', function (req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return next();
});
// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
var Murl  = "mongodb://heroku_hf34vrlp:3vbmq4l0horsdf1pcjj3c6he6d@ds125914.mlab.com:25914/heroku_hf34vrlp"
// Connect to the database before starting the application server.
mongodb.MongoClient.connect(Murl, function (err, database) {
    if (err) {
        console.log('could not get the server running')
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 5000, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });

    function handleError(res, reason, message, code) {
        console.log("ERROR: " + reason);
        res.status(code || 500).json({"error": message});
    }

    /*  "/api/contacts"
     *    GET: finds all contacts
     *    POST: creates a new contact
     */

    app.get("/", function(req, res) {
        res.send('you got it')
    });
    app.post("/api/lead", function(req, res) {
        console.log(req.body);
        var newLead = req.body;
        newLead.createDate = new Date();
        db.collection(LEADS).insertOne(newLead, function(err, doc) {
            if (err) {
                handleError(res, err.message, "Failed to create new contact.");
            } else {
                res.status(201).json(doc.ops[0]);
            }
        });
    });
});