

function naikAngkot(arrPenumpang) {

    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = []

    for (var i = 0; i < arrPenumpang.length; i++) {
        console.log(arrPenumpang[i]);
        
        var naik
        var turun
        for (let j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]){
                naik = j
            }
            if (arrPenumpang[i][2] === rute[j]){
                turun = j
            }
        }
        
        var tarif = (turun - naik)*2000

        var obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: tarif
        }
        hasil.push(obj)
    }

    return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]