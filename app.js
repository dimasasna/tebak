// let namaDepan = 'Dimas'
// let namaBelakang = "Asna Nugraha"
// let umur = 22
// let hobi = 'bermain game'
// let statusKehidupan = 'pacaran'
// console.log(`nama saya ${namaDepan} ${namaBelakang} umur saya ${umur} hobi saya ${hobi} dan saya ${statusKehidupan}`)
// let phy = Math.PI
// console.log(phy)

// const hari = prompt("Isikan Hari!").toUpperCase()
// if (hari == 'SENIN'){
//     console.log('Selamat Bekerja huft');
// }else if(hari == 'SABTU'){
//     console.log('Selamat Malam Minggu')
// }else{
//     console.log('biasa sajah')
// }

// for(let i = 1; i <= 10; i++ ){
//     console.log('Ayang Nakal Sekali');
//     console.log(i)
// // }

// const mobil = 'abcd'

// for (let i = 1; i <= 4; i++){
//     console.log(`Soal Nomer ${i}`)
//     for(let j = 0; j < mobil.length; j++){
//         console.log(`    ${mobil[j]} Pilihan Jawaban`)
//     }
// }

// const biodata = [
//     ['dimas', 'asna', 'nugraha'],
//     ['faiza', 'dyah', 'sari'],
//     ['ega', 'indriyana', 'putri']
// ]

// for(let i = 0; i < biodata.length; i++){
//     const bio = biodata[i];
//     console.log(`Data ke ${i+1}`)
//     for (let j = 0; j < bio.length; j++){
//         console.log(`    ${bio[j]}`)
//     }
// }

// const email = 'admin';

// let guess = prompt('Masukan email Ler');
// while(guess !== email){
//     prompt('Masukan email Ler');
// }
// alert('Selamat Berhasil masuk');

let maximum = parseInt(prompt("Masukan Nilai Maksimum"))
while(!maximum){
    maximum = parseInt(prompt("Masukan Nilai Maksimum"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Masukan Tebakan Pertamamu'))
while(guess !== targetNum){
    if (guess > targetNum){
        guess = prompt("tebakan terlalu tinggi, coba lagi")
    }else{
        guess = prompt("tebakan terlalu rendah, coba lagi")
    }
}

alert("Wih hebat kali anda benar")