/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let xIndex = arr.indexOf('x') //Cari X Dan O Terdekat As Base Number
  let oIndex = arr.indexOf('o')
  if (xIndex < 0 || oIndex < 0) {
    return 0
  }

  let jarak = Math.abs(oIndex - xIndex) //Nyari Jarak Pertama As Base Range

  for (let i = 0; i < arr.length; i++) { //Loop Biasa
    if (arr[i] === 'o') {                //Kalo Ada o masukin
      oIndex = i
    }
    if (arr[i] === 'x' && Math.abs(oIndex - i) < jarak) { //Cek x ama lebih kecil dari jarak atau kaga
      xIndex = i                                          //Kalo iya Masukin
      jarak = Math.abs(xIndex - oIndex)                   //ReAssign Jarak
    }
  }
  return jarak
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2