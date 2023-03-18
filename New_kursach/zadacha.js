// // Задача: Сравнивать вложенность массивов. К примеру: [[[],[]]] - [[[],[]]] -> true
// //                                                     [[1,1], ] - [,[1,1]] -> false
// const arr = [[],[]]
// const rra = [[3],3]

// const test = (first,second) => {
//     let exampleFirst = JSON.stringify(first).replace(/[1-9]/gi,1) 
//     let exampleSecond = JSON.stringify(second).replace(/[1-9]/gi,1) 
//     console.log(exampleSecond,exampleFirst)
//     console.log(exampleFirst === exampleSecond)

// }   

// const testSecond = (first,second) => {
//     let lenFirst = first.length;
//     let lenSecond = second.length;
//     if (lenFirst != lenSecond) return false
//     if (lenFirst === lenSecond === 0) return true
//     for (let i of first) {
//         if (typeof(first[i]) === 'object' && typeof(second[i]) != 'object') {
//             return false
//         }
//         else if () {
//             return testSecond(first[i], second[i])
//         }
//     }
//     return true
// }

// if (this.length !== other.length) {
//     return false;
//   }
//   for (var i = 0; i < this.length; i++) {
//     if (isArray(this[i]) && isArray(other[i])) {
//       if (!this[i].sameStructureAs(other[i])) { return false; }
//     } else if (!isArray(this[i]) && isArray(other[i])) {
//       return false;
//     } else if (isArray(this[i]) && !isArray(other[i])) {
//       return false;
//     }
//   }
//   return true


// Array.prototype.sameStructureAs = function (other) {
//     if (this.length !== other.length) {
//       return false;
//     }
//     for (var i = 0; i < this.length; i++) {
//       if (isArray(this[i]) && isArray(other[i])) {
//         if (!this[i].sameStructureAs(other[i])) { return false; }
//       } else if (!isArray(this[i]) && isArray(other[i])) {
//         return false;
//       } else if (isArray(this[i]) && !isArray(other[i])) {
//         return false;
//       }
//     }
//     return true
// };

 // проверяяем, если элемент массива это массив и равен массиву другого массива то тру
// console.log(testSecond(arr,rra))


// const chai = require("chai");
// const assert = chai.assert;

// describe("Tests", () => {
//   it("test", () => {
//     assert.isTrue([1,1,1].sameStructureAs([2,2,2]), "[1,1,1] same as [2,2,2]"); +++

//     assert.isTrue([1,[1,1]].sameStructureAs([2,[2,2]]), "[1,[1,1]] same as [2,[2,2]]"); +++
//     assert.isNotTrue([1,[1,1]].sameStructureAs([[2,2],2]), "[1,[1,1]] not same as [[2,2],2]"); +++
//     assert.isNotTrue([1,[1,1]].sameStructureAs([2,[2]]), "[1,[1,1]] not same as [2,[2]]"); +++

//     assert.isTrue([[[],[]]].sameStructureAs([[[],[]]]), "[[[],[]]] same as [[[],[]]]"); +++
//     assert.isNotTrue([[[],[]]].sameStructureAs([[1,1]]), "[[[],[]]] not same as [[1,1]]"); +++

//     assert.isTrue([1,[[[1]]]].sameStructureAs([2,[[[2]]]]), "[1,[[[1]]]] same as [2,[[[2]]]]"); +++

//     assert.isNotTrue([].sameStructureAs(1), "[] not same as 1"); +++
//     assert.isNotTrue([].sameStructureAs({}), "[] not same as {}"); +++

//     assert.isTrue([1,'[',']'].sameStructureAs(['[',']',1]), "[1, ] same as ['[',']',1]"); --- [1,'hui'] -> ['hui',1]

//     assert.isNotTrue( [1,2].sameStructureAs([[3],3]), "[1,2] not same as [[3],3]" );
//   });
// });



// Минимальную систему СС, 
// при котором число представляется в виде 1

// const systmaS = (number) => {
//   let n = number - 1;
//   let result = []
//   while (n > 0) {
//     let num = number.toString(n)
//     for (let i of num) {
//       if (num[i] != '1') {
//         break
//       }
//     }
//     num = ''
//     result.push(num)
//   }
//   return result
// }

// function orderWeight(strng) {
//   let result = [];
//   let finalResult = [];
//   let obj = {}
//   let arr = strng.split(' ')
//   for (let i of arr) {
//     let count = 0;
//     for (let j of i) {
//       count += Number(j)
//     }
//     obj[i] = count
//     result.push(count)
//   }
//   result.sort((a,b) => a - b)
//   for (let k of result) {
//     for (let t in obj) {
//       if (k === obj[t]) {
//         finalResult.push(t)
//       }
//       console.log(obj[t])
//     }
//   }
//   return finalResult
// }

// orderWeight("103 123 4444 99 2000")

// function make(arr, el) {
//   var i, i_m, item;
//   var len = arr.length;
//   var res = [];

//   for(i = len; i >= 0; i--) {
//     res.push(
//       ([]).concat(
//         arr.slice(0, i),
//         [el],
//         arr.slice(i, i_m)
//       )
//     );
//   }

//   return res;
// }

// function combinations(arr) {
//   var prev, curr, el, i;
//   var len = arr.length;

//   curr = [[arr[0]]];

//   for(i = 1; i < len; i++) {
//     el = arr[i];
//     prev = curr;
//     curr = [];

//     prev.forEach(function(item) {
//       curr = curr.concat(
//         make(item, el)
//       );
//     });
//   }

//   return curr;
// }

