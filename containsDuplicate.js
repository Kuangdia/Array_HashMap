/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
*/

/*
Input: nums = [1, 2, 3, 3]

Output: true
*/

// Initial solution with time complexity of O(n^2)
// a single for loop that iterates through all elements of an array (or any collection of size n) is O(n)
// Array.includes() method performs a linear search through arr is O(n)
class Solution {
  hasDuplicate(nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) {
        return true;
      }
      arr.push(nums[i]);
    }
    return false;
  }
}

// Optimized Hashmap solution of O(n)
// a single for loop that iterates through all elements of an array (or any collection of size n) is O(n)
// For each element, it performs two O(1) operations: checking if the element is in the Set and possibly adding the element to the Set
// Since these O(1) operations are performed n times (once for each element in nums), the overall time complexity is O(n) x O(1) = O(n)

const hasDuplicate = (nums) => {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      return true;
    }
    numSet.add(nums[i]);
  }
  return false;
};
