/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var str = '#' + s.split("").join('#') + '#'
  var id = 0
  var mx = 0
  var p = []

  for (var i = 0, len = str.length; i < len; ++i) {
    p[i] = i < mx ? Math.min(p[2*id - i], mx - i) : 1
    while(str[i-p[i]] === str[i+p[i]] && i-p[i] >= 0) { p[i]++ }
    if (p[i] + i > mx) {
      mx = p[i] + i
      id = i
    }
  }

  var maxIndex = 0
  var max = 0
  for (var i = 0, len = p.length; i < len; ++i) {
    if (p[i] > max) {
      max = p[i]
      maxIndex = i
    }
  }

  max--
  var substr = str.substring(maxIndex - max, maxIndex + max)
  substr = substr.split('#').join('')

  return substr
};

console.log(longestPalindrome('a'))