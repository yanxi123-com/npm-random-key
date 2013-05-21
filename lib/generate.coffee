rn = (max) ->
	return Math.floor (Math.random() * max)

exports.generateKey = (len = 16) ->
	[num, alpb, alps] = ["0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXTZ", "abcdefghiklmnopqrstuvwxyz"]
	[chars, key]      = [(alpb + num + alps).split(''),""]
	key += chars[rn(chars.length)] for i in [1..len]
	return key