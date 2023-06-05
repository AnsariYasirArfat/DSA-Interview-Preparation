/* Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
 */

// Solution
function moveZeroes(nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2);
