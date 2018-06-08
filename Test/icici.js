// var sha1 = require('sha1');
 
// console.log(sha1("i9@rtneru@t"));

// const utf8 = require('utf8');

// var u = utf8.encode('IPartner|4e25b6d662dd367573498a1e2b99160c0e57d8b9|2009-06-11T17:11:10.5312500+0100')

// console.log(u)

var base64 = require('base-64');
var utf8 = require('utf8');
 
// var text = 'IPartner|4e25b6d662dd367573498a1e2b99160c0e57d8b9|2018-05-18T07:40:42.965Z';
// var bytes = utf8.encode(text);
// var encoded = base64.encode(bytes);
// console.log(encoded);

var text = 'IPartner|4e25b6d662dd367573498a1e2b99160c0e57d8b9|'+JSON.stringify(new Date()).replace('"', '').replace('"', '');
var bytes = utf8.encode(text);
var encoded = base64.encode(bytes);
console.log(encoded);