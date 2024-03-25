const myObj = {
    nama: 'bryan',
    kelas: '12',
    hobbi: ['main', 'makan', 'tidur'],
    detail: {
        tinggi: 185,
        berat: 60
    }
};

myObj['isNolep'] = true; // or myObj.isNolep <- Nama Objek Baru = ~Value~
console.log(myObj)

delete myObj.isNolep
console.log(myObj) // or delete myObj['isNolep']

for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
} 