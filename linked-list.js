/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }



  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next
    }
    return current.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next
    }
    current.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);

    if (idx === 0) {
        newNode.next = this.head;
        this.head = newNode;
        if (this.length === 0) {
            this.tail = newNode;
        }
    } else {
        let prev = this.head;
        for (let i = 0; i < idx - 1; i++) {
            prev = prev.next;
        }
        newNode.next = prev.next;
        prev.next = newNode;
        if (newNode.next === null) {
            this.tail = newNode;
        }
    }

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }

      return removedNode.val;
    }

    let prev = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prev = prev.next;
    }

    const removedNode = prev.next;
    prev.next = removedNode.next;

    // Handle case when removing the last node
    if (removedNode === this.tail) {
      this.tail = prev;
    }

    this.length--;

    return removedNode.val;
  }


  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next
    }
    return sum / this.length
  }
}

module.exports = LinkedList;