// m = [1,2,3,4,5,6,7,8,9,10]
// console.log(combinations(m))
// const middlePermutation = (string) => {
//   const recur = (string, prefix) => {
//       if (string.length === 0) {
//           return [prefix];
//       } else {
//           var out = [];
//           for (var i = 0; i < string.length; i++) {
//               var pre = string.substring(0, i);
//               var post = string.substring(i + 1);
//               out = out.concat(recur(pre + post, string[i] + prefix));
//           }
//           return out;
//       }
//   }
//   var distinct = {};
//   recur(string, "").forEach(function(result) {
//       distinct[result] = true;
//   });
//   let finalResult = Object.keys(distinct);
//   finalResult.sort()
//   console.log(finalResult)
//   if (finalResult.length % 2 === 0) {
//     let len = finalResult.length
//     let finallllllllllllll = len / 2 - 1
//     return finalResult[finallllllllllllll]
//   }
//   else {
//     let finallllllllllllll = len / 2
//     return finalResult[finallllllllllllll]
//   }
// }

// console.log(middlePermutation("abcdxg")) // abcdx => cbxda (c -> xdab)
                                         // abcdxg => cxgdba (c -> gxdba)

// const shifting = n => {
//   // let testPop = n.pop(2)
//   n.splice(1, 1)
//   return n
// // }

// // console.log(shifting([1,2,3,4,5,6,7,8]))

// // const division = (t,a,b) => {
// //   let task = (t**a - 1) / (t**b - 1)
// //   if (Number.isInteger(task)) {
// //     let taskToPrecision = task.toPrecision(100)
// //     let replacedTask = taskToPrecision.replace(/\.?0+$/gm,'')
// //     if (replacedTask.length < 100) return replacedTask
// //   }
// //   else {
// //     return "Not an integer with less than 100 digits"
// //   }
// // }

// // console.log(division(21,42,7))



// // РЕШЕНИЕ КАТЫ 
// // const factorial = (n) => {
// //   if (n === 1) return n
// //   else return n * factorial(n - 1)
// // }

// // function middlePermutation(s) {
// //   let ans = '';
// //   let tmp = s.split('').sort(); // 'g','y','a','m','x','s','n','q','o','c','i','e','p','w','r','h','u','d','v','z','b'
// //   let dividend = factorial(tmp.length) /2 //21!
// //   for (let i; i<tmp.length;i++) {
// //     let perms = (factorial(tmp.length) / tmp.length)
// //     if (tmp.length === 1) {
// //       ans += tmp[0]
// //       break
// //     }
// //     let letter = tmp[Math.ceil(dividend / perms) - 1]
// //     ans += letter
// //     tmp.splice(letter,1)
// //     dividend -= perms * (Math.floor(dividend / perms))
// //   }
// //   return ans
// // }

// //  "c" + Recursive("abde").
// // cedba
// // ("abcdx"),"cbxda")
// // c + abdx
// // cxdba

// // def solution(a):
// //     L = len(a)
// //     if L == 1:
// //         return a[0]
// //     m=min(a)
// //     for i in range(L):
// //         if a[i] != m:
// //         if a[i]==1:
// //             return 1*L
// //     return m*L

// // const minCounter = (arr) => {
// //   let m = 10000
// //   for (let i of arr) {
// //     if (i < m) {
// //       m = i
// //     }
// //   }
// //   return m
// // }
// // console.log(minCounter([1,2,3,4,5,6,7,8,9,10]))
// const nextBigger = (n) => {
//   console.log(n)
//   let nInteger = n;
//   let string = String(n)
//   const recur = (string, prefix) => {
//       if (string.length === 0) {
//           return [prefix];
//       } else {
//           var out = [];
//           for (var i = 0; i < string.length; i++) {
//               var pre = string.substring(0, i);
//               var post = string.substring(i + 1);
//               out = out.concat(recur(pre + post, string[i] + prefix));
//           }
//           return out;
//       }
//   }
//   var distinct = {};
//   recur(string, "").forEach(function(result) {
//       distinct[result] = true;
//   });
//   let finalResult = Object.keys(distinct);
//   finalResult.sort()
//   // console.log(finalResult)
//   let finalIndex = finalResult.indexOf(nInteger);
//   console.log(finalResult.indexOf(1234567890))
//   // for (let number of finalResult) {
//   //   if (number > n) {
//   //     return Number(number)
//   //   }
//   // }
//   // return -1
// }

// console.log(nextBigger(1234567890))


// const arrTest = n => {
//   let index = 2
//   return n.indexOf(index)
// }

// console.log(arrTest([1,3,4,2]))

function dblLinear(n) {
  var ai = 0, bi = 0, eq = 0;
  var sequence = [1];
  while (ai + bi < n + eq) {
    var y = 2 * sequence[ai] + 1;
    var z = 3 * sequence[bi] + 1;
    console.log(y,z)
    if (y < z) { sequence.push(y); ai++; }
    else if (y > z) { sequence.push(z); bi++; }
    else { sequence.push(y); ai++; bi++; eq++; }
  }
  console.log(sequence)
  return sequence.pop();
}

console.log(dblLinear(100))
console.log(dblLinear1(100))


function dblLinear1(n) {
  console.log(n)
    let u = [1]
    let x = 0
    while (x != n) {
      let y = 2 * u [x] + 1
      let z = 3 * u[x] + 1
      console.log(y,z)
      if (u.indexOf(y) === -1) {
        u.push(y)
      }
      if (u.indexOf(z) === -1) {
        u.push(z)
      }
      x ++
    }
    
//   const uniqueNumbers = [...new Set(u)]
  const sortedArr = u.sort((a,b) => a - b)
  console.log(sortedArr)
  //   console.log(uniqueNumbers)
  return sortedArr[n]
}

