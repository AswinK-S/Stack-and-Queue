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

    tochar(str){
        for(let i=0; i<str.length; i++){
           this.push(str[i])
        }
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
    
    // pop(){
    //     if(this.empty()){
    //         return "empty stack"
    //     }
    //     let curr=this.firstOut;
    //     this.firstOut=this.firstOut.next;
    //     // curr.next=null;
    //     this.size--;
    //     return curr.value;
    // }

    pop(){
        if(this.empty()){
            return "empty stack"
        }
        let curr=this.firstOut.next;
        this.firstOut.next=null;
        this.firstOut=curr;
        this.size--;
    }

    

    reverse() {
        let reversedStack = new linkedListStack();
        reversedStack.push(this.pop())
      }


    display(){
        
        let curr=this.firstOut;
        let values='';
        while(curr){
            values += curr.value;
            curr=curr.next;
        }
        console.log(values)
        return;

    }
}

let stack= new linkedListStack ();
let str="Hello how are you"
stack.tochar(str)
stack.display()
console.log(stack.getSize());


