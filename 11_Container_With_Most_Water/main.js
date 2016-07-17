/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var res = 0
  var s = 0
  var e = height.length - 1
  while (s !== e) {
    res = Math.max(Math.min(height[s], height[e]) * (e-s), res)
    height[s] < height[e] ? s++ : e--
  }
  return res
};