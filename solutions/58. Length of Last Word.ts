// Problem Link:
// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
  let trimedStr = s.trim().split(" ");
  return trimedStr[trimedStr.length - 1].length;
}
