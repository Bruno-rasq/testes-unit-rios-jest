const sum = (a, b) => {
  return a + b;
}

const inOneHour = () => {
  const now = Date.now()
  const oneHourInMili = 1 * 60 * 60 * 1000
  return now + oneHourInMili
}

function romanNumerals(n) {
  
  if (n <= 0) return -1

  const RomanMap = 
  { u: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], 
    d: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], 
    c: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], 
    m: ["M", "MM", "MMM", "MMMM", "MMMMM"] };
    
  let str = String(n); 
  let arry = Array
            .from(str)
            .reverse();
            
  let uni = Number(arry[0]); 
  let dez = Number(arry[1]); 
  let cen = Number(arry[2]); 
  let mil = Number(arry[3]);
  
arry[0] = RomanMap.u[uni - 1] ?? ""; arry[1] = RomanMap.d[dez - 1] ?? ""; arry[2] = RomanMap.c[cen - 1] ?? ""; arry[3] = RomanMap.m[mil - 1] ?? "";

return arry.reverse().join('');

}

//console.log(inOneHour())

module.exports = { sum, inOneHour, romanNumerals }