// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Tip : keep adding array elements as long as sum is >= 0 , if sum turns 0, reset and start summing again

let nums = [1];

function maxSubArray(nums) {
  let maxSum = nums[0];
  let current = 0;
  debugger;

  for (i = 0; i < nums.length; i++) {
    if (current >= 0) {
      current = current + nums[i];
    } else {
      current = nums[i];
    }
    maxSum = Math.max(current, maxSum);
  }

  console.log('max sum  = ' + maxSum);
}

maxSubArray(nums);
