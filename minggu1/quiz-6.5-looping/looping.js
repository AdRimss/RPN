// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
function whileLoop(){
    console.log('While Loop')
    let maju = 0
    let mundur = 3
    while (maju <= 3){
        console.log('Loop pertama', maju)
        maju++
    }
    while (mundur >= 0){
        console.log('Loop kedua', mundur)
        mundur--
    }
    console.log('\n')
}
whileLoop();

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
function forLoop(){
    console.log('For Loop')
    for(let i = 0; i < 5; i++){
        console.log('Loop pertama', i)
    }
    for(let i = 4; i >= 0; i--){
        console.log('Loop kedua', i)
    }
}
forLoop()

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

function loopGanjilGenap(){
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i + ' Adalah angka genap')
        } else {
            console.log(i + ' Adalah angka ganjil')
        }
    }
}
loopGanjilGenap()

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
function counterKelipatan(){
    console.log('Loop Counter +2')
    for(let i = 1; i <= 100; i += 2){
        if(i % 3 == 0){
            console.log(i + ' Kelipatan 3')
        }
    }
    console.log('Loop Counter +5')
    for(let i = 1; i <= 100; i += 5){
        if(i % 6 == 0){
            console.log(i + ' Kelipatan 6')
        }
    }
    console.log('Loop Counter +9')
    for(let i = 1; i <= 100; i += 9){
        if(i % 10 == 0){
            console.log(i + ' Kelipatan 10')
        }
    }
}
counterKelipatan()

//5. Bintang asteriks
//Problem buatlah bintang seperti berikut
//let input = 5
//hasilnya
//*
//**
//***
//****
//*****
function asteriksSegitiga(num){
    let star = '';
    for(let i = 1; i <= num; i++){
        // console.log(i + 'i')
        for(let j = 1; j <= i; j++){
            // console.log(j + 'j')
            star += '*'
        }
        star += '\n'
    }
    console.log(star)
}
asteriksSegitiga(5)

function asteriksSegitigaMirror(num){
    let star = '';
    for(let i = 1; i <= num; i++){
        // console.log(i + 'i')
        for (let j = num; j >= i; j--){
            // console.log(j + 'j')
            star += '*'
        }
        for(let k = 1; k <= i; k++){
            star += ' '
        }
        star += '\n'
    }
    console.log(star)
}
asteriksSegitigaMirror(5)

function asteriksPersegi(num){
    let star = '';
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num; j++ ){
            star += '* '
        }
        star += '\n'
    }
    console.log(star)
}
asteriksPersegi(5)