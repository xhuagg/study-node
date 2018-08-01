//function (exports, require, module, __filename, __dirname) {
console.log("I am module2.");

var x = 1;
exports.y = 2;
exports.fn = function() {
	console.log("I am a function in module2.");
}

z = 3;


console.log(global.x);
console.log(global.z);

console.log(arguments.callee + "")

//}