/*
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.
*/

/*
Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]

Input: nums = [7,7], k = 1

Output: [7]
*/

// initial solution: setup count, loop through number and instantiate count if never seen before else count + 1
// then you do Object.values(obj) and sort() from biggest to smallest and return up to k elements
// edge case: if k = 1 then return arr[i]

// sort is O(nlogn) and loop is O(n) but because separate
// O(n + klogk) => O(klogk)
const topElements = (nums, k) => {
  if (k === 1) return nums[0];

  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }

  const sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  const keys = sortedEntries.slice(0, k).map((entry) => entry[0]);
  return keys;
};

// Best solution is BUCKET SORT
// Time complexity of O(n)
const topKFrequent = (nums, k) => {
  const frequencyMap = {};
  const bucket = [];
  const result = [];

  // Building a frequency map
  for (const num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Initializing buckets for each possible frequency
  for (let i = 0; i <= nums.length; i++) {
    bucket[i] = [];
  }

  // Placing elements into buckets based on their frequency
  for (const num in frequencyMap) {
    const freq = frequencyMap[num];
    bucket[freq].push(num);
  }

  // Collecting results from buckets, starting from the highest frequency
  for (let i = nums.length; i > 0 && result.length < k; i--) {
    if (bucket[i].length > 0) {
      result.push(...bucket[i]);
    }
  }

  return result.slice(0, k);
};

console.log(topElements([4, 4, 4, 2, 2, 100], 2));
// console.log(topKFrequent([4, 4, 4, 2, 2, 100], 2));
