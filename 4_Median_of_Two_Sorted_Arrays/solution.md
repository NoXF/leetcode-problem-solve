## 算法 时间复杂度O(n+m)

- 由于输入为两个由小到大的有序数组，省去了排序操作。 只需要执行归并排序的最后一步，将两个有序数组合并为一个有序数组。

  - 如果nums1[target1] < nums2[target2]，将nums1[target1]添加到新的数组，target1++。

  - 如果nums1[target1] > nums2[target2]，将nums2[target2]添加到新的数组，target2++。

  - 如果nums1[target1] = nums2[target2]，将两个数添加到新的数组，target1++ ,target2++。

- 合并后的数组元素个数为奇数，直接输出中间元素。如果为偶数输出中间两个元素的平均。

`Trick: 可能需要处理nums1、nums2同时为空的情况，题目中并没有这样的case。`