class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedListStack{
    constructor(){
        this.firstOut=null;
        this.size=0;
    }

    getSize(){
        return this.size;
    }

    empty(){
        return this.size===0;
    }

    push(value){
        let node =new Node(value);
        if(this.empty()){
            this.firstOut=node;
        }
        else {
            node.next=this.firstOut;
            this.firstOut=node;
        }
        this.size++;
        return `${value}`
    }

    peek(){
        if(this.empty()){
            return "empty stack"
        }

        return this.firstOut.value
    }
    
    pop(){
        if(this.empty()){
            return "empty stack"
        }
        let curr=this.firstOut;
        this.firstOut=this.firstOut.next;
        // curr.next=null;
        this.size--;
        return curr.value;
    }

    display(){
        
        let curr=this.firstOut;
        let values='';
        while(curr){
            values += curr.value +" ";
            curr=curr.next;
        }
        console.log(values)
        return;

    }
}

let stack= new linkedListStack ();
stack.push(12)
stack.push(1)
stack.push(11)

stack.display()
console.log(stack.pop());
stack.display()
console.log(stack.getSize());
console.log("first out is ",stack.peek());


