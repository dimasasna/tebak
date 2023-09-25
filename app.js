let maximum = parseInt(prompt("Masukan Nilai Maksimum"));
while(!maximum){
    maximum = parseInt(prompt("Masukan Nilai Maksimum"));
}
const targetNum = Math.floor(Math.random() * maximum ) + 1;
console.log(`tebakan yang benar adalah ${targetNum}`);



let guess = parseInt(prompt("Masukan tebakan pertama anda"))

while(guess !== targetNum){
    if (guess > targetNum){
        guess = parseInt(prompt("tebakan terlalu tinggi, coba lagi"));
    } else{
        guess = parseInt(prompt("tebakan terlalu rendah, coba lagi"));
    }
}

alert("Wih hebat kali anda benar");
