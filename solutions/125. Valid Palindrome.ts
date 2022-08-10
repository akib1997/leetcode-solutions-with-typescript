// Problem Link:
// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
  if (s.length < 2) return true;
  let start = 0,
    str = s.toLowerCase().replace(/[^a-z0-9]/gi, ""),
    end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    end--;
    start++;
  }

  return true;
}
