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

/**
 * Problem:
 * Given a sorted array, remove duplicates in-place so each unique value
 * appears exactly once. Return the count of unique elements.
 *
 * Example:
 * Input:  [1, 1, 2, 2, 2, 3]
 * Output: 3
 * Modified array (first 3 positions): [1, 2, 3, ...]
 *
 * Approach (Two Pointers — Slow/Fast):
 * - Since the array is sorted, duplicates appear next to each other.
 * - Use two pointers:
 *     slow → tracks the position of the last unique value.
 *     fast → scans ahead looking for the next unique value.
 *
 * - Steps:
 *     1. Initialize slow = 0 (first element is always unique).
 *     2. Loop fast from index 1 to the end.
 *     3. If arr[fast] !== arr[slow], we found a new unique element:
 *          - Move slow forward by one.
 *          - Copy arr[fast] into arr[slow].
 *     4. Continue until fast scans the whole array.
 *
 * - The number of unique values is (slow + 1),
 *   because slow ends on the index of the last unique element.
 *
 * Pattern:
 * Slow/Fast pointer technique for filtering values in-place.
 */

function removeDuplicates(arr) {

  let slow = 0;

  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }

  return slow + 1;
}

/**
 * Problem:
 * Given an array of numbers, move all zeroes to the end while keeping
 * the relative order of non-zero elements the same. Do this in-place
 * without using extra arrays.
 *
 * Example:
 * Input:  [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 *
 * Approach (Two Pointers — Slow/Fast):
 * - fast pointer scans every element in the array.
 * - slow pointer tracks the index where the next non-zero should be written.
 *
 * - When arr[fast] is non-zero:
 *      • write arr[fast] into arr[slow]
 *      • increment slow
 *
 * - After fast completes scanning:
 *      • all non-zero values are compacted at the front of the array
 *      • slow now points to the first index where zeros should begin
 *      • fill the rest of the array with zeros
 *
 * Pattern:
 * Slow/Fast pointer technique used for in-place filtering or compaction
 * while maintaining relative order. Very common interview pattern.
 */


function moveZeroes(arr) {
  let slow = 0;

  // Move all non-zero values to the front
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      arr[slow] = arr[fast];
      slow++;
    }
  }

  // Fill the rest with zeros
  while (slow < arr.length) {
    arr[slow] = 0;
    slow++;
  }

  return arr;
}
