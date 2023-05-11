class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.nextNode = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }
        this.size++;
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;            
        }
        return current;
    }

    pop() {
        if (this.head === null) {
            return null
        }
        let current = this.head;
        let newLast = null;
        while (current.nextNode) {
            newLast = current;
            current = current.nextNode;
        }
        if (newLast) {
            newLast.nextNode = null;
            this.tail = newLast;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.size--;
        return current;
    }

    contains(value) {
        let current = this.head;
        while (current.nextNode) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current.nextNode) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return null;
    }
}

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}