//  NAMA: Hamzah Abdullah Mubarak

function shoppingTime(memberId, money) {
    
    // verifikasi untuk yang tidak memenuhi syarat
    if (memberId === '' || memberId === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }

    var barang = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000],
    ]

    var dibeli = []
    var kembalian = money
    // loop harga barang supaya money dapat dikurangi, push ke dibeli jika harganya lebih kecil dr money
    for (var i = 0; i < barang.length; i++) {
        if (kembalian >= barang[i][1]){
            dibeli.push(barang[i][0])
            kembalian -= barang[i][1]
        }
    }
    // console.log(dibeli, kembalian);
    
    // buat obj untuk mendapatkan return hasil
    var obj = {
        member: memberId,
        money: money,
        listPurchased: dibeli,
        changeMoney: kembalian
    }
    return obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja