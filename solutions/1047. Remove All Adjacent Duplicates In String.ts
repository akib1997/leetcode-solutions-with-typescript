// Problem Link:
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

function removeDuplicates(s: string): string {
  const stack: string[] = [],
    length = s.length;

  for (let a = 0; a < length; a++) {
    let current = s[a];
    if (stack.length > 0) {
      if (current === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else {
      stack.push(current);
    }
  }
  return stack.join("");
}
