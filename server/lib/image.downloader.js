const download = require('image-downloader')
const fs = require('fs')
const parfums = 'soinsVisage.json';
let numOfErr  = 0;
downloadImages = () => {
    fs.readFile(parfums, 'utf8', function (err, data) {
        if (err) throw err;
        arr = JSON.parse(data);
        var newArr = arr;
        for (let i = 0; i < arr.length; i++) {
            const options = {
                url: arr[i].image,
                dest: 'img/visage/'
            }
            download.image(options)
                .then(({filename, image}) => {
                    newArr[i].image = filename;
                    if (i === arr.length - 1){
                        var json = JSON.stringify(newArr);
                        fs.writeFile('visageNewImg.json', json, 'utf8', (d) => {
                            console.log('writing to file')
                        });
                    }
                }).catch((err) => {
                numOfErr++;
                console.log(numOfErr);
                throw err
            })
        }
    });
}

module.exports = {downloadImages};




