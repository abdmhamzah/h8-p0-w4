//  NAMA: Hamzah Abdullah Mubarak

function highestScore (students) {
    
    var obj = {}
    for (let i = 0; i < students.length; i++) {
        if (obj[students[i].class] === undefined){
            // console.log('dia undifined');
            obj[students[i].class] = students[i]
            delete obj[students[i].class].class

        }
        else {
            // console.log('dia ga undifined');
            if (obj[students[i].class].score < students[i].score) {
                obj[students[i].class] = students[i]
                delete obj[students[i].class].class
            }
        }
    }
    console.log(obj);
}


// TEST CASE
console.log(highestScore([
{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
},
{
    name: 'Alisa',
    score: 76,
    class: 'wolves'
},
{
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
},
{
    name: 'Albert',
    score: 71,
    class: 'wolves'
},
{
    name: 'Viktor',
    score: 80,
    class: 'tigers'
}
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}


// var obj = {}
//     // 1. obj[students[i].class === undifened
//     // > obj[students[i].class] = [students[i]]
//     // >> obj = {
//         // foxes: [{
//         //     name: 'Dimitri',
//         //     score: 90,
//         //     class: 'foxes'
//         // }]

//     //}
//     // << obj[students[i]].class 
//     // obj[students[i].class].push(students[i])
//     var kelas = students[0].class
//     for (let i = 0; i < students.length; i++) {

//         if(students[i].class === kelas){

//         }
//     }
//     // result
//     // forin
//     // forloop untuk ngsort