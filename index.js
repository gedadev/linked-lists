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
}

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}