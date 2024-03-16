//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let num = []
  let kecil, besar
  if (angka1 <= angka2) {
    kecil = angka1;
  } else {
    kecil = angka2;
  }
  if (angka1 >= angka2) {
    besar = angka1;
  } else {
    besar = angka2;
  }

  for(let i = 1; i < kecil; i++){
    if (kecil % i == 0 && besar % i == 0){
      num.push(i)
    }
  }
  return Math.max(...num)
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1