// function numberSum(num) {
//     if(num == 1) {
//       return 1;
//     }
//     else {
//       return num + numberSum(num - 1);
//     }
//   }

//   console.log(numberSum(2)); // 5 + 4 + 3 + 2 + 1 = 15

// Perpangkatan
function power(base, exponent) {
    if (exponent == 0){
        return 1;}
    else{
        return base * power(base, exponent - 1);
    }
}
console.log(power(3, 3)); // 3 ** 3 = 27

// Base 3,3* Base3,2* Base3,1* Base3,0
// Exponent 3/ 3(return Utama Karena Pertama, Nanti Bakal Dikali ama Fungsi nya sendiri => ) x power(3,2)
// Exponent 2
// 3 x 3(return) x power(3,1)
// Exponent 1
// 3 x 3 x 3(return) x power(3,0)
// Exponent 0
// 3 * 3 * 3 * 1(return Terakhir, Nanti Dikali ama return sebelumnya)'