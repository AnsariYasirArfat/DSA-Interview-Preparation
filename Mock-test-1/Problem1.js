// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// a. 1 <= nums.length <= 10^4
// b. -2^31 <= nums[i] <= 2^31 - 1

// Solution
function moveZeroes(nums) {
  let nonZeroIndex = 0; // Index to keep track of non-zero elements

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is non-zero, move it to the nonZeroIndex position
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining elements with 0's
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]
