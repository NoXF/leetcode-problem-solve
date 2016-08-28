/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  input = input.split('\n')
  let stack = []
  let deep = -1
  let res = 0
  for(let i = 0, len = input.length; i < len; ++i) {
    let obj = findDeep(input[i])
    input[i] = obj.str
    while (obj.deep <= deep) {
      stack.pop()
      deep--
    }

    if (isFile(input[i])) {
      stack.push(input[i])
      res = stack.join('/').length > res ? stack.join('/').length : res
      deep++
    } else {
      stack.push(input[i])
      deep++
    }

  }
  return res
};

function isFile(fname) {
  return fname.split('.').length > 1
}

function findDeep(str) {
  let i = 0
  while(str[i] === '\t') {
    i++
  }
  return {
    deep: i,
    str: str.slice(i)
  }
}

