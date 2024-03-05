//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let beda = arr[1] - arr[0]
    let check = arr[arr.length - 1] - arr[arr.length - 2]
    return beda == check ? true : false
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false