const obj = { a: 1, b: 2, c: 3, d: false, e: 0, 10: true, 11: true };

Object.prototype.getKeySum = function () {
    let sum = 0
    Object.entries(this).map(([key, value]) => {
        if (value === true) sum += +key
    })
    return sum
}

Object.prototype.reversKey = function () {
    let arrNew = Object.entries(this).map(([key, value]) => [key, value].reverse())
    return Object.fromEntries(arrNew)
}

const newRev = obj.reversKey()
const newSum = obj.getKeySum()
console.log(newRev);
console.log(newSum);