/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var str = x.toString()
  var len = str.length
  var res

  if (len > 10 && str[0] !== '-') { return 0 }
  if (len > 11) { return 0 }

  str = str.split('').reverse().join('')

  if (x < 0) {
    res = -parseInt(str)
  } else {
    res = parseInt(str)
  }
  if (res > 2147483647 || res < -2147483648) {
    return 0
  }
  return res
};

console.log(reverse(-12))