// Problem Link:
// https://leetcode.com/problems/reorder-list/submissions/

// class ListNode {
//    val: number;
//    next: ListNode | null;
//    constructor(val?: number, next?: ListNode | null) {
//      this.val = val === undefined ? 0 : val;
//      this.next = next === undefined ? null : next;
//    }
//  }

function reorderListStack(head: ListNode | null): void {
  const stack = [];
  let tempHead = head;

  while (tempHead) {
    stack.push(tempHead);
    tempHead = tempHead.next;
  }
  let start = 0,
    end = stack.length - 1,
    first = true;
  while (start < end) {
    if (first) {
      stack[end].next = null;
      stack[start].next = stack[end];
      first = false;
      start++;
    } else {
      stack[start].next = null;
      stack[end].next = stack[start];
      first = true;
      end--;
    }
  }
}
