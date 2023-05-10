class LinkedList {
    constructor() {
        this.HEAD = null;
    }

    append(value) {
        const node = new Node(value);
        if (this.HEAD === null) {
            this.HEAD = node;
        }
    }
}

class Node {
    constructor(value) {
        this.value = null;
        this.nextNode = null;
    }
}