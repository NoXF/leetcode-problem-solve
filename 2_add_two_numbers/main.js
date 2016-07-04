/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var carry = 0
  var res = []

  while(l1 || l2) {
    var x = l1 ? l1.val : 0
    var y = l2 ? l2.val : 0
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null

    var val = x + y + carry
    carry = Math.floor(val / 10)
    val %= 10
    res.push(val)
  }

  if (carry) {
    res.push(1)
  }

  return res
};
