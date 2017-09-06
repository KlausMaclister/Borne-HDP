const download = require('image-downloader')
const fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
const visage = 'visageNewImg.json';
const parfums = 'parfumsNewImg.json';
perform_deep_scraping = () => {
    fs.readFile(parfums, 'utf8', function (err, data) {
        if (err) throw err;
        arr = JSON.parse(data);
        var newArr = arr;
        for (let i = 0; i < arr.length; i++) {
            var url = arr[i].url;
            newArr[i].productDetails = [];
            console.log(url);
                request(url, function (error, response, body) {
                    if (error) {
                        console.log(error);
                    } else {
                        if (response.statusCode === 200) {
                            var $ = cheerio.load(body);
                            console.log(i);
                            const items = $('.associated-product').find('img');
                            const featuredImg = $('.box-brand').find('img').attr('src');
                            const productImage = $('.product-img-column').find('img').attr('src');
                            if (items.length > 0) {
                                items.map(function (i, el) {
                                    const priceStr = $(this).data('price');
                                    const price = {
                                        'label': $(this).attr('data-name'),
                                        'fullDescription': $(this).attr('data-description').replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, ' '),
                                        'price': priceStr.substring(priceStr.lastIndexOf('">') + 1, priceStr.lastIndexOf("€</span>")).replace('>', ''),
                                        'featuredImage': featuredImg,
                                        'productBigImage': productImage
                                    };
                                    console.log(newArr[i]);
                                     //newArr[i].productDetails.push(price);
                                })
                            } else {
                                const product = {
                                    'label': $('.product-name').find('h1').text(),
                                    'fullDescription': $('.short-description').text(),
                                    'price': $('.price').first().text(),
                                    'featuredImage': featuredImg,
                                    'productBigImage': productImage
                                }
                                 //newArr[i].productDetails.push(product);
                            }

                        }
                    }
                    if (i === arr.length - 1) {
                        var jsn = JSON.stringify(jsn);
                        fs.writeFile('newP.json', jsn, 'utf8', (d) => {
                            console.log('writing to file')
                        });
                    }

                })




        }
    })
}

module.exports = {perform_deep_scraping};




