/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

/*
Input: s = "racecar", t = "carrace"

Output: true
*/

// first idea is to count the amount of letters and compare the object
// second idea is to sorting the word in alpabetical order and compare the strings

// Time complexity is O(n) because two separate loop was used (not nested)
// Counting objs is O(1)
// If you add them together it's O(n) + O(n) + O(1) = O(n)
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let count = {};

  for (let char of s) {
    if (!count[char]) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  for (let char of t) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  return true;
};

// sorting algo is O(nlogn)
// maybe better for small and simple input size of (n)
const isAnagramTwo = (s, t) => {
  const sortedOne = s.split("").sort().join("");
  const sortedTwo = t.split("").sort().join("");

  if (sortedOne !== sortedTwo) return false;
  return true;
};

// console.log(isAnagram("racecar", "carrace"));
console.log(isAnagramTwo("racecar", "carrace"));
