/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let a = l;
  let b = l;
  while (b.next !== null) {
    if (b.value === k) {
      a = b.next;
    }
    if (b.next === null) {
      break;
    }
    if (b.next.value === k) {
      if (b.next.next === null) {
        b.next = null;
      } else {
        b.next = b.next.next;
      }
    }
    if (b.next !== k) {
      b = b.next;
    }
  }
  b = a;
  return b;
}

module.exports = removeKFromList;
