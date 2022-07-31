// Problem Link:
// https://leetcode.com/problems/reorder-list/submissions/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  let slow: ListNode | null = head,
    fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let fastPart = head,
    lastPart = reverse(slow!.next);
  // break Linkedlist
  slow!.next = null;

  while (lastPart) {
    let fNext = fastPart!.next;
    let lNext = lastPart.next;

    fastPart!.next = lastPart;
    lastPart.next = fNext;

    fastPart = fNext;
    lastPart = lNext;
  }
}

function reverse(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}
