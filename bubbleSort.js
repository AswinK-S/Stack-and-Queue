function bubbleSort(array,size){
    for (let i=0; i<size-1; i++){
         let flag=0;
        for (let j=0; j<size-i-1 ; j++){
            if (array[j]> array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag=1;
            }
        }
        if(flag===0){
            break;
        }
    }
}


let array=[12,3,45,-1,6];
let size =5;
bubbleSort(array,size);
console.log(array)