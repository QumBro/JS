function fRek(n) {
    return n <= 1 ? n : fRek(n - 1) + fRek(n - 2);
}

const f = n => {
    let num1 = 0, num2 = 1;
    for (let i = 0; i < n; i++) {
        let sum = num2;
        num2 = num1 + num2;
        num1 = sum;
    }
    return num1;
}

const res1 = fRek(3);
const res2 = f(3);
console.log(res1);
console.log(res2);