/**
 * Problem:
 * Determine whether an array of characters is a palindrome
 * (reads the same forward and backward).
 *
 * Example:
 * Input:  ['a', 'b', 'b', 'a']
 * Output: true
 *
 * Approach (Two-Pointers):
 * - Use two pointers: one at the start (`left = 0`) and one at the end (`right = arr.length - 1`).
 * - While left < right:
 *     - Compare characters at left and right.
 *     - If they differ, return false immediately.
 *     - If they match, move both pointers inward (left++, right--).
 * - If the loop finishes with no mismatches, return true.
 *
 * Pattern:
 * Two-pointers moving inward to compare symmetric positions.
 */

function isPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Problem:
 * Reverse an array in place using the two-pointer technique.
 *
 * Example:
 * Input:  [1, 2, 3, 4]
 * Output: [4, 3, 2, 1]
 *
 * Approach (Two-Pointers):
 * - Set `left` at index 0 and `right` at the last index.
 * - While left < right:
 *     - Swap the values at the left and right positions using a temp variable.
 *     - Move pointers inward (left++, right--).
 * - Return the modified array.
 *
 * Pattern:
 * Two-pointers moving inward with element swapping.
 *
 * Notes:
 * Only ONE swap per loop is needed. Using two swaps (or wrong pointer movement)
 * will break the logic.
 */


function reverseArray(arr) {
  let temp;
  let left = 0;
  let right = arr.length - 1;

  while(left < right){

    temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;

    left++;
    right--;
  }

  return arr;
}


