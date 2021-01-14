let arr = [3, 5, 12, 9, 23, 93, 17];

let quntArray = (arr) => {
    let newArr = arr.filter((el) => {
        if (el >= 2 && el <= 20) {
            return el;
        }
    })

    let result = newArr.reduce((sum, el) => {
        return sum + el;
    })
    console.log(`Массив: ${newArr}`);
    console.log(`Cумма массива: ${result}`);
}

quntArray(arr);