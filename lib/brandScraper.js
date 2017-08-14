var request = require('request');
var cheerio = require('cheerio');

function scrapeBrands() {
    const url = 'https://www.beautysuccess.fr/les-marques';
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                if (response.statusCode === 200) {
                    var $ = cheerio.load(body);
                    var brandItem = $('.main-container').find('a');
                    var brands = [];
                    brandItem.map(function (i, el) {
                        brands.push($(this).text());
                        if (i === brandItem.length - 1){
                            resolve(brands);
                        }
                    })
                }
            }
        })
    })
}

module.exports = {scrapeBrands};