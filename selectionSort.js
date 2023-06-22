function swap(array,size,i,j){
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;   
}

function sort(array,size){
    for (let i = 0; i<size; i++){
     for(let j=i+1; j<size; j++){
        if(array[i]>array[j]){
            swap(array,size,i,j)
        }
     }   
    }
}

function print(array){
    console.log("Sorted Array: ",array);
}

let array=[33,55,3,563,-1]
let size=5;
sort(array,size);
print(array);