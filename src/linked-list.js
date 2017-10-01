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

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var cur = this._head;
        for (var count = 0; count < this.length; count++) {
            if (count == index) {
                return cur.data;
            } else {
                cur = cur.next;
            }
        }
    }
    elementByIndex(index) {
    var current = this._head;
    var count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

    insertAt(index, data) {
        var element = new Node(data, null, null);
            if (index == 0) {
                if (this.isEmpty()) {
                    this._head = element;
                    this._tail = element;
                } else {
                    element.next = this._head;
                    this._head.prev = element;
                }

            } else
                if (this.isEmpty()) {
                    return this;
                } else {
                    if (index == this.length) {
                        this.append(data);
                    }  else {
                            var a = this.elementByIndex(index);
                            element.next = a;
                            element.prev = a.prev;
                            element.prev.next = element;
                            a.prev = element;
                        }
                }
            this.length++;
            return this;
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

    deleteAt(index) {
        var current = this._head;
        if (index === 0) {
            this._head = current.next;
            current.prev = null;
        } else if (index < this.length && index > 0) {
            for (var count = 0; count < index; count++) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        } else {
            return this;
        }
        this.length--;
        return this;
    }

    reverse() {
        var tail = this._tail;
        var head = this._head;
        for (var i = 0; i < this.length / 2; i++) {
            var tdata = tail.data;
            tail.data = head.data;
            head.data = tdata;
            tail = tail.prev;
            head = head.next;
        }
        return this;

    }

    indexOf(data) {
        var current = this._head; 
        var result = 0;
        for(var i = 0; i < this.length; i++){
            if(data == current.data){
                 result = i;
                 return result;
            } 
            current = current.next; 
        }
        return (result == 0)? -1 : result;
    }
}
module.exports = LinkedList;
