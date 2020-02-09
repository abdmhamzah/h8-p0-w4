

function cariModus(arr) {
    
    var unik = []
    var ulang = []
    for (var i = 0; i < arr.length; i++) {
        var cek = false
        for (let j = 0; j < unik.length; j++) {
            if (arr[i] === unik[j]){
                cek = true
                ulang[j]++
            }
        }
        if (cek == false){
            unik.push(arr[i])
            ulang.push(1)
        }
    }
    console.log(unik, ulang);

    if (unik.length == 1 || arr.length == unik.length){
        return -1
    }

    var besar = 0
    var index = 0
    for (let k = 0; k < ulang.length; k++) {
        if (besar < ulang[k]){
            besar = ulang[k]
            index = k
        }
    }
    console.log(besar);
    
    return unik[index]

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1