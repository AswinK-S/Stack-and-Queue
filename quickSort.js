// function quickSort(array){
//     if (array.length <2){
//         return array;
//     }
//     let pivot = array[array.length-1]
//     let left = [];
//     let right = [];
//     let i=0;
//         while(i<array.length-1){
//         if(array[i]<pivot){
//             left[i]=array[i]
//         }
//         else if(array[i]>pivot){
//             right[i]=array[i]
//         }
//         i++;
//     }
//     return  [...quickSort(left),pivot,...quickSort(right)]
// }

//     let array=[-2,4,3,0,1]

//     console.log(quickSort(array))


//--------------------------------------------using for loop------------------------------

function quickSort(array){
    if (array.length <2){
        return array;
    }
    let pivot = array[array.length-1]
    let left = [];
    let right = [];
    let i=0;
    for( let i=0; i<array.length-1; i++){
        if(array[i]<pivot){
            left[i]=array[i]
        }
        else if(array[i]>pivot){
            right[i]=array[i]
        }
    }
    return  [...quickSort(left),pivot,...quickSort(right)]
}

    let array=[-2,4,3,0,1]

    console.log(quickSort(array))




