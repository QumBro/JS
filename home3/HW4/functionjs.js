let inputKey = prompt('Введите новое свойство');
let obj = {
    name: 'Rimuru',
}

let add = (inputKey, inputValue, obj) => {
    obj[inputKey] = inputValue;
    console.log(obj);
}

let validate = (() => {
    if (inputKey in obj) {
        alert('Уже имеется');
        return 0;
    } else {
        let inputValue = prompt('Введите значение');
        add(inputKey, inputValue, obj);
    }
})

validate(inputKey);