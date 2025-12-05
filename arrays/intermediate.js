/**
 * Problem:
 * Return the largest number in an array.
 *
 * Example:
 * Input:  [3, 11, 7, 2, 9]
 * Output: 11
 *
 * Approach:
 * - Initialize `max` to the first element of the array.
 * - Loop through the array, starting from index 1.
 * - If the current value is larger than `max`, update `max`.
 * - Return `max` at the end.
 *
 * Pattern:
 * Tracking state while scanning an array (running maximum).
 *
 * Note:
 * Use `let` for `max` since it must be reassigned.
 */


function findMax(arr) {

  let max = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

/**
 * Problem:
 * Return the smallest number in an array.
 *
 * Example:
 * Input:  [14, 3, 9, 22, 5]
 * Output: 3
 *
 * Approach:
 * - Initialize `min` to the first element in the array.
 * - Loop through the array starting at index 1.
 * - Compare each value to `min`.
 * - If a value is smaller, update `min`.
 * - Return `min` at the end.
 *
 * Pattern:
 * Tracking state while scanning an array (running minimum).
 *
 * Notes:
 * - Use `let` because the variable must be reassigned.
 * - Starting at index 1 avoids a redundant comparison with the initial value.
 */


function findMin(arr) {

  let min = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}


/**
 * Problem:
 * Given an array of numbers and a target value, return the index where the
 * target appears. If the target is not found, return -1.
 *
 * Example:
 * Input:  [4, 9, 1, 7, 3], target = 7
 * Output: 3   // 7 appears at index 3
 *
 * Approach:
 * - Loop through the array.
 * - At each index, check if the value matches the target.
 * - If it does, return the current index immediately.
 * - If the loop finishes with no match, return -1.
 *
 * Pattern:
 * Linear search with early exit.
 */

function findIndex(arr, target) {

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return i;
    }
  }
  return -1; // fallback
}

/**
 * Problem:
 * Given an array of numbers and a target value, return how many times
 * the target appears in the array.
 *
 * Example:
 * Input:  [5, 7, 7, 2, 7], target = 7
 * Output: 3
 *
 * Approach:
 * - Initialize `count` to 0.
 * - Loop through the array.
 * - Each time the current value equals the target, increment `count`.
 * - After the loop finishes, return `count`.
 *
 * Pattern:
 * Linear scan + conditional counting.
 *
 * Note:
 * No special "not found" condition is required — a count of 0 naturally
 * represents that the target never appeared.
 */


function countTarget(arr, target) {
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target) count++;
  }
  return count;
}

/**
 * Problem:
 * Given an array of numbers and a target value, return true if the target
 * appears in the array, and false otherwise.
 *
 * Example:
 * Input:  [4, 1, 9, 2], target = 9
 * Output: true
 *
 * Approach:
 * - Loop through the array.
 * - If any value equals the target, return true immediately (early exit).
 * - If the loop finishes with no match, return false.
 *
 * Pattern:
 * Linear search with boolean return.
 *
 * Note:
 * Returning false inside the loop on a non-match would exit too early—
 * fallback logic must come after the loop completes.
 */


function includesTarget(arr, target) {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target){
      return true;
    }
  }
  return false;
}


function isPalindrome(arr) {

  let left = 0;
  let right = arr.length -1;

  while(left < right){
    if(arr[left] === arr[right]){
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
