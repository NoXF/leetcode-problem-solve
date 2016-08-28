/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {}
  let len = s.length
  for (let i = 0; i < len; ++i) {
    if (obj[s[i]]) {
      obj[s[i]]++
    } else {
      obj[s[i]] = 1
    }
  }

  for(let i = 0; i < len; ++i) {
    if (obj[s[i]] === 1) {
      return i
    }
  }
  return -1
};