function bubbleSort(array,size){
    for (let i=0; i<size-1; i++){
        for (let j=0; j<size-i-1 ; j++){
            if (array[j]> array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}


let array=[12,3,45,-1,6];
let size =5;
bubbleSort(array,size);
console.log(array)

