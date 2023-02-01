class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.nextNode = newNode;
			this.tail = newNode;
		}
	}

	prepend(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.nextNode = this.head;
			this.head = newNode;
		}
	}

	firstNode() {
		let firstNode = this.head;
		console.log(`The first value in the list is ${firstNode.value}`);
	}

	printList() {
		let currentNode = this.head;
		while (currentNode !== null) {
			console.log(currentNode.value);
			currentNode = currentNode.nextNode;
		}
	}

	size() {
		let size = 0;
		let currentNode = this.head;
		while (currentNode !== null) {
			size++;
			currentNode = currentNode.nextNode;
		}
		console.log(`This list has ${size} stored values.`);
	}
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(1);
list.append(90);
list.prepend(100);
list.prepend(200);

list.printList();

list.size();

list.firstNode();
