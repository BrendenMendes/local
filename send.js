var fs = require('fs')
var b = fs.readFileSync('./DebitCard-2.jpg').toString("base64")
console.log(b)

fs.writeFile('image.jpg', b, {encoding: 'base64'}, function(err) {
    console.log('File created');
});