##算法 时间复杂度O(n)

- 因为每一个结点的值都是个位数，所以L1,L2按位相加，如果有进位则记录。

- 在下一位多加1(最多加1)即可。

Trick: 最后可能需要多加一个结点

```
L1 = [1]
L2 = [9, 9]
res = [0, 0, 1] not [0, 10]
```