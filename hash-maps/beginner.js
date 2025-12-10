/**
 * Problem:
 * Given a string, return the first character that does NOT repeat.
 * If every character repeats at least once, return null.
 *
 * Example:
 * Input:  "swiss"
 * Output: "w"
 *
 * Approach (Hash Map — Frequency Counting):
 * - Use a hash map (object) to count how many times each character appears.
 * - First pass: loop through the string and build a frequency map.
 *      map = { s: 3, w: 1, i: 1 }
 *
 * - Second pass: loop through the string again IN ORDER.
 *   The first character with a frequency of 1 is the answer.
 *   (We cannot loop through the hash map because objects do not preserve order.)
 *
 * Why Hash Map?
 * - Checking if a character has appeared before is O(1).
 * - Counting frequencies becomes O(n) instead of O(n^2).
 *
 * Pattern:
 * Two-pass hash map frequency pattern.
 * First pass builds counts, second pass identifies the first unique item.
 */

function firstNonRepeatingChar(str) {
  const map = {};
  let count = 0;

  // First pass: build frequency map
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char in map) {
      map[char] += 1;   // seen before
    } else {
      map[char] = 1;    // first time seeing this char
    }
  }

  // second pass: return first char with count 1
  for(let i = 0; i < str.length; i++){
    if(map[str[i]] === 1) {
      return str[i];
    }
  }

  return null; // if none found
}
