//https://dev.to/emmabostian/creating-linked-lists-with-javascript-391e
class BookStack {
    constructor() {
      this.stack = [];
    }
    
    push(item) {
      return this.stack.push(item);
    }
    
    pop() {
      return this.stack.pop();
    }
    
    peek() {
      return this.stack[this.stack.length - 1];
    }
    
    get length() {
      return this.stack.length;
    }
    
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  let myBookStack = new BookStack();
  myBookStack.push('Oathbringer');
  myBookStack.push('The Stand');
  console.log(myBookStack.length); // 2
  console.log(myBookStack.peek()); // The Stand
  myBookStack.pop();
  myBookStack.pop();
  console.log(myBookStack.isEmpty());
  myBookStack.push('Shubham');
  console.log(myBookStack.peek());
  
  // myBookStack.pop();
  // console.log(myBookStack.length); // 1
  // console.log(myBookStack.peek()); // Oathbringer
  // console.log(myBookStack.isEmpty()); // false
  // myBookStack.pop();
  // console.log(myBookStack.isEmpty()); // true
  
  // console.log(myBookStack.stack); // ['Oathbringer']
  // myBookStack.push('The Stand');
  // console.log(myBookStack.length);
  // console.log(myBookStack.stack); // ['Oathbringer', 'The Stand']