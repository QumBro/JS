const group = [{
    name: "Rimuru",
    age: 22,
    notebook: true,
},
{
    name: "Mikky Young",
    age: 24,
    notebook: false,
},
];

function getStudentsList(arrayOfStudents) {
    arrayOfStudents.forEach(element => {
        let test = '';
        Object.entries(element).forEach(([key, value]) => {
            test = test + (`${key} - ${value}, `);
        })
        console.log(test);
    });
}

getStudentsList(group);