var unique = require('uniq');
var Cake = require('./cake.js');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

var cake1 = new Cake('Chocolate Brownie');
var cake2 = new Cake('Pistachio Slice');

cake2.sayName();
cake1.sayName();
