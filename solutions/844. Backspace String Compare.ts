// Problem Link:
// https://leetcode.com/problems/backspace-string-compare/

function backspaceCompare(s: string, t: string): boolean {
  let sValue = [],
    tValue = [],
    maxLen = s.length > t.length ? s.length : t.length;

  for (let a = 0; a < maxLen; a++) {
    s[a] !== undefined && (s[a] === "#" ? sValue.pop() : sValue.push(s[a]));
    t[a] !== undefined && (t[a] === "#" ? tValue.pop() : tValue.push(t[a]));
  }

  return sValue.join("") === tValue.join("");
}
