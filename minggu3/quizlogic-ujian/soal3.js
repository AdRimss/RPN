function highestScore(students) {
    // Code disini
    // Cek Nilai
    let objData = {};

    for (let i = 0; i < students.length; i++) {
        if (objData[students[i].class] == undefined || students[i].score > objData[students[i].score]) {
            objData[students[i].class] = {
                name: students[i].name,
                score: students[i].score
            }
        }
    }

    // students.forEach(element => {
    //     if (objData[`${element.class}`] == undefined || element.score > objData[`${element.class}`].score) {
    //         objData[`${element.class}`] = {
    //             name: element.name, score: element.score
    //         }
    //     }
    // });

    return objData;
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