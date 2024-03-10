class Node {
    constructor(data, nextNode = null) {
        this.data = data;
        this.nextNode = nextNode;
    }
};

class LinkedList {
    constructor() {
        this.headNode = null;
        this.length = 0;
    }

// append(value) adds a new node containing value to the end of the list
append(value) {
    let current = this.headNode;
    while(current.nextNode) { 
        current = current.nextNode;
    }
    current.nextNode = new Node(value);
    this.length++;
}

// prepend(value) adds a new node containing value to the start of the list
prepend(value) {
    this.headNode = new Node (value, this.headNode);
    this.length++;
}

// size returns the total number of nodes in the list
size() {
    console.log(`List contains ${this.length} nodes.`);
}

// head returns the first node in the list
head() {
    if(this.headNode) {
        console.log(`${this.headNode.data} is the first node in the list.`);
    } else if(this.headNode === null) {
        console.log("List is empty.");
    }
}

// tail returns the last node in the list
tail() {
    let current = this.headNode;
    while (current.nextNode !== null) {
        current = current.nextNode;
    }
    console.log(`${current.data} is the last node in the list.`);
}

// at(index) returns the node at the given index
at(index) {
    let current = this.headNode;
    if(index > this.length) {
        console.log("There is no node under that index.");
    } else if (index <= 0) {
            console.log(current);
        } else {
            for (let i=0; i<index; i++) {
                current = current.nextNode;
            }
                console.log(`Node ${current.data} is located under given index.`)
        }
    }

// pop removes the last element from the list
pop() {
    if (!this.headNode) {
        console.log("List is empty. Nothing to remove.");
        return;
    }

    if (!this.headNode.nextNode) {
        this.headNode = null; // Remove the only element in the list
        this.length--;
        return;
    }

    let current = this.headNode;
    let previous = null;

    // Traverse to the end of the list
    while (current.nextNode) {
        previous = current;
        current = current.nextNode;
    }

    if (previous) {
        previous.nextNode = null; // Remove the last element
    } else {
        this.headNode = null; // List only had one element
    }

    this.length--;
}

// contains(value) returns true if the passed in value is in the list and otherwise returns false
contains(value) {
    let current = this.headNode;
    while(current != null) {
        if(value == current.data) {
            return true;
        }
        current = current.nextNode;
    }
    return false;
}

// find(value) returns the index of the node containing value, or null if not found
find(value) {
    let current = this.headNode;
    let index = 0;
    while(current != null) {
        if(current.data === value) {
            console.log(`Value is placed under index ${index}.`);
            return;
        } 
        current = current.nextNode;
        index++;
        }
        console.log("Value is not in the list.");
    }

// toString represents your LinkedList objects as strings, so you can print them out and
// preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
toString() {
    let current = this.headNode;
    let stringList = '';

    while(current !== null) {
        stringList += `((${current.data}) -> `;
        current = current.nextNode;
    }
    stringList += 'null';
    console.log(stringList);
}

// insertAt(value, index) that inserts a new node with the provided value at the given index
insertAt(value, index) {
    if(index < 0 || index >= this.length) {
        return;
    }

    if(index === 0) {
        this.headNode = new Node(value, this.headNode);
        this.length++;
        return;
    }

    const newNode = new Node(value);
    let current = this.headNode;

    for(let i = 0; i <= index-1; i++) {
        current = current.nextNode;
    }

    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.length++;
}

// removeAt(index) that removes the node at the given index
removeAt(index) {
    if(index < 0 || index >= this.length) {
        return;
    }

    let current = this.headNode;
    let previous = null;
    let count = 0;

    if(index === 0) {
        this.headNode = current.nextNode;
    } else {
        while(count < index) {
            previous = current;
            current = current.nextNode;
            count++;
        }
        previous.nextNode = current.nextNode;
    }
    this.length--;
}

// Clear the entire list
clearList() {
    this.headNode = null;
    this.length = 0;
}

}


let list = new LinkedList();

list.prepend(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log(list);

list.size(); 
list.head();
list.tail();
list.at(3);
//list.pop();

console.log(list);

console.log(list.contains(2));
console.log(list.contains(55));

list.find(3);
list.find(57);
list.toString();

console.log(list);

list.removeAt(2);
list.insertAt(9000,3);
list.toString();
//list.clearList();



