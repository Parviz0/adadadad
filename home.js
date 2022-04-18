let arr = [
    {
        id: 0,
        name: 'Alex',
        lastname: 'Adams',
        isWorker: true,
        family: true,
        works: [
            {
                title: "Google",
                income: 1000,
                incomPlus: true
            },
            {
                title: "Microsoft",
                income: 2100,
                incomPlus: false
            }
        ],
    },
    {
        id: 2,
        name: 'Barbara',
        lastname: 'Howell',
        isWorker: false,
        family: false,
        works: [
            {
                title: "It Park",
                income: 10,
                incomPlus: false
            },
        ],
    },
    {
        id: 0,
        name: 'Victor',
        lastname: 'Plains',
        family: false,
        isWorker: true,
        works: [
            {
                title: "YouTube",
                income: 10000,
                incomPlus: true
            },
            {
                title: "Microsoft",
                income: 2100,
                incomPlus: true
            }
        ],
    },
    {
        id: 1,
        name: 'Daler',
        lastname: 'Sharifkulov',
        isWorker: true,
        family: false,
        works: [
            {
                title: "Wepro",
                income: '?',
                incomPlus: true
            },
            {
                title: "MadAd",
                income: 200,
                incomPlus: true
            },
        ],
    },
    {
        id: 1,
        name: 'Anis',
        lastname: 'Akhmedov',
        isWorker: true,
        family: false,
        works: [
            {
                title: "Wepro",
                income: 0,
                incomPlus: false
            },
            {
                title: "Yandex",
                income: 2100,
                incomPlus: true
            }
        ],
    },
]

let izbranie = []
let family = []
let noFamily = []
let muchMoney = []
let soSoMoney = []
let richBoy = []
let needyBoy = []
let workers = []
let noWorkers = []

// 1. В массив family кинуть тех у кого family: true
// 2. В массив noFamily кинуть тех у кого family: fasle
// 3. В массив izbrannoe кинуть тех у кого id 1
// 4. В массив muchMoney кидать тех людей у кого зарплата работе больше 1000$
// 5. В массив soSoMoney кидать тех людей у кого зарплата работе меньше 1000$
// 6. В массив RichBoy кидать тех людей у кого incomePlus true
// 7. В массив needyBoy кидать тех людей у кого incomePlus false
// 8. В массив workers кидать тех людей у кого isWorker true
// 9. В массив noWorkers кидать тех людей у кого isWorker false  



//task 1,2
for (let item of arr) {
    if (item.family == true) {
        family.push(item)
        console.log(family);
    } else{
        noFamily.push(item)
        console.log(noFamily);
    }
}
//task 1,2 end

//task 3
for (let item of arr) {
    if (item.id === 1) {
        izbranie.push(item)
        console.log(izbranie);
    }
}
//task 3 end
//task 4
    for(let item of arr){
        for(let item2 of item.works){
            if(item2.income > 1000){
                muchMoney.push(item2)
                console.log(muchMoney);
            }
        }
    }
//task 4 end
//task 5
for(let item of arr){
    for(let item2 of item.works){
        if(item2.income < 1000){
            soSoMoney.push(item2)
            console.log(soSoMoney);
        }
    }
}
//task 5 end
//task 6,7
for(let item of arr){
    for(let item2 of item.works){
        if(item2.incomPlus == true){
            richBoy.push(item2)
            console.log(richBoy);
        } else{
            needyBoy.push(item2)
            console.log(needyBoy);
        }
    }
}
//task 6,7 end


//task 8,9
for(let item of arr){
    
        if(item.isWorker == true){
            workers.push(item)
            console.log(workers);
        } else{
            noWorkers.push(item)
            console.log(noWorkers);
        }
    
}
//task 8,9 end