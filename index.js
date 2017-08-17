var express = require('express');
var app = express();
var scrpr = require('./lib/scrpr');
var urlScrapr = require('./lib/product_scraper');
var request = require('request');
var fs = require('fs');
var brandScraper = require('./lib/brandScraper');

app.all('*', function (req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return next();
});

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
            if (u === 39) {
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
            if (u === 41) {
                response.send('finished')
            }
        }
    });
});
app.get('/parfumBrands', (request, response) => {
    brandScraper.scrapeBrandObjects('parfum').then((brands) => {
        response.send(brands);
    })
});
app.get('/visageBrands', (request, response) => {
    brandScraper.scrapeBrandObjects('visage').then((brands) => {
        response.send(brands);
    })
});
app.get('/allbrandsParfum', function (request, response) {
    fs.readFile('brands/parfums.brands.json', function read(err, data) {
        if (err) {
            throw err;
        }
        const jsonP = JSON.parse(data);
        console.log(jsonP)
        for (var u = 1; u < jsonP.length; u++) {
            var destination = 'brands/parfums/'+jsonP[u].name+'.json';
            scrpr.getParfums(jsonP[u].url, destination);
        }
    });
});

app.get('/allBrandsVisage', function (request, response) {
    fs.readFile('brands/visage.brands.json', function read(err, data) {
        if (err) {
            throw err;
        }
        const jsonP = JSON.parse(data);
        console.log(jsonP)
        for (var u = 1; u < jsonP.length; u++) {
            var destination = 'brands/visage/'+jsonP[u].name+'.json';
            scrpr.getVisage(jsonP[u].url, destination);
        }
    });
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
