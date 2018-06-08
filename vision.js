// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
process.env.GOOGLE_APPLICATION_CREDENTIALS = './key.json'
var fs = require('fs'), request = require('request');

var download = function(uri, filename, callback){
	request.head(uri, function(err, res, body){
	    console.log('content-type:', res.headers['content-type']);
	    console.log('content-length:', res.headers['content-length']);
	    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};

// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
//   console.log('done');
// });

// Creates a client
// const client = new vision.ImageAnnotatorClient();
 
// // Performs label detection on the image file
// client.textDetection('./DebitCard-2.jpg')
// .then(results => {
//     const text = results[0].textAnnotations;
//     console.log('Text:');
//     text.forEach(tex => console.log(tex.description));
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
// });

function visionCall(url){
	request.head(url, function(err, res, body){
	    console.log('content-type:', res.headers['content-type']);
	    console.log('content-length:', res.headers['content-length']);
		while(url.includes('/') && url.includes(':'))
			urlName = url.replace('/','').replace(':','')
	    request(url).pipe(fs.createWriteStream(urlName)).on('close', ()=>{
	    	console.log('saved')
			const client = new vision.ImageAnnotatorClient();
			client.textDetection(url)
			.then(results => {
			    const text = results[0].textAnnotations;
			    console.log('Text:');
			    text.forEach(tex => console.log(tex.description));
			    fs.unlink(url, function(error) {
				    if (error) {
				        throw error;
				    }
				    console.log('Deleted!');
				});
			})
			.catch(err => {
			    console.error('ERROR:', err);
			});
		})
	})
}

// visionCall('https://www.google.com/images/srpr/logo3w.png')
