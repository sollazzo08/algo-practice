/**
 * Problem:
 * Count how many times the number 7 appears in an array.
 *
 * Example:
 * Input:  [3, 7, 2, 7, 7]
 * Output: 3
 *
 * Approach:
 * - Initialize a counter at 0.
 * - Loop through the array.
 * - Each time the value equals 7, increment the counter.
 * - Return the final count.
 *
 * Pattern:
 * Simple linear scan + conditional counting.
 */

function countSevens(arr) {
  const SEVEN = 7;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === SEVEN) {
      count++;
    }
  }

  return count;
}

/**
 * Problem:
 * Return the sum of all even numbers in an array.
 *
 * Example:
 * Input:  [4, 3, 2, 7, 8]
 * Output: 14
 *
 * Approach:
 * - Initialize a running sum at 0.
 * - Loop through each value in the array.
 * - Check if the value is even using num % 2 === 0.
 * - If it is, add it to the running sum.
 * - Return the final sum.
 *
 * Pattern:
 * Basic iteration + conditional accumulation.
 */

function sumOfEvenNumbers(arr){
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

/**
 * Problem:
 * Count how many numbers in an array are odd.
 *
 * Example:
 * Input:  [3, 7, 2, 8, 11]
 * Output: 3   // (3, 7, 11 are odd)
 *
 * Approach:
 * - Initialize a counter at 0.
 * - Loop through the array.
 * - A number is odd when num % 2 !== 0 (it has a remainder when divided by 2).
 * - Increment the counter each time an odd value is found.
 * - Return the counter.
 *
 * Pattern:
 * Basic iteration + conditional counting (similar to Problem #1).
 */


function countOddNumbers(arr) {
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      count++;
    }
  }
  return count;
}

/**
 * Problem:
 * Given an array of strings, return how many of them have a length greater than 3.
 *
 * Example:
 * Input:  ["dog", "apple", "sun", "tree"]
 * Output: 2   // ("apple" and "tree" have length > 3)
 *
 * Approach:
 * - Initialize a counter at 0.
 * - Loop through each string in the array.
 * - Use the built-in .length property to check the string's length.
 * - Increment the counter when the length is greater than 3.
 * - Return the final count.
 *
 * Pattern:
 * Basic iteration + property check.
 *
 * Note:
 * In JavaScript, .length is a constant-time property lookup (O(1)),
 * not a loop over characters, so it is efficient to use.
 */


function countLongStrings(arr) {
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 3){
      count++;
    }
  }
  return count;
}

/**
 * Problem:
 * Given an array of numbers and a target value, return how many numbers
 * in the array are greater than the target.
 *
 * Example:
 * Input:  [5, 12, 3, 20, 7], target = 10
 * Output: 2   // (12 and 20 are greater than 10)
 *
 * Approach:
 * - Initialize a counter at 0.
 * - Loop through the array.
 * - Compare each value to the target.
 * - If a value is greater than the target, increment the counter.
 * - Return the final counter.
 *
 * Pattern:
 * Basic iteration + comparison with an external parameter.
 */


function countGreaterThan(arr, target) {
  let count = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > target){
      count++;
    }
  }
  return count;
}
