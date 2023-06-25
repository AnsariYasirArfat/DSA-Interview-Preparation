class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
