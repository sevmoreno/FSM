
let array1 = [2,3,4,5,6,7,8,9,10]


function findAnElement(arr,val) {

console.log(arr)
// console.log(val)

let start = 0
let end = arr.length - 1
console.log(end)
 

while (start <= end) {

    let mid = Math.floor((end + start) / 2)
    console.log(mid)
    console.log(arr[mid] + " Este es el valor en el array")
    // mid = Math.floor((end + start) / 2)

    if  (arr[mid] === val) {

        return "Valor encontrado en el index " + mid
      } 

    if (arr[mid] > val) {
      end = mid  

    } else if (arr[mid] < val) {

     start = mid  

    }
    
    
} 

    return false

}



let numero = 2
console.log(findAnElement(array1,numero))