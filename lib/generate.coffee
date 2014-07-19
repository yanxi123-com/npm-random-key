rn = (max) ->
  return Math.floor (Math.random() * max)

digits = '0123456789'
base62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
base30 = '0123456789ABCDFHKLMNPQRSTUVWXYZ'  # 1-9, A-Z exclude(E, G, I, J, O) for human read

exports.generate = (len = 16, chars = base62) ->
  key = ''
  key += chars[rn(chars.length)] for i in [1..len]
  return key 

exports.generateDigits = (len = 16) ->
  exports.generate(len, digits)

exports.generateBase30 = (len = 16) ->
  exports.generate(len, base30)
