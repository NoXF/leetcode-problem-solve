/**
 * @param {number} num
 * @return {strin}
 */
var intToRoman = function(num) {
  var table = [
    ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    ['','M','MM','MMM']
  ]
  var roman = '';
  roman += table[3][ Math.floor(num / 1000)]
  roman += table[2][ Math.floor(num / 100) % 10]
  roman += table[1][ Math.floor(num / 10) %10]
  roman += table[0][ Math.floor(num % 10)]
  return roman
};