function pallindrome(str){
    let mid =Math.floor( str.length/2)
    let flag=0

    for(let i=0,j=str.length-1 ; i< mid; i++,j--){
        if(str[i]!==str[j]){
            flag=1;
            return false;
        }
    }
    if(flag===0){
        return true;
    }
    else{
        return false;
    }
    
}

let str='malayalam'
console.log(pallindrome(str));



