/**
 * Problem:
 * Given a sorted array, return true if any two numbers sum to the target.
 * Otherwise return false.
 *
 * Example:
 * Input:  [1, 2, 4, 7, 11, 15], target = 15
 * Output: true   // 4 + 11 = 15
 *
 * Approach (Two-Pointers):
 * - Set `left` at the start and `right` at the end.
 * - Compute `sum = arr[left] + arr[right]`.
 * - If sum < target: move left pointer forward to increase sum.
 * - If sum > target: move right pointer backward to decrease sum.
 * - If sum === target: return true.
 * - If pointers cross, no pair exists → return false.
 *
 * Pattern:
 * Two-pointers on sorted arrays — intelligent movement based on sum.
 */

function twoSumSorted(arr, target) {

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {

    const sum = arr[left] + arr[right];

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return true;
    }
  }

  return false;
}
