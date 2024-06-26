function cariMedian(arr) {
    // you can only write your code here!
    function urut(a, b) {
        return (a - b)
    }
    arr.sort((a, b) => a - b)
    let i = 0
    if (arr.length % 2 != 0) {
        i = Math.floor(arr.length / 2)
        return arr[i]
    } else {
        i = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
        return i
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5