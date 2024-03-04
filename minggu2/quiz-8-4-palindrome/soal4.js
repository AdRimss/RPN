function pasanganTerbesar(num) {
    // you can only write your code here!
    let strNum = num.toString()                     // Ubah Num Ke String Agar Bisa Di cek Lengthnya
    let check = ''                                  //Assign variable baru untuk menyimpan data
    for (let i = 0; i <= strNum.length - 1; i++) {   //Perulangan
        if (strNum[i] > check) {                     //Jika Angka Pada Indeks i lebih besar daripada varCheck
            check = strNum[i] + strNum[i + 1]         //Assign Angka Baru Kedalam Var Check
        }
    }
    return check
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99