class Stack{
    constructor(){
        this.stack = []
    }

    size(){
        return this.stack.length;
    }

    Split(string){
        for(let i=0; i<string.length; i++){
           this.Push(string[i]);
        }
    }

   
      

    Push(string){
        this.stack.push(string)
    }
  display(){
    console.log(this.stack.join(''))
  }

  isPallindrome(){
    let stack1 = new Stack()
     stack1.push(this.stack.pop())
     console.log(stack1)
}


}



let string='malayalam'
let obj = new Stack()
obj.Split(string)
obj.display()
obj.isPallindrome()
