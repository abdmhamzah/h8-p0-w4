//  NAMA: Hamzah Abdullah Mubarak

function ubahHuruf(kata) {
    
    kata.toLowerCase()
    var alfa = 'abcdefghijklmnopqrstuvwxyz'
    var temp = ''
    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < alfa.length; j++) {
            if (kata[i] === alfa[j]){
                temp += alfa[j+1]
            }
        }
    }
    return temp
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu