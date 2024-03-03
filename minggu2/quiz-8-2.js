/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


function dataHandling(input) {
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input[i].length; j++) {
            // console.log(input[i][j])
            if (j === 0) {
                console.log("Nomor Id: " + input[i][j])
            } else if (j === 1) {
                console.log("Nama Lengkap: " + input[i][j])
            } else if (j === 2) {
                console.log("TTL: " + input[i][j] + ', ' + input[i][j + 1])
            } else if (j === 4) {
                console.log("Hobi: " + input[i][j])
            }
        }
        console.log("")
    }
}
dataHandling(input)

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

// Soal 2
//pada soal yg kedua, kalian harus belajar method split secara mandiri, pada soal dibawah ini, method .split() cukup powerfull loh

let input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input2) {
    input2.splice(1, 1, `${input2[1]} Elsharawy`)
    input2.splice(2, 1, `Provinsi ${input2[2]}`)
    input2.splice(5, 0, "Pria", "SMA Internasional Metro")
    potong = input2[3].split('/')

    console.log(input2)
    switch (potong[1]) {
        case '01':
            console.log('Januari')
            break
        case '02':
            console.log('Februari')
            break
        case '03':
            console.log('Maret')
            break
        case '04':
            console.log('April')
            break
        case '05':
            console.log('Mei')
            break
        case '06':
            console.log('Juni')
            break
        case '07':
            console.log('Juli')
            break
        case '08':
            console.log('Agustus')
            break
        case '09':
            console.log('September')
            break
        case '10':
            console.log('Oktober')
            break
        case '11':
            console.log('November')
            break
        case '12':
            console.log('Desember')
            break
        default:
            console.log("Bulan Tidak Ada")
            break
    }

    potong = [potong[2],potong[0],potong[1]]
    console.log(potong)
    console.log(potong.join('-'))

    let user = input2[1].slice(0, 15)
    console.log(user)
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */