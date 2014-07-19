require("coffee-script/register");

var randomKey = module.exports = require("./lib/generate.coffee");

console.log(randomKey.generate());
