let array = [[1, 6, 3, '6'], [10, 15, 13, '10']];

let result = array.reduce((elem1, elem2) => {
    let mass = elem1.concat(elem2)
    let mass2 = mass.filter((element) => {
        if (typeof element === 'number' && element % 2 == 0) {
            return element;
        }
    })
    return mass2
}).reduce((a, b) => {
    return a + b
})

console.log(result);