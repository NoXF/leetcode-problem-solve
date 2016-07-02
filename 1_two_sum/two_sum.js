/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var obj = {}
  for (let i = 0, len = nums.length; i < len; ++i) {
    let key = nums[i].toString()
    obj[key] = {}
    obj[key].value = (target - nums[i]).toString()
    obj[key].index = i
  }

  for (let i = 0, len = nums.length; i < len; ++i) {
    let key = nums[i].toString()
    if (obj[obj[key].value] && obj[obj[key].value].index != i) {
      return [i, obj[obj[key].value].index]
    }
  }
};

console.log(twoSum([-1,-2,-3,-4,-5], -8))