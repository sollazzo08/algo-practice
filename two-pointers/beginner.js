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
