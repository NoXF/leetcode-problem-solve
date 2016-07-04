/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length
  var head = 0
  var res = 1
  var temp = ""

  if (len === 0) { return 0 }

  if (len === 1) { return 1 }

  for (var i = 1; i < len; ++i) {
    temp = s.substring(head, i)
    if (temp.indexOf(s[i]) == -1) {
      res = res > temp.length + 1 ? res : temp.length + 1
    } else {
      head += temp.indexOf(s[i]) + 1
    }
  }

  return res
};

console.log(lengthOfLongestSubstring("bbtablud"))