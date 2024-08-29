/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

/*
Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false
*/

// Time complexity O(n)
// better if exit early sequences
function isSubsequence(s, t) {
  let count = 0

  for (let i = 0; i < t.length; i++) {
    // if s[count] = a and a matches we add 1 to count to b
    if (t[i] === s[count]) {
      count++
    }
    // if count reaches s.length then it is a subsequence can exit early
    if (count === s.length) return true
  }
  // if entire t.length goes by and there is no b then we compare result
  return count === s.length
}

// Time complexity O(n+m) running both i and j
// Two pointer solution
function isSubsequence(s, t) {
  let i = 0 // Pointer for s
  let j = 0 // Pointer for t

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }

  return i === s.length
}

console.log(isSubsequence("axc", "ahbgdc"))
