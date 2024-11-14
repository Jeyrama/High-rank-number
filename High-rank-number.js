/*
Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples:
  [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
  [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
  [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/


// Solution

function highestRank(arr) {
  let getNum = num => arr.filter(n => n === num).length;
  return arr.sort((a,b) => getNum(b) - getNum(a) || b - a)[0];
}

// or

function highestRank(arr) {
  const map = new Map()
  
  arr.forEach(value => {
    if (map.has(value)) {
      map.set(value, map.get(value) + 1)
    } else {
      map.set(value, 1)
    }
  })
  
  let most_frequent, result
  
  most_frequent = 0
  
  map.forEach((frequent, number) => {
    if (most_frequent < frequent || most_frequent == frequent && result < number) {
      result = number
      most_frequent = frequent
    }
  })
  
  return result
}