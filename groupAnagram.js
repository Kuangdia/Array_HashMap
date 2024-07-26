/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

/*
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
*/

// initial solution sort the alphabet and create obj to loop through and see if they have same letters, if not push to array else create new array

// For each string in the array, you split it into characters, sort those characters, and then join them back into a string
// Sorting a string of length k takes O(klogk) time
// Assuming the average length of a string is k, for n strings, this step will take
// O(n * klogk) time
// Creating and updating the object takes O(1)
// => it takes O(n * klogk) time
const groupAnagram = (arr) => {
  if (arr.length === 1) return [arr];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].split("").sort().join("");

    if (!obj[sorted]) {
      obj[sorted] = [];
    }
    obj[sorted].push(arr[i]);
  }
  return Object.values(obj);
};

console.log(groupAnagram(["x"]));

// Optimized solution
const groupAnagram = (arr) => {
  const obj = {};

  for (const word of arr) {
    const sorted = word.split("").sort().join("");

    if (!obj[sorted]) {
      obj[sorted] = [];
    }

    obj[sorted].push(word);
  }

  return Object.values(obj);
};
