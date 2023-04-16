const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
    let node1 = new ListNode(null);
    let nodeCopy = node1;
    let lCopy = l;
    while (lCopy !== null) {
        if (lCopy.value !== k) {
            nodeCopy.value = lCopy.value
            if(lCopy.next !== null){
                nodeCopy.next = new ListNode(null);
                nodeCopy = nodeCopy.next;
            }
        }
        lCopy = lCopy.next;
    }
    let nodeCopy2 = node1
    while(nodeCopy2.next !== null && nodeCopy2.next.value !== null ){
        nodeCopy2 = nodeCopy2.next
    }
    nodeCopy2.next = null

    return node1;
}

module.exports = {
  removeKFromList
};
