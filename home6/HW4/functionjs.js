Array.prototype.getUnique = function () {
    let result = [];
    this.forEach(elem => {
        if (!result.includes(elem)) {
            return result.push(elem);
        }
    })
    console.log(result);
    return result;
}

const arr = [1, 1, 2, 2, 3];
const newArr = arr.getUnique();