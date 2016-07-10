/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (!isFinite(x)) { return false }
  if (x < 0) { return false }
  var str = x.toString()
  for (var i = 0, len = str.length; i <= len / 2; ++i) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true
};