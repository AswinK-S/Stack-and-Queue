function insertionSort(array,length){
    for( let i= 1; i<length ; i++){
        let key=array[i];
        let j=i-1;
        while (j>=0 && array[j]>key){
            array[j+1]=array[j];
            j=j-1;
        }
        array[j+1]=key;
    }
}

let array=[8,20,-2,4,-6]
insertionSort(array,array.length);
console.log(array)