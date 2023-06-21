class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedListStack{
    constructor(){
        this.firstOut=null;
        this.lastOut=null;
        this.size=0;
    }

    empty(){
        return this.size===0;
    }

    push(value){
        let node =new Node(value);
        if(this.empty()){
            this.firstOut=node;
            this.lastOut=node;
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
        this.firstOut=curr.next;
        curr.next=null;
        return "popped"
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
stack.pop()
stack.display()
console.log("last out is ",stack.peek());


