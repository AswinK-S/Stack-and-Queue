class Node{
    constructor(value){
    this.value = value;
    this.next=null;
    }
}

class  queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0;
    }

    size(){
        return this.size;
    }

    empty(){
        this.size ===0;
    }

    enqueue(value){
        let node = new Node(value);
        if(this.size===0){
            this.front=node;
            this.rear=node;
        }
        else {
            this.rear.next=node;
            this.rear=node;
        }
        this.size++;
    }

    dequeue(){
        if(this.size===0){
            return "empty"
        }
        else{
            let curr = this.front;
            this.front=this.front.next;
            curr.next=null;
            this.size--
        }
    }

    display(){
        if(this.size===0){
            return "empty"
        }  
    else{
        let values='';
        let curr=this.front;
        while (curr){
            values = values+curr.value+" "
            curr=curr.next;
        }
        return values;
    }
    }

}

let q = new queue();
q.enqueue("a");
q.enqueue("b")
q.enqueue("c")
q.enqueue("d")
console.log(q.display())
q.dequeue()
console.log(q.display())
