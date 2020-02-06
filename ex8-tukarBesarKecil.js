//  NAMA: Hamzah Abdullah Mubarak

function tukarBesarKecil(kalimat) {
    
    var kecil = 'abcdefghijklmnopqrstuvwxyz'
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hasil = ''
    for (var i = 0; i < kalimat.length; i++) {
        // console.log(kalimat[i]);

        var cek = false
        for (var j = 0; j < kecil.length; j++) {
            if (kalimat[i] === kecil[j]){
                hasil += besar[j]
                cek = true
            }
        }

        for (var k = 0; k < besar.length; k++) {
            if (kalimat[i] === besar[k]){
                hasil += kecil[k]
            }
        }

        if (cek === false){
            hasil += kalimat[i]
        }
    }

    return hasil
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"