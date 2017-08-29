var express = require('express');
var app = express();
var scrpr = require('./lib/scrpr');
var urlScrapr = require('./lib/product_scraper');
var request = require('request');
var fs = require('fs');
var brandScraper = require('./lib/brandScraper');
var stripe = require('./stripe/stripe.api');
var bodyParser = require('body-parser');


app.all('*', function (req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(myParser.urlencoded({extended : true}));


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
        const jsonPB = JSON.parse(data);
        console.log(jsonPB)
        for (var u = 1; u < jsonPB.length; u++) {
            scrpr.getParfums(jsonPB[u].url, 'brands/parfums/' + jsonPB[u].name + '.json');
            if (u === jsonPB.length - 1) {
                response.send('stoped');
                return;
            }
        }
    });
});

app.get('/allBrandsVisage', function (request, response) {
    fs.readFile('brands/visage.brands.json', function read(err, data) {
        if (err) {
            throw err;
        }
        const jsonVB = JSON.parse(data);
        for (var u = 1; u < jsonVB.length; u++) {
            scrpr.getVisage(jsonVB[u].url, 'brands/visage/' + jsonVB[u].name + '.json');
        }
    });
});
app.get('/price', (request, response) => {

    const url = request.query.url;
    urlScrapr.scrapUrl(url).then((product) => {
        response.send(product);
    })

})
app.post('/charge', function (request, response) {
    const amount = request.body.transaction.amount;
    const source = request.body.transaction.source;
    const description = request.body.transaction.description;
    console.log(request.body)
    response.send(request.body);
    stripe.createCharge(amount, source, description).then((answer)=>{
        response.send(answer);
    })
})

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
