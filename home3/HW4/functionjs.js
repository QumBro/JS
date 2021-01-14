let inputKey = prompt('Введите новое свойство');
let obj = {
    name: 'Rimuru',
}

let add = (inputKey, inputValue, obj) => {
    obj[inputKey] = inputValue;
    console.log(obj);
}

let validate = ((inputKey) => {
    if (inputKey in obj) {
        alert('Уже имеется');
        return;
    } else {
        let inputValue = prompt('Введите значение');
        add(inputKey, inputValue, obj);
    }
})

validate(inputKey);