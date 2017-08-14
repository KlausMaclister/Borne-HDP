var request = require('request');
var cheerio = require('cheerio');

scrapUrl = (url) => {
    return new Promise((resolve, reject)=>{
        request(url, function (error, response, body) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                if (response.statusCode === 200){
                    var $ = cheerio.load(body);
                    const items = $('.associated-product').find('img');
                    const featuredImg = $('.box-brand').find('img').attr('src');
                    const prices = [];
                    if (items.length > 0){
                        items.map(function(i, el){
                            const priceStr = $(this).data('price');
                            const price = {
                                'label': $(this).attr('data-name'),
                                'fullDescription': $(this).attr('data-description').replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,' '),
                                'price': priceStr.substring(priceStr.lastIndexOf('">')+1,priceStr.lastIndexOf("€</span>")).replace('>', ''),
                                'featuredImage': featuredImg
                            };
                            const length = items.length;
                            prices.push(price);
                            console.log(i);
                            if (i === length-1){
                                console.log('i is now ', length);
                                resolve(prices);
                                return;
                            }
                        })
                    }else{
                        const product = {
                            'label': $('.product-name').find('h1').text(),
                            'fullDescription': $('.short-description').text(),
                            'price': $('.price').first().text(),
                            'featuredImage': featuredImg
                        }
                        const ArrToSend = [];
                        ArrToSend.push(product);
                        resolve(ArrToSend);
                    }

                }
            }
        })
    })
}

module.exports = {scrapUrl}