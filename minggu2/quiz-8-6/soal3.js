//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let isAritmatika = true
    let beda = arr[1] - arr[0]
    let deret = 0
    for (let i = arr.length - 1; i > 0; i--) {
        deret = arr[i] - arr[i - 1]
        if (deret != beda) {
            isAritmatika = false
            break
        }
    }
    return isAritmatika
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false