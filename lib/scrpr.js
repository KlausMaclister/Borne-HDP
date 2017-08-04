/**
 * Created by if_found_call_0586288454 on 01/08/2017 ap. J.-C..
 */
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var finalArray = [];


function getProducts(url, destination) {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error) {
                return reject(error)
            } else {
                if (response.statusCode === 200) {
                    var $ = cheerio.load(body);
                    var product = $('.products-grid').find('li');
                    product.map(function (i, el) {
                        var prodObj = {
                            "brand": $(this).find('.product-brand').find('a').text(),
                            "name": $(this).find('.product-name').text(),
                            "description": $(this).find('.desc').text().replace(/\r?\n|\r|\s/, ''),
                            "image": $(this).find('img').attr('src')
                        }
                        finalArray.push(prodObj);
                    }).get();
                    console.log(finalArray);
                    var finalStr = JSON.stringify(finalArray)
                    fs.writeFile(destination, finalStr, 'utf8');
                }
            }
        })
        return resolve(finalArray);
    })
}


module.exports = {getProducts}