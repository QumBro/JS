let sum = 0;
let a = prompt('Введите число:');

function toDegree(a) {
    for (let i = 1; i <= a; i++) {
        sum += i ** 2;
    }
    return sum;
}

toDegree(a);
alert(`Сумма: ${sum}`);