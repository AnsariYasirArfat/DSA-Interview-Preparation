class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null; // or throw an error indicating queue underflow
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue();

queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.dequeue());
