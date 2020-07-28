class MovieQueue {
    constructor() {
      this.queue = [];
    }
    
    enqueue(item) {
      return this.queue.push(item);
    }
    
    dequeue() {
      if(this.queue.length === 0)
        return "underflow"
       return this.queue.shift();
    }
    
    peek() {
      if(this.queue.length === 0)
        return "queue is empty"
      return this.queue[0];
    }
    
    isEmpty() {
      return this.queue.length === 0;
    }
    
    length(){
      return this.queue.length;
    }
  }
  
  let myMovieQueue = new MovieQueue();
  myMovieQueue.enqueue('hello');
  myMovieQueue.enqueue('alica');
  myMovieQueue.enqueue('bob');
  myMovieQueue.enqueue('finch');
  console.log(myMovieQueue.length())
  console.log(myMovieQueue.peek());
  myMovieQueue.dequeue();
  myMovieQueue.dequeue();
  console.log(myMovieQueue.length())
  console.log(myMovieQueue.peek());