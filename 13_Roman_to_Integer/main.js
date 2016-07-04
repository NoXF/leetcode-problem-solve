/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var res = 0
  var table = {
    'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9,
    'X': 10, 'XX': 20, 'XXX': 30, 'XL': 40, 'L': 50, 'LX': 60, 'LXX': 70, 'LXXX': 80, 'XC': 90,
    'C': 100, 'CC': 200, 'CCC': 300, 'CD': 400, 'D': 500, 'DC': 600, 'DCC': 700, 'DCCC': 800, 'CM': 900,
    'M': 1000, 'MM': 2000, 'MMM': 3000
  }

  // Add flag of end
  s += 'F'
  var i = 0
  var j = 0
  var len = s.length
  while (i != len-1) {
    if ( !table[s.substring(i, j+1)] ) {
      res += table[s.substring(i, j)]
      i = j
    }
    j++
  }
  return res
};
