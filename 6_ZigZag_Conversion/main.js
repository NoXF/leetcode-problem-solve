/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var res = ""
  var len = s.length
  if (numRows === 1) return s

  for (let i = 0; i < numRows; ++i) {
    var index = i
    var flag = true
    while (index < len) {
      res += s[index]
      if (flag === true) {
        (numRows - i - 1) === 0 ? index += 2 * i : index += 2 * (numRows - i - 1)
      } else {
        i === 0 ? index += 2 * (numRows - (i+1)) : index += 2 * i
      }
      flag = !flag
    }
  }
  return res
};