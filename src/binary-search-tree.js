const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.fullTree = new Node()
    }

    root() {
        if (this.fullTree.data === undefined) {
            return null
        }
        return this.fullTree;
    }

    add(value) {
        if (this.fullTree.data === undefined) {
            this.fullTree.data = value;
            return;
        }
        let current = this.fullTree;
        let last = current;
        while (current !== null) {
            last = current;
            if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        if (value < last.data) {
            last.left = new Node(value);
        } else {
            last.right = new Node(value);
        }

    }

    has(value) {
        let current = this.fullTree
        while (current !== null) {
            if (value < current.data) {
                current = current.left
            } else if (value > current.data) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    find(value) {
        let current = this.fullTree
        while (current !== null) {
            if (value < current.data) {
                current = current.left
            } else if (value > current.data) {
                current = current.right
            } else {
                return current
            }
        }
        return null
    }

    remove(value) {
        let current = this.fullTree
        if (this.has(value) === false) {
            return
        }

        if (this.fullTree.data === value) {
            let childLeft = this.fullTree.left;
            let childRight = this.fullTree.right;
            this.fullTree = null
            if (childLeft === null && childRight === null) {
                return
            }

            if (childLeft === null && childRight !== null) {
                this.fullTree = childRight
                return
            }

            if (childLeft !== null && childRight === null) {
                this.fullTree = childLeft
                return
            }

            if (childRight !== null && childLeft !== null) {
                let minForChildRight = childRight
                while (minForChildRight.left !== null) {
                    minForChildRight = minForChildRight.left
                }
                minForChildRight.left = childLeft
                this.fullTree = childRight
                return
            }
        }

        while (value !== current?.left?.data && value !== current?.right?.data) {
            if (value < current.data) {
                current = current.left
            } else {
                current = current.right
            }
        }

        let direction = value === current.right?.data
            ? 'right'
            : 'left';

        let childLeft = current[direction].left;
        let childRight = current[direction].right;
        current[direction] = null
        if (childLeft === null && childRight === null) {
            return
        }

        if (childLeft === null && childRight !== null) {
            current[direction] = childRight
            return
        }

        if (childLeft !== null && childRight === null) {
            current[direction] = childLeft
            return
        }

        if (childRight !== null && childLeft !== null) {
            let minForChildRight = childRight
            while (minForChildRight.left !== null) {
                minForChildRight = minForChildRight.left
            }
            minForChildRight.left = childLeft
            current[direction] = childRight
            return;
        }
    }

    min() {
        let current = this.fullTree
        while (current.left !== null){
            current = current.left
        }
        return current.data
    }

    max() {
        let current = this.fullTree
        while (current.right !== null){
            current = current.right
        }
        return current.data
    }
}

module
    .exports = {
    BinarySearchTree
};