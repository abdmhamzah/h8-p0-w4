//  NAMA: Hamzah Abdullah Mubarak

function checkAB(num) {

    // buat variabel posisi a dan posisi b
    var a
    var b
    // loop untuk mencari huruf a atau b
    for (var i = 0; i < num.length; i++) {
        // jika bertemu dengan a atau b, maka simpan pada variabel
        if (num[i] === 'a'){
            a = i
        }
        else if (num[i] === 'b'){
            b = i
        }
    }
    console.log(a, b,);
    
    // hitung selisih jarak a dan b
    if (a === undefined || b === undefined){
        return false
    }
    else {
        // jika jaraknya sama dengan 3 return true, jika tidak return false
        if (Math.abs(a - b) === 4){
            return true
        }
        else {
            return false
        }
    }

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false