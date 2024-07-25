/*
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.
*/

/*
Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
*/

/*
Input: nums = [4,5,6], target = 10

Output: [0,2]
*/

// Issues with this is loop is O(n) AND indexOf is another O(n) => O(n^2)
const twoSum = (nums, target) => {
  let numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const numTarget = target - nums[i];

    if (numSet.has(numTarget)) {
      return [nums.indexOf(numTarget), i];
    }
    numSet.add(nums[i]);
  }
};

// To optimize you can use Map()
// Map() and Set() insertion and lookup are both O(1)
// Only one loop => O(n)
const twoSum2 = (nums, target) => {
  let numSet = new Map();

  for (let i = 0; i < nums.length; i++) {
    let numTarget = target - nums[i];

    if (numSet.has(numTarget)) {
      return [numSet.get(numTarget), i];
    }
    numSet.set(nums[i], i);
  }
};

// console.log(twoSum([3, 4, 5, 6], 7));
console.log(twoSum2([3, 4, 5, 6], 7));
