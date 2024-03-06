/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort()
  let result = []
  let save = []

  for (let i = 0; i < animals.length; i++) {
    if (i == 0) {
      save.push(animals[i])                   //Assign Hewan Awal
      continue
    } else if (animals[i][0] == save[0][0]) { //Pengecekan Kalau Huruf Pertama nya sama masukin,
      save.push(animals[i])
    } else {                      //Kalau ga, Masukin save ke result
      result.push(save)           //Awas Salah, ntar malah masukin array, atau ketika perlu array malah kaga lu masukin
      save = [animals[i]]         //Terus Kosongin Savenya, bisa langsung diubah jadi data baru
    }
  }
  result.push(save)               //Masukin Save Ke Result Dari Aksi
  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]