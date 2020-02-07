//  NAMA: Hamzah Abdullah Mubarak

function changeMe(arr) {
    
    for (var i = 0; i < arr.length; i++) {
 
        // hitung umur
        var umur = 0
        if (arr[i][3] !== undefined){
            umur = 2019 - arr[i][3]
        }
        else if (arr[i][3] === undefined){
            umur = 'Invalid Birth Year'
        }
        console.log(umur);
        
        // buat numbering
        var list = `${i+1}. ${arr[i][0]} ${arr[i][1]}`

        // buat object
        var obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: umur
        }

        console.log(list, obj);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""