const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var newNode = new Node(data);

        if (this.isEmpty()) {
                this._head = this._tail = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this.length += 1;

        return true;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {}
    

    insertAt(index, data) {

    }

    isEmpty() {
        return (this.length === 0)
    }

    clear() {
        this.length = 0;
        this._head = new Node(null, null, null);
        this._tail = new Node(null, null, null);
        return this;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}
module.exports = LinkedList;
