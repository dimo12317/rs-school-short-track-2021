/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.value = null;
    this.next = null;
  }

  push(element) {
    let a = this;
    while (a.next != null) {
      a = a.next;
    }
    a.next = new Stack();
    a = a.next;
    a.next = null;
    a.value = element;
  }

  pop() {
    let a = this;
    if (a.next === null) {
      const b = a.value;
      a = null;
      return b;
    }
    while (a.next.next != null) {
      a = a.next;
    }
    const b = a.next.value;
    a.next = null;
    return b;
  }

  peek() {
    let a = this;
    while (a.next != null) {
      a = a.next;
    }
    return a.value;
  }
}

module.exports = Stack;
