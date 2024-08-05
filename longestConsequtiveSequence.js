/*
Given an array of integers nums, return the length of the longest consecutive sequence of elements.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

You must write an algorithm that runs in O(n) time.
*/

/*
Input: nums = [2,20,4,10,3,4,5]
Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5]

Input: nums = [0,3,2,5,4,6,1,1]
Output: 7
*/

// initial solution: sort the numbers
// loop through to see if they are n+1
// keep a count variable
// this is still O(n) because you're performing set O(1) inside second loop
// despite the nested appearance of the loops, the total number of operations related to checking consecutive numbers is linear in relation to the number of items in the input array.
function longestConsecutive(nums) {
  if (nums.length < 1) return 0;

  let numSet = new Set(nums);
  let longest = 1;

  for (let num of nums) {
    // check if num is the start of a sequence
    if (!numSet.has(num - 1)) {
      let current = 1;

      // Check to see if num+1 exists and add to currentSequence
      let currentNum = num + 1;
      while (numSet.has(currentNum)) {
        currentNum++;
        current++;
      }
      longest = Math.max(longest, current);
    }
  }
  return longest;
}

console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]));
