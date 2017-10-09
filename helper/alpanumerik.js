var alpanumerik = function (length) {
  var str = ''

  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')

  var charslen = chars.length

  if(!length) {
    length = ~~(Math.random() * charslen)
  }

  for(var i = 0; i < length; i++) {
    str += chars[~~(Math.random() * charslen)]
  }
  return str
}

module.exports = alpanumerik
