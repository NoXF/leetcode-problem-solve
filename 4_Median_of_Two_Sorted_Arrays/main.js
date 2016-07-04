/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var nums = []
  var target1 = 0
  var target2 = 0
  while (target1 !== nums1.length || target2 !== nums2.length) {
    if (target1 === nums1.length) {
      nums.push(nums2[target2++])
      continue
    }
    if (target2 === nums2.length) {
      nums.push(nums1[target1++])
      continue
    }

    if (nums1[target1] < nums2[target2]) {
      nums.push(nums1[target1++])
    } else {
      nums.push(nums2[target2++])
    }
  }

  if (nums.length%2 === 1) {
    return nums[Math.floor(nums.length/2)]
  } else {
    return (nums[nums.length/2 - 1] + nums[nums.length/2]) / 2
  }
};

console.log(findMedianSortedArrays([1, 3], [2, 4]))