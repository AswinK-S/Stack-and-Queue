class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedListStack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }

    push(value){
        let node =new Node(value);
        if(!this.first){
            this.first=node;
            this.last=node;
        }
        else {
            node.next=this.first;
            this.first=node;
        }
        this.size++;
        return `${value}`
    }
}

let stack= new linkedListStack ();
console.log(stack.push(12));
console.log(stack.push(1));