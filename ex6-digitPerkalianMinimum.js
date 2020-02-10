//  NAMA: Hamzah Abdullah Mubarak

function digitPerkalianMinimum(angka) {
    
    var faktor = []
    for (let i = 0; i <= angka; i++) {
        var bagi = angka/i
        if (angka % i == 0){
            faktor.push([`${i}${bagi}`])
        }
    }
    console.log(faktor);
    
    var pendek = faktor[0][0].length
    for (let j = 0; j < faktor.length; j++) {
        for (let k = 0; k < faktor[j].length; k++) {
            console.log(faktor[j][k].length);
            if (pendek > faktor[j][k].length){
                pendek = faktor[j][k].length
            }
        }
    }
    return pendek
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2