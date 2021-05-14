


// ChannelMergerNode(leftAr,rightAr) {

// // Interete once trhout items of lenght.lef + righ.lenght
// // loop of sice leftAr rightAr
// // compare the 0 index of boot ,,, add the smlest to the new array

// // if one of the array is lenght 0... listo agregas el resto. appendend to the end


// }

// // base case aarray of case 0 y ahi empezamos los merch funtions


function merge(left,right) {

    let arr = []

    let times = left.length + right.length
    for (let i=0; i < times; i++) {

        // console.log("hey")
        if(left.length == 0) {
            arr = arr.concat(right)
        return arr
        }

        if(right.length == 0) {
            arr = arr.concat(left)
        return arr
        }

        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return arr
}

// let arr1 = [2,3,5]
// let arr2 = [1,4,6,11,12]

// console.log(merge(arr1,arr2))



function mergeSort (array) {


   
    if (array.length < 2) {

        return array
    }



    let medio = array.length / 2


    let leftpart = array.splice(0,medio)
    

    return merge (mergeSort(leftpart),mergeSort(array))


}


let array4 = [1,3,443,2,5,767,3,6565,7,2,12,43]


console.log(mergeSort(array4))
