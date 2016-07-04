## 算法1 时间复杂度O(n^2)

- 朴素算法，遍历数组中任意两个元素之和是否等于target。

## 算法2 时间复杂度O(n)

- 对数组预处理，建一个字典。利用nums[i]的值作为字典的key。

- value { value : 目标值target-nums[i] , index: 自身在数组中的index，输出结果用 }

```
    var obj = {}
    for (let i = 0, len = nums.length; i < len; ++i) {
      let key = nums[i].toString()
      obj[key] = {}
      obj[key].value = (target - nums[i]).toString()
      obj[key].index = i
    }
```

- 遍历数组，如果obj[obj[key].value]元素存在，说明有两个元素之和等于target。

`Trick：为了处理负数，需要将数值都转为string格式。`