var express = require('express');
var app = express();
var scrpr = require('./lib/scrpr');
var fs = require('fs');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/index');
});


app.get('/visage', function (request, response) {
    var bigArray = [];
    fs.readFile('./lib/soins.url.json', function read(err, data) {
        if (err) {
            throw err;
        }
        const jsonV = JSON.parse(data);
        for (var u = 1; u < jsonV.length; u++) {
            scrpr.getVisage(jsonV[u], 'soinsVisage.json')
            if (u === 39){
                response.send(bigArray);
            }
        }
    });
});
app.get('/parfums', function (request, response) {
    fs.readFile('./lib/parfums.url.json', function read(err, data) {
        if (err) {
            throw err;
        }
        const jsonP = JSON.parse(data);
        for (var u = 1; u < jsonP.length; u++) {
            scrpr.getParfums(jsonP[u], 'parfums.json')
            if (u === 41){
                response.send('finished')
            }
        }
    });
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
