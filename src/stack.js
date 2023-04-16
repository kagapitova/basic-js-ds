const {NotImplementedError} = require('../extensions/index.js');
const {ListNode} = require("../extensions/list-node");

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
        this.fullStack = new ListNode()
        this.lastPosition = this.fullStack
    }

    push(value) {
        if (this.lastPosition.value !== undefined) {
            this.lastPosition.next = new ListNode()
            this.lastPosition = this.lastPosition.next
            this.lastPosition.value = value;
        } else {
            this.lastPosition.value = value;
        }
    }

    pop() {
        if (this.fullStack.value === undefined && this.fullStack.next === null) {
            return undefined
        }

        if (this.fullStack.value !== undefined && this.fullStack.next === null) {
            let result = this.fullStack.value;
            this.fullStack.value = undefined;
            return result
        }

        this.lastPosition = this.fullStack
        while (this.lastPosition.next.next !== null) {
            this.lastPosition = this.lastPosition.next
        }

        let result = this.lastPosition.next.value;
        this.lastPosition.next = null;
        return result
    }

    peek() {
        return this.lastPosition.value
    }
}

module.exports = {
  Stack
};
