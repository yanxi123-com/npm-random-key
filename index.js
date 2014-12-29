var crypto = require("crypto");

var rn = function(max) {
  var rnBytes = crypto.randomBytes(2);
  var randomNum = rnBytes.readUInt8(0) * 256 + rnBytes.readUInt8(1);
  return randomNum % max;
}

var digits = '0123456789'
var base62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
var base30 = '0123456789ABCDFHKLMNPQRSTUVWXYZ'  // 1-9, A-Z exclude(E, G, I, J, O) for human read

exports.generate = function(len, chars) {
  len = len || 16;
  chars = chars || base62;
  var key = '';
  var charsLen = chars.length;
  for (var i=0; i<len; i++) {
    key += chars[rn(charsLen)];
  }
  return key;
};

exports.generateDigits = function(len) {
  len = len || 16;
  return exports.generate(len, digits)
};

exports.generateBase30 = function(len) {
  len = len || 16;
  return exports.generate(len, base30)
}
