// https://dev.to/emmabostian/creating-linked-lists-with-javascript-391e
class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0
    }
    
    add(item) {
      var node = new Node(item)
      var current;
      if (this.head === null) {
        this.head = node;
      } else {
        current = this.head;
        while(current.next !== null) {
          current = current.next;
         }
        current.next = node;
      }
      this.size++;
      //console.log('outside',this.head);
    }
    
    removeitem(element) {
      var current = this.head;
      var prev = null
      
      while(current != null) {
        if (current.element === element) { 
          if(prev === null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
          this.size--;
          return current.element;
        }
        prev = current;
        current = current.next;
      }
      return -1;
    }
    
    printList() { 
      console.log(this.head)
      var curr = this.head; 
      var str = ""; 
      while (curr) { 
          str += curr.element + " "; 
          curr = curr.next; 
      } 
      console.log(str); 
    }
    
    deleteMid() {
        var slow = this.head;
        var fast = this.head;
        var prev = null;
        while(fast != null && fast.next != null){
            console.log(prev, slow);
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
    
        }
    
        if (prev != null)
            prev.next = slow.next;

        return this.head;
    }
    
    reverseLinkedList() {
        var current = this.head;
        var previous = null;
        var next = null;
    
        while(current) {
        // save next or you lose it!!!
        next = current.next;
        // reverse pointer
        current.next = previous;
        // increment previous to current node
        previous = current;
        // increment node to next node or null at end of list
        current = next;
        }
        console.log(previous); 
    }
  }
  
  let list = new LinkedList();
  list.add(10);
  list.add(20);
  list.add(30);
  list.add(40);
  list.add(50);
//   console.log(list.printList());
//   console.log(list.reverseLinkedList());
  console.log(list.deleteMid());