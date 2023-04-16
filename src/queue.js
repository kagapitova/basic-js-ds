const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.queue = new ListNode(null)
        this.curentQue = this.queue
    }

    getUnderlyingList() {
       return this.curentQue
    }

    enqueue(value) {
        if(this.queue.value !== null){
            this.queue.next = new ListNode(null)
            this.queue = this.queue.next
            this.queue.value = value;
        } else {
            this.queue.value = value;
        }

    }

    dequeue() {
        let bigest = this.curentQue.value
        if(this.curentQue.next !== null){
            this.curentQue = this.curentQue.next
        } else {
            this.queue = new ListNode(null);
            this.curentQue = this.queue;
        }
        return bigest
    }
}

module.exports = {
    Queue
};

