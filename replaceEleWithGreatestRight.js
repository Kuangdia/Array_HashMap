/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.
*/

/*
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
*/

// Time complexity O(n^2)
// loop O(n) + arr.slice O(n)
// const replaceElements = (arr) => {
//   if (arr.length === 1) return [-1]

//   let result = []
//   for (let i = 0; i < arr.length - 1; i++) {
//     let max = Math.max(...arr.slice(i + 1))
//     result.push(max)
//   }
//   result.push(-1)
//   return result
// }

// Time complexity O(n) single loop
const replaceElements = (arr) => {
  let max = -1

  for (let i = arr.length - 1; i >= 0; i--) {
    // don't want to lose arr[i]
    let current = arr[i]
    // makes sure arr[i] becomes the old max first before moving on
    arr[i] = max
    // makes the comparison to get new max
    if (current > max) {
      max = current
    }
  }
  return arr
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]))
