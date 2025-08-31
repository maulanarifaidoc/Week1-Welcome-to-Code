/*## Soal 5. Bintang asteriks
```js
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//***** 
// */

let input = 5;

for(i = 1; i <= input; i++){
    let baris = "";         // untuk menyimpan *
    for(j = 1; j <= i; j++){
        baris += "*";       //tambah bintang
    }
console.log(baris)          //mencetak bintang tiap baris
}