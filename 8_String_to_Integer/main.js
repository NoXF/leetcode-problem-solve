/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim()
  if (str.length === 0) { return 0 }
  if (str.length === 1 && (str[0] === '-' || str[0] === '+')) { return 0 }

  var flag = 1
  if (str[0] === '-' && isFinite(str[1])) {
    flag = -1
    str = str.substring(1, str.length)
  }

  if (str[0] === '+' && isFinite(str[1])) {
    str = str.substring(1, str.length)
  }

  var res = 0

  for (var i = 0, len = str.length; i < len; ++i) {
    if (!isFinite(str[i]) || str[i] === ' ') {
      break
    }
    res *= 10
    res += (str[i] - '0')
  }
  res *= flag

  //var res = parseInt(str)
  //res = isFinite(res) ? res : 0

  if (res > 2147483647) { return 2147483647 }
  if (res < -2147483648) { return -2147483648 }

  return res
};


console.log(myAtoi('+0 123'))