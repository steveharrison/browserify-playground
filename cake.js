var Cake = function(name) {
	this.name = name;
};

Cake.prototype.sayName = function() {
	console.log('This cake is ' + this.name);
}

module.exports = Cake;