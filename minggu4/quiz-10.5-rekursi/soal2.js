/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  let tempArr = str.split('');
  let vocal = {
    a: 'b',
    i: 'j',
    u: 'v',
    e: 'f',
    o: 'p'
  };
  for (let i = 0, upper = str.toUpperCase(); i < tempArr.length; i++) {
    if (vocal[tempArr[i].toLowerCase()] && tempArr[i] == upper[i]) {
      tempArr[i] = vocal[tempArr[i].toLowerCase()].toUpperCase();
    } else if (vocal[tempArr[i]]) {
      tempArr[i] = vocal[tempArr[i]];
    }
  }
  return tempArr.join('');
}

function reverseWord(str) {
  //code di sini
  let reversed = str.split('').reverse().join('')
  return reversed;
}

function setLowerUpperCase(str) {
  //code di sini
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

function removeSpaces(str) {
  //code di sini 
  return str.replace(/\s+/g, '');
}


function passwordGenerator(name) {
  //code di sini
  if (name.length < 5){
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  let newPassword = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  return newPassword
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'