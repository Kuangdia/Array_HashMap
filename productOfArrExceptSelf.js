/*
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in O(n) time without using the division operation?
*/

/*
Input: nums = [1,2,4,6]
Output: [48,24,12,8]

Input: nums = [-1,0,1,2,3]
Output: [0,-6,0,0,0]
*/

/*
1 [1, 2, 3, 4] 1

1 [1, 1, 2, 6] 1= left
1 [24, 12, 4, 1] 1 = right

[24, 12, 8, 6] = output
*/

function productExceptSelf(nums) {
  // create result array with same length
  let result = new Array(nums.length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    // leftProduct accumulates the next number. Multiply them
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    // No need to create another array, just multiply current rightProduct with result to get output array
    result[i] *= rightProduct;
    // rightProduct accumulates the next number. Multiply them
    rightProduct *= nums[i];
  }
  return result;
}

console.log(productExceptSelf([1, 2, 4, 6]));
