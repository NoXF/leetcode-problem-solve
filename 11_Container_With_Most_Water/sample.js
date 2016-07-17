/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var len = height.length
  var res = 0
  for (var i = 0; i < len; ++i) {
      for(var j = i + 1; j < len; ++j) {
          var v = (j - i) * Math.min(height[i], height[j])
          res = res < v ? v : res
      }
  }
  return res
};