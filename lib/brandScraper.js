var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var pageScraper = require('./scrpr');
scrapeBrandObjects = (param) => {
    const url = (param === 'parfum') ? 'https://www.beautysuccess.fr/parfum' : 'https://www.beautysuccess.fr/soins-visage';
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                if (response.statusCode === 200) {
                    var $ = cheerio.load(body);
                    var brandItem = $('#narrow-by-list').find('ol').find('li');
                    var brands = [];
                    console.log(brandItem.length);
                    brandItem.map(function (i, el) {
                        var brandItem = {
                            'name': $(this).text().replace(/\n/g, " ").split(' ').join(''),
                            'url': $(this).find('a').attr('href')+'&limit=all'
                        }
                        brands.push(brandItem);
                        if (i === brandItem.length - 1) {
                            resolve(brands);
                        }
                    }).get();
                    const strBrand = JSON.stringify(brands);
                    if (param === 'parfum'){
                        fs.writeFile('brands/parfums.brands.json', strBrand, 'utf8');
                    }else{
                        fs.writeFile('brands/visage.brands.json', strBrand, 'utf8');
                    }
                }
            }
        })
    })
}

module.exports = {scrapeBrandObjects};